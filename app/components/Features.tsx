import React from "react";
import HeadingIntro from "./HeadingIntro";
import Image from "next/image";
import avatarOne from "@/public/assets/avatar-florence-shaw.jpg"
import avatarTwo from "@/public/assets/avatar-lula-meyers.jpg"
import avatarThree from "@/public/assets/avatar-owen-garcia.jpg"
import FeatureCard from "./FeatureCard";
import { IBM_Plex_Mono } from "next/font/google";
import { motion } from "framer-motion"

const ibmPlexMono = IBM_Plex_Mono({ subsets: ["latin"], weight: "400" })

export default function Features() {
    const avatars = [
        { img: avatarOne, name: "avatar-one", id: 1, colors: "border-[#6f7cfa]" },
        { img: avatarTwo, name: "avatar-two", id: 2, colors: "border-[#7d5fff]" },
        { img: avatarThree, name: "avatar-three", id: 3, colors: "border-[#ffb300]" }
    ]
    const keyboardKeys = [
        { key: "shift", id: 1 },
        { key: "alt", id: 2 },
        { key: "C", id: 3 },
    ]
    const randomWords = ["Asset Library", "Code Preview", "Flow Mode", "Smart Sync", "Auto Layout", "Fast Search", "Smart Guide"]
    const theRandomWords = randomWords.map((word, index) => {
        return (
            <div
                key={index}
                className="flex align-middle items-center justify-center md:gap-3 gap-2 border px-4 py-2 md:px-5 md:py-2 rounded-xl
                    border-[#333333] bg-[#191919]"
            >
                <div className="w-4 h-4 rounded-full bg-blue-400 flex justify-center items-center text-[#0a0a0a]
                    text-sm">
                    &#10040;
                </div>
                <h1 className="md:text-xl text-[0.8rem]">{word}</h1>
            </div>
        )

    })
    const theKeys = keyboardKeys.map(key => {
        return (
            <motion.div
                key={key.id}
                className="hover:border hover:border-blue-400 p-1 lg:rounded-[1.3em] md:rounded-lg rounded-lg"
                whileHover={{
                    scale: 1.1,
                    transition: {
                        duration: 0.5,
                        type: "spring"
                    },
                    style: {
                        cursor: "pointer",
                        border: "1px solid #f7f7f7",
                        padding: "1px",
                    }
                }}>
                <motion.div
                    className={`lg:rounded-2xl md:rounded-lg rounded-lg w-fit h-fit px-5 py-3 md:px-4 md:py-2 text-[#0a0a0a] 
                    lg:text-2xl md:text-md text-sm bg-[#b9b9b9] cursor-pointer ${ibmPlexMono.className}`}
                >
                    <span className="font-bold">{key.key}</span>
                </motion.div>

            </motion.div>
        )
    })
    const theAvatars = avatars.map(avatars => {
        return (
            <div
                key={avatars.id}
                className={`border-4 w-fit h-fit p-1 rounded-full gap-1 justify-center items-center 
                    ${avatars.colors} -ml-5 backdrop-blur-xl`}
            >
                <Image
                    src={avatars.img}
                    alt={avatars.name}
                    className="lg:w-[4.5rem] lg:h-[4.5rem] md:w-[3rem] md:h-[3rem] w-[3rem] h-[3rem] rounded-full"
                />
            </div>
        )
    })
    return (
        <section className="w-full h-fit md:h-[100vh] p-5 flex flex-col items-center text-center 
        gap-5 justify-evenly overflow-clip">
            <HeadingIntro>Features</HeadingIntro>
            <h1 className="lg:text-6xl md:text-[3em] text-[1.5em]">Where power meets {" "}
                <span className="bg-gradient-to-r from-[#0061FF] via-[#30A8FF] to-[#60EFFF] text-transparent bg-clip-text">
                    creativity.
                </span>
            </h1>
            <div className="w-full h-auto md:flex flex flex-col justify-center items-center gap-5 md:justify-center 
                 md:gap-5 lg:gap-10 md:flex-row overflow-clip">
                <FeatureCard
                    title="Interactive Prototyping"
                    description="Engage your clinets with interactive prototypes that react to useraction"
                >
                    <div className="flex justify-center items-center w-full">
                        {theAvatars}
                    </div>
                </FeatureCard>
                <FeatureCard
                    title="Real-time Collaboration"
                    description="Working together semlessly with team editing tools"
                >
                    <div className="w-full text-center">
                        <h1 className="md:text-2xl lg:text-4xl text-2xl font-bold text-[#4d4d4d]">
                            We&apos;ve achived{" "}
                            <span className="bg-gradient-to-r from-[#ff0f7b] to-[#f89b29] text-transparent bg-clip-text">
                                incredible
                            </span>
                            <br />
                            growth this year
                        </h1>
                    </div>
                </FeatureCard>
                <FeatureCard
                    title="Keyboard Quick Action"
                    description="Powerfull command to help create designs more quickly"
                >
                    <div className="flex gap-2">
                        {theKeys}
                    </div>
                </FeatureCard>
            </div>
            <div className="flex flex-wrap justify-center items-center md:gap-5 gap-2 lg:w-[80vw] md:w-full w-full">
                {theRandomWords}
            </div>
        </section>
    )
}