import React from "react";
import * as Button from "./Button";

export default function Hero() {
    return (
        <div className="container grid items-center grid-cols-1 md:grid-cols-2 gap-4 h-screen">
            <div className="my-auto text-center md:text-left md:pb-20">
                <h1 className="font-bold text-3xl md:text-7xl mb-3 text-gray-800 leading-relaxed">
                    More than just shorter links
                </h1>
                <p className="text-gray-600 mb-5 leading-relaxed md:text-xl">
                    Build your brand's recognition and get detailed insights on
                    how your links are perfoming.
                </p>

                <Button.primary className="h-12 mt-5">
                    Get Started
                </Button.primary>
            </div>
            <div className="order-first md:order-last h-64 md:h-96">
                <div className="bg-hero bg-no-repeat bg-cover h-full w-96 md:w-auto relative md:-top-16 md:-right-52 z-0"></div>
            </div>
        </div>
    );
}
