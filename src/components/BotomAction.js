import React from "react";
import * as Button from "./Button";

export default function BotomAction() {
    return (
        <div className="text-center py-16 bg-boost-mobile md:bg-boost-desktop bg-no-repeat bg-cover bg-purple">
            <div className="container md:container-md">
                <h1 className="text-white font-bold text-3xl md:text-3xl mb-5">
                    Boost your links today
                </h1>

                <Button.primary className="h-12 px-6">
                    Get Started
                </Button.primary>
            </div>
        </div>
    );
}
