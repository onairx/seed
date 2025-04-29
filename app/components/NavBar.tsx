import React from "react";
import { IBM_Plex_Mono } from "next/font/google";

const ibmPlexMono = IBM_Plex_Mono({
    subsets: ["latin"],
    weight: ["400", "700"],
});
export default function NavBar() {
    return (
        <nav className="w-full h-auto bg-transparent absolute flex justify-center items-center p-4">
            <div className="lg:w-[50vw] md:w-[75vw] w-full h-[7vh] px-4 border flex justify-between 
                items-center rounded-xl border-[#252b2c] backdrop-blur-2xl 
                bg-[radial-gradient(ellipse_50%_130%_at_top_left,#1C1C1C_10%,transparent)]">
                <h1 className={`${ibmPlexMono.className} font-semibold text-3xl bg-gradient-to-r from-[#caf0f8] to-[#00b4d8]
                    text-transparent bg-clip-text m-0 cursor-pointer`}>
                    Seed
                </h1>
                <div className="hidden md:block">
                    <div className="flex gap-5 text-lg cursor-pointer text-[#cbcbcb]">
                        <h3>Home</h3>
                        <h3>About</h3>
                        <h3>Contact</h3>
                    </div></div>
                <button className="border md:px-5 md:py-2 px-4 py-2 md:text-md text-sm rounded-lg border-[#055260]
                    font-bold cursor-pointer bg-[#031d22]">
                    Sign Up
                </button>
            </div>
        </nav>
    );
}