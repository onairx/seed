import React from "react";
import HeadingIntro from "./HeadingIntro";
import IntegrationBrands from "./IntegrationBrands";
import FigmaLogo from "@/public/assets/figma-logo.svg"
import NotionLogo from "@/public/assets/notion-logo.svg"
import SlackLogo from "@/public/assets/slack-logo.svg"
import GitHubLogo from "@/public/assets/github-logo.svg"
import FramerLogo from "@/public/assets/framer-logo.svg"
import RealumeLogo from "@/public/assets/relume-logo.svg"
import { motion } from "framer-motion";

export default function Integration() {
    const setOneLogos = [
        { img: FigmaLogo, name: "Figma", id: 1, desc: "Figma is a collabrative interface design tool" },
        { img: NotionLogo, name: "Notion", id: 2, desc: "Notion is all-in-one workspace for notes and docs" },
        { img: SlackLogo, name: "Slack", id: 3, desc: "Slack is powerfull team communication platform" },
        { img: GitHubLogo, name: "GitHub", id: 4, desc: "GitHub is leading platform for code and collaboration" },
        { img: FramerLogo, name: "Framer", id: 5, desc: "Framer is professional website prototyping tool" },
        { img: RealumeLogo, name: "Realume", id: 6, desc: "Realume is no-code website builder and design system" },
    ]
    const theSetLogo = setOneLogos.map((logo) => {
        return (
            <IntegrationBrands key={logo.id} img={logo.img} name={logo.name} desc={logo.desc} />
        )
    })


    return (
        <section className="w-full h-[100vh] p-5 py-24 md:flex md:flex-row flex flex-col items-center justify-center 
            md:justify-start overflow-clip">
            <div className="md:w-[50vw] md:h-full w-full h-[50vh] flex flex-col justify-center md:items-start 
                text-center md:text-start items-center md:gap-15 gap-7">
                <HeadingIntro>Integration</HeadingIntro>
                <div>
                    <h1 className="lg:text-6xl md:text-[3em] text-[1.5em]">Plays well with other tools and
                        <span className="bg-gradient-to-r from-[#0061FF] via-[#30A8FF] to-[#60EFFF] text-transparent bg-clip-text">
                            {" "}platforms.
                        </span>
                    </h1>
                    <p className="text-[#b1b1b1] lg:text-lg md:text-md text-sm my-5 w-full ">
                        Seed seamlessly connects with your favorite tools, making it easy to collabrate with
                        any wotkflow tool.
                    </p>
                </div>
            </div>
            <div className="md:w-[50vw] md:h-full w-full h-[50vh] overflow-clip flex gap-7 justify-center items-center
                [mask-image:linear-gradient(to_bottom,transparent,black_10%,black_90%,transparent)]">
                <div className="flex gap-7 justify-center items-start w-full h-full">
                    <motion.div
                        className="flex flex-none flex-col gap-7 pb-7"
                        animate={{ y: "-50%" }}
                        transition={{
                            repeat: Infinity,
                            duration: 15,
                            ease: "linear",
                        }}
                    >
                        {theSetLogo}
                        {theSetLogo}
                    </motion.div>
                    <div className="hidden md:hidden lg:block ">
                        <div className="flex gap-7 justify-center items-end  w-full h-full">
                            <motion.div
                                className="flex flex-none flex-col gap-7 pt-7"
                                initial={{ y: "-50%" }}
                                animate={{ y: "0" }}
                                transition={{
                                    repeat: Infinity,
                                    duration: 15,
                                    ease: "linear",
                                }}
                            >
                                {theSetLogo}
                                {theSetLogo}
                            </motion.div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}