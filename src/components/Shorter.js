import React, { useEffect, useState } from "react";
import Alert from "./Alert";
import * as Button from "./Button";

export default function Shorter({ urlList, setUrlList }) {
    const [url, setUrl] = useState("");
    const [isError, setIsError] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [isSuccess, setIsSuccess] = useState(false);

    const validURL = (str) => {
        var pattern = new RegExp(
            "^(https?:\\/\\/)?" +
                "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|" +
                "((\\d{1,3}\\.){3}\\d{1,3}))" +
                "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" +
                "(\\?[;&a-z\\d%_.~+=-]*)?" +
                "(\\#[-a-z\\d_]*)?$",
            "i"
        );
        return !!pattern.test(str);
    };

    const createShortLink = () => {
        setIsLoading(true);
        fetch(`https://api.shrtco.de/v2/shorten?url=${url}`)
            .then((data) => data.json())
            .then((data) => {
                if (data.ok) {
                    setUrlList([
                        ...urlList,
                        {
                            link: data.result.original_link,
                            short: data.result.full_short_link,
                        },
                    ]);
                    setUrl("");
                }
                setIsLoading(false);
                setIsSuccess(true);
            })
            .catch((error) => {
                setIsLoading(false);
                alert(error.error);
            });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (validURL(url)) {
            setIsError(false);
            createShortLink();
        } else {
            setIsError(true);
        }
    };

    useEffect(() => {
        setTimeout(function () {
            setIsSuccess(false);
        }, 5000);
    }, [isSuccess]);

    return (
        <div className="p-5 md:p-14 rounded-lg shadow bg-purple bg-shorten-mobile md:bg-shorten-desktop bg-cover bg-no-repeat">
            <form
                className="grid grid-cols-1 md:grid-cols-4 gap-4"
                onSubmit={handleSubmit}
            >
                <div className="col-auto md:col-span-3">
                    <input
                        type="text"
                        value={url}
                        onChange={(e) => setUrl(e.target.value)}
                        className={`w-full h-14 border-2 rounded px-4 py-2 focus:outline-none ${
                            isError ? "ring-2 ring-red-300" : "ring-0"
                        } focus:ring-4`}
                        placeholder="Shorten a link here..."
                    />
                    {isError && (
                        <p className="text-red-300 text-sm mt-2">
                            <i>Please add a link</i>
                        </p>
                    )}
                </div>

                <Button.alternatif
                    type="submit"
                    disabled={isLoading}
                    className="h-14"
                >
                    {isLoading ? (
                        <div className="flex items-center justify-center">
                            <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-b-2 border-white mr-5"></div>
                            Processing
                        </div>
                    ) : (
                        "Shorten It"
                    )}
                </Button.alternatif>
            </form>
            <div className="fixed bottom-0 left-0 right-0 z-50">
                {isSuccess && (
                    <Alert
                        message="Success!"
                        onClose={() => {
                            setIsSuccess(false);
                        }}
                    />
                )}
            </div>
        </div>
    );
}
