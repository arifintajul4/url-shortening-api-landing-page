import React, { useState } from "react";
import Shorter from "./Shorter";
import Card from "./Card";
import iconBrand from "../assets/icon-brand-recognition.svg";
import iconDetailed from "../assets/icon-detailed-records.svg";
import iconFully from "../assets/icon-fully-customizable.svg";
import Alert from "./Alert";
import * as Button from "./Button";

export default function Statistic() {
    const [urlList, setUrlList] = useState([]);
    const [notif, setNotif] = useState([]);

    const NotifElement = () => {
        return (
            <Alert
                message="Link berhasil disalin"
                onClose={() => {
                    setTimeout(removeArr, 1500);
                }}
            />
        );
    };

    const removeArr = () => {
        setNotif([]);
    };

    const handleOnCopy = (e) => {
        setNotif([...notif, <NotifElement />]);
        setTimeout(removeArr, 1500);
    };

    return (
        <div
            className="flex flex-col justify-center py-14 pb-28 bg-gray-300"
            style={{ position: "relative" }}
        >
            <div className="container md:container-lg absolute left-0 right-0 -top-20">
                <Shorter urlList={urlList} setUrlList={setUrlList} />
            </div>
            <div className="mt-10 container mb-5">
                {urlList.map((el, idx) => {
                    return (
                        <div
                            key={idx}
                            className="bg-white p-4 rounded grid items-center grid-cols-1 md:grid-cols-7 gap-4 mb-4"
                        >
                            <div className="md:col-span-4 font-bold text-gray-700 border-b-2 md:border-b-0 pb-2 md:pb-0">
                                {el.link}
                            </div>
                            <div className="md:col-span-2 md:text-right">
                                <a
                                    href={el.short}
                                    target="_blank"
                                    className="text-green font-bold cursor-pointer"
                                >
                                    {el.short}
                                </a>
                            </div>
                            <div>
                                <Button.alternatif
                                    onClick={() => {
                                        navigator.clipboard.writeText(el.short);
                                        handleOnCopy();
                                    }}
                                    className="h-0 w-full focus:bg-purple"
                                >
                                    Copy
                                </Button.alternatif>
                            </div>
                        </div>
                    );
                })}

                <div className="grid grid-cols-4">
                    <div></div>
                    <div className="text-center mt-16 md:col-span-2">
                        <h1 className="text-xl md:text-5xl font-bold text-gray-900 mb-4">
                            Advanced Statistic
                        </h1>
                        <p className="text-gray-700">
                            Track how your links are performing across the web
                            with our advanced statistic dashboard.
                        </p>
                    </div>
                    <div></div>
                </div>
            </div>
            <div>
                <div className="relative block md:hidden">
                    <div className="h-96 w-3 bg-green mx-auto absolute left-0 right-0 top-48"></div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-10 container mt-14 mb-0 md:mb-20">
                    <div className="static z-10">
                        <Card
                            title="Brand Recognition"
                            icon={iconBrand}
                            desc="Boost your brand recognition with each click. Generic links
                don't mean a thing. Branded links help instill confidence in
                your content."
                        />
                    </div>
                    <div className="static md:relative z-10">
                        <div className="static md:absolute md:top-14">
                            <Card
                                title="Detailed Records"
                                icon={iconDetailed}
                                desc="Gain insights into who is clicking your link. knowing when and where people engage with your content helps inform better decisions."
                            />
                        </div>
                    </div>
                    <div className="static md:relative z-10">
                        <div className="static md:absolute md:top-28">
                            <Card
                                title="Fully Customable"
                                icon={iconFully}
                                desc="Improve brand awareness and content discoverability through customizable link, supercharging audience engagement"
                            />
                        </div>
                    </div>
                    <div className="md:col-span-3 hidden md:block">
                        <div className="relative">
                            <div className="h-3 md:w-auto bg-green mx-auto absolute left-5 right-5 -top-40 z-0"></div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="fixed bottom-0 left-0 right-0 z-50">{notif}</div>
        </div>
    );
}
