import React from "react";
import * as Button from "./Button";

export default function BotomAction() {
    return (
        <div className="text-center py-14 bg-boost-mobile md:bg-boost-desktop bg-no-repeat bg-cover bg-purple">
            <div className="container">
                <h1 className="text-white font-bold text-2xl md:text-3xl mb-5">
                    Boost your links today
                </h1>

                <Button.primary className="h-12">
                    <a href="/">Get Started</a>
                </Button.primary>
            </div>
        </div>
    );
}
