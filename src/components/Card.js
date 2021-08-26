import React from "react";

export default function card(props) {
    return (
        <div className="p-4 pt-10 bg-white rounded shadow relative">
            <div
                className="w-14 h-14 rounded-full bg-purple absolute -top-7 bg-no-repeat bg-center"
                style={{
                    backgroundImage: `url(${props.icon})`,
                    backgroundSize: "30px 30px",
                }}
            ></div>
            <h1 className="font-bold text-lg text-gray-900 mb-1">
                {props.title}
            </h1>
            <p className="text-gray-500 text-sm">{props.desc}</p>
        </div>
    );
}
