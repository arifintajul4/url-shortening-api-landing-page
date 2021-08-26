import React from "react";

export default function card(props) {
    return (
        <div className="px-8 py-10 bg-white rounded shadow relative">
            <div
                className="w-14 h-14 rounded-full bg-purple absolute -top-7 bg-no-repeat bg-center"
                style={{
                    backgroundImage: `url(${props.icon})`,
                    backgroundSize: "30px 30px",
                }}
            ></div>
            <h1 className="font-bold text-2xl text-gray-lg mb-3">
                {props.title}
            </h1>
            <p className="text-gray-sm text-lg leading-relaxed">{props.desc}</p>
        </div>
    );
}
