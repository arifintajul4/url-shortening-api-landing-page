import React from "react";
import * as Button from "./Button";

export default function Hero() {
    return (
        <div className="container md:container-lg grid items-center grid-cols-1 md:grid-cols-2 gap-4 pt-28 pb-40">
            <div className="my-auto text-center md:text-left">
                <h1 className="font-bold text-5xl md:text-7xl mb-3 text-gray-lg">
                    More than just shorter links
                </h1>
                <p className="text-gray-sm mb-5 leading-relaxed md:text-xl">
                    Build your brand's recognition and get detailed insights on
                    how your links are perfoming.
                </p>
                <Button.primary className="h-12 mt-5 px-6">
                    Get Started
                </Button.primary>
            </div>
            <div className="order-first md:order-last h-64 md:h-full w-screen">
                <div className="bg-hero bg-no-repeat bg-contain h-96 md:w-screen min-w-max relative -top-20 -right-16 md:-top-10 md:-right-28 z-0"></div>
            </div>
        </div>
    );
}
