import React, { useState, useRef, useEffect } from "react";
import * as Button from "./Button";

export default function Navbar() {
    const [isActive, setisActve] = useState(false);
    const wrapperRef = useRef(null);

    function useOutsideAlerter(ref) {
        useEffect(() => {
            function handleClickOutside(event) {
                if (ref.current && !ref.current.contains(event.target)) {
                    setisActve(false);
                } else {
                    setisActve(!isActive);
                }
            }
            document.addEventListener("click", handleClickOutside);
            return () => {
                document.removeEventListener("click", handleClickOutside);
            };
        }, [ref, isActive]);
    }

    useOutsideAlerter(wrapperRef);

    return (
        <div className="container md:container-lg">
            <div className="flex py-4 md:pt-12">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="mr-10" role="banner">
                        <a href="/" className="text-3xl font-bold text-gray-lg">
                            Shortly
                        </a>
                    </div>
                    <div className="inline-block lg:hidden">
                        <button ref={wrapperRef}>
                            {!isActive ? (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-900"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16M4 18h16"
                                    />
                                </svg>
                            ) : (
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6 text-gray-900"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <div
                    className="items-center justify-between w-full hidden md:flex"
                    role="navigation"
                >
                    <ul className="flex items-center">
                        <li className="text-md mr-5 font-semibold text-gray-sm hover:text-gray-md">
                            <a href="/">Features</a>
                        </li>
                        <li className="text-md mr-5 font-semibold text-gray-sm hover:text-gray-md">
                            <a href="/">Pricing</a>
                        </li>
                        <li className="text-md mr-5 font-semibold text-gray-sm hover:text-gray-md">
                            <a href="/">Resources</a>
                        </li>
                    </ul>
                    <div>
                        <Button.secondary className="mr-2">
                            Login
                        </Button.secondary>

                        <Button.primary>Sign Up</Button.primary>
                    </div>
                </div>
            </div>
            <div
                className="container block md:hidden relative transition-all duration-500 z-10"
                style={{
                    opacity: isActive ? 100 : 0,
                    transform: isActive ? "scaleY(1)" : "scaleY(0)",
                }}
            >
                <div className="flex flex-col px-4 py-6 rounded-md absolute top-0 left-0 right-0 bg-violet">
                    <ul className="text-center">
                        <li className="text-md font-medium mb-3 text-white hover:text-gray-sm">
                            <a href="/">Features</a>
                        </li>
                        <li className="text-md font-medium mb-3 text-white hover:text-gray-sm">
                            <a href="/">Pricing</a>
                        </li>
                        <li className="text-md font-medium text-white hover:text-gray-sm">
                            <a href="/">Resources</a>
                        </li>
                    </ul>
                    <div className="flex flex-col border-t-2 border-violet-dark mt-5 pt-3">
                        <button className="text-white hover:text-gray-sm text-md font-bold px-5 py-1 text-center">
                            Login
                        </button>
                        <Button.primary className="mt-3 font-bold">
                            Sign Up
                        </Button.primary>
                    </div>
                </div>
            </div>
        </div>
    );
}
