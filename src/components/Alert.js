import React from "react";

export default function Alert({ message, onClose }) {
    const handleOnClose = () => {
        onClose();
    };
    return (
        <div className=" text-center p-4 relative bottom-5 left-0 right-0">
            <div
                className={`py-2 px-4 bg-indigo-800 rounded-full items-center text-indigo-100 leading-none inline-flex`}
                role="alert"
            >
                <span className="font-medium text-sm mr-2 text-left flex-auto">
                    {message}
                </span>
                <button onClick={handleOnClose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </button>
            </div>
        </div>
    );
}
