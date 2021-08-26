import React from "react";
import * as Button from "./Button";

export default function Hero() {
    return (
        <div className="container grid grid-cols-1 md:grid-cols-2 mb-24 gap-4 pt-0 my-10">
            <div className="my-auto text-center md:text-left">
                <h1 className="font-bold text-2xl md:text-4xl mb-3 text-gray-800">
                    More than just shorter links
                </h1>
                <p className="text-gray-600 mb-5">
                    Build your brand's recognition and get detailed insights on
                    how your links are perfoming.
                </p>

                <Button.primary className="h-12">
                    <a href="/">Get Started</a>
                </Button.primary>
            </div>
            <div className="order-first md:order-last h-64 md:h-96 ">
                <div className="bg-hero bg-no-repeat bg-cover h-full w-96 md:w-auto relative md:-right-52 z-0"></div>
            </div>
        </div>
    );
}
