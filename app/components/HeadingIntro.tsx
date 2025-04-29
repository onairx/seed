import React from "react";

export default function HeadingIntro({ children }: { children: React.ReactNode }) {
    return (
        <div className="border border-[#023e8a] rounded-full p-2 w-fit h-fit px-10 py-2">
            <h1 className="text-xl">&#10035; {children}</h1>
        </div>
    )
}