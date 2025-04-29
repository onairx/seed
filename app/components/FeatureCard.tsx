import React from "react";

export default function FeatureCard({ children, title, description }: { children: React.ReactNode, title: string, description: string }) {
    return (
        <div className="lg:w-92 lg:h-92 md:w-72 md:h-72 w-70 h-70 border-[#333333] border rounded-4xl p-5 bg-[#191919] flex
            flex-col justify-between items-start text-start">
            <div className="flex justify-center items-center h-[50%] w-full">{children}</div>
            <div>
                <h3 className="font-normal lg:text-4xl md:text-3xl text-[1.5em]">{title}</h3>
                <p className="text-[#757575] lg:text-lg md:text-md text-sm mt-2">{description}</p>
            </div>
        </div>
    )
}