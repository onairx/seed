import React from "react";

export default function Footer() {
    return (
        <footer className="flex flex-col justify-center items-center md:p-5 p-2 text-center gap-2">
            <p className="text-[#757575] md:w-[70vw] lg:w-full w-full hidden md:block">
                This website does not represent any real or functional website and does not use real-world
                data; it is purely a project demonstration.
            </p>
            <p className="text=[#f7f7f7]"><a href="https://vishalonairx.vercel.app/">Designed and developed by onairx</a></p>
        </footer>
    )
}