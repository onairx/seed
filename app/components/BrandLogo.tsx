import React from "react";
import Image from "next/image";
import acmeCorp from "@/public/assets/acme-corp.svg"
import apex from "@/public/assets/apex.svg"
import celestial from "@/public/assets/celestial.svg"
import echoValley from "@/public/assets/echo-valley.svg"
import outside from "@/public/assets/outside.svg"
import pulse from "@/public/assets/pulse.svg"
import twice from "@/public/assets/twice.svg"
import quantum from "@/public/assets/quantum.svg"
import { motion } from "framer-motion";

export default function BrandLogo() {
    const allBrands = [
        { img: acmeCorp, name: "acmeCorp", id: 1 },
        { img: apex, name: "apex", id: 2 },
        { img: celestial, name: "celestial", id: 3 },
        { img: echoValley, name: "echoValley", id: 4 },
        { img: outside, name: "outside", id: 5 },
        { img: pulse, name: "pulse", id: 6 },
        { img: twice, name: "twice", id: 7 },
        { img: quantum, name: "quantum", id: 8 }
    ]
    const theBrands = allBrands.map((brands) => {
        return (
            <Image
                key={brands.id}
                src={brands.img}
                alt={brands.name}
                className="lg:w-[10em] md:w-[10em] w-[7em] h-fit"
            />
        )
    })
    return (
        <section className="w-full h-fit overflow-x-clip border-b pb-10 border-[#222222]">
            <div className="w-full h-auto flex flex-col justify-center items-center gap-10 text-center">
                <h1 className="text-[#f7f7f7] lg:text-lg md:text-md text-sm w-full p-2
                    bg-gradient-to-r from-transparent via-[#2a2a2a] to-transparent">
                    Trusted by Industry-Leading Organizations Worldwide
                </h1>
                <div className="flex justify-evenly w-full h-auto gap-10
                    [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
                    <motion.div
                        className="flex flex-none justify-evenly gap-10 pr-10"
                        animate={{ x: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 30,
                            ease: "linear"
                        }}
                    >
                        {theBrands}
                        {theBrands}
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
