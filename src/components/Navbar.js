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
        <div className="container">
            <div className="flex py-4">
                <div className="flex items-center justify-between w-full md:w-auto">
                    <div className="mr-6">
                        <a
                            href="/"
                            className="text-2xl font-bold text-gray-800"
                        >
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
                <div className="items-center justify-between w-full hidden md:flex">
                    <ul className="flex items-center">
                        <li className="text-md mr-3 font-medium text-gray-500 hover:text-gray-900">
                            <a href="/">Features</a>
                        </li>
                        <li className="text-md mr-3 font-medium text-gray-500 hover:text-gray-900">
                            <a href="/">Pricing</a>
                        </li>
                        <li className="text-md mr-3 font-medium text-gray-500 hover:text-gray-900">
                            <a href="/">Resources</a>
                        </li>
                    </ul>
                    <div>
                        <Button.secondary className="mr-2">
                            <a href="/">Login</a>
                        </Button.secondary>

                        <Button.primary>
                            <a href="/">Sign Up</a>
                        </Button.primary>
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
                <div className="flex flex-col px-4 py-6 rounded-md absolute top-0 left-0 right-0 bg-purple">
                    <ul className="text-center">
                        <li className="text-md font-medium mb-3 text-white">
                            <a href="/">Features</a>
                        </li>
                        <li className="text-md font-medium mb-3 text-white">
                            <a href="/">Pricing</a>
                        </li>
                        <li className="text-md font-medium text-white">
                            <a href="/">Resources</a>
                        </li>
                    </ul>
                    <div className="flex flex-col border-t-2 border-gray-700 mt-5 pt-3">
                        <a
                            href="/"
                            className="text-white text-md font-bold px-5 py-1 text-center"
                        >
                            Login
                        </a>
                        <Button.primary className="mt-3">
                            Sign Up
                        </Button.primary>
                    </div>
                </div>
            </div>
        </div>
    );
}
