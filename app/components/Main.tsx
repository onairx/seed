import React from "react";
import OrangeArrow from "../../public/assets/arrow-orange.svg";
import BlueArrow from "../../public/assets/arrow-blue.svg";
import YourArrow from "@/public/assets/arrow-you.svg"
import CardTwo from "../../public/assets/card-two.svg";
import CardOne from "../../public/assets/card-one.svg";
import Image from "next/image";
import { motion, useAnimate } from "framer-motion";

export default function Hero() {
    const [leftCard, leftCardAnimate] = useAnimate();
    const [leftCardPointer, leftCardPointerAnimate] = useAnimate();
    const [rightCard, rightCardAnimate] = useAnimate();
    const [rightCardPointer, rightCardPointerAnimate] = useAnimate();
    React.useEffect(() => {
        leftCardAnimate([
            [leftCard.current, { opacity: 1 }, { duration: 0.5 }],
            [leftCard.current, { y: 0, x: 0 }, { duration: 0.5 }],
        ])
        leftCardPointerAnimate([
            [leftCardPointer.current, { opacity: 1 }, { duration: 0.5, ease: "easeOut" }],
            [leftCardPointer.current, { y: 0, x: 0, }, { duration: 0.5, ease: "easeOut" }],
            [leftCardPointer.current, { y: [0, 10, 0], x: 80 }, { duration: 0.5, ease: "easeOut" }],
        ])
        rightCardAnimate([
            [rightCard.current, { opacity: 1 }, { duration: 0.8 }],
            [rightCard.current, { y: 0, x: 0 }, { duration: 0.8 }],
        ])
        rightCardPointerAnimate([
            [rightCardPointer.current, { opacity: 1 }, { duration: 0.8, ease: "easeOut" }],
            [rightCardPointer.current, { y: 0, x: 0, }, { duration: 0.8, ease: "easeOut" }],
            [rightCardPointer.current, { y: [0, 10, 0], x: -80 }, { duration: 0.8, ease: "easeOut" }],
        ])
    }, [])
    return (
        <main
            className="w-full h-[100vh] bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#023e8a,#0a0a0a_66%)] p-4 overflow-clip"
            style={{ cursor: `url(${YourArrow.src}), auto` }}
        >
            <div className="w-full h-full flex flex-col justify-center items-center gap-8 text-center relative ">
                <motion.div
                    initial={{ opacity: 0, y: 50, x: -50 }}
                    drag
                    ref={leftCard}
                    className="absolute bottom-[10%] -left-[5%] hidden md:hidden lg:block"
                >
                    <Image src={CardTwo} alt="card two" draggable="false" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50, x: -50 }}
                    ref={leftCardPointer}
                    className="absolute bottom-[25%] left-[10%] hidden md:hidden lg:block">
                    <Image src={BlueArrow} alt="blue arrow" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50, x: 50 }}
                    ref={rightCard}
                    drag
                    className="absolute top-[10%] -right-[5%] hidden md:hidden lg:block"

                >
                    <Image src={CardOne} alt="card one" draggable="false" />
                </motion.div>
                <motion.div
                    initial={{ opacity: 0, y: 50, x: 50 }}
                    ref={rightCardPointer}
                    className="absolute top-[25%] right-[10%] hidden md:hidden lg:block">
                    <Image src={OrangeArrow} alt="orange arrow" />
                </motion.div>

                <div className={`lg:text-[0.9em] md:text-sm text-sm font-semibold text-[#f7f7f7] px-5 py-2 rounded-full
                bg-gradient-to-r from-[#ff0f7b] to-[#f89b29]`}>✨ $5M seed round raised</div>
                <div className="flex flex-col gap-2 items-center justify-center text-center w-auto h-auto">
                    <h1 className={`font-bold lg:text-7xl md:text-6xl text-5xl`}>Design with impact,
                        <br className="hidden md:block" /> create with ease</h1>
                    <p className="text-[#b1b1b1] lg:text-lg md:text-md text-sm md:w-[70vw] lg:w-[50vw]">
                        Design tools should empower your creativity,
                        not slow you down. Seed delivers advanced features in a simple interface, so you stay in
                        your creative flow.
                    </p>
                </div>
                <form className="flex gap-2 border lg:w-[37vw] md:w-[45vw] w-full border-[#27484e] lg:h-[7vh] 
                    md:h-[6vh] h-[6vh] rounded-full items-center lg:p-2 md:p-1 p-1">
                    <input
                        type="email"
                        placeholder="Enter your email address"
                        className="w-full h-full py-3 px-5 lg:text-lg md:text-md text-sm 
                        focus:outline-none focus:border-[#6f7c7f]"
                    />
                    <button className="md:w-[20vw] w-[50vw] h-full lg:text-xl md:text-md text-sm font-bold rounded-full
                    bg-[#023e8a] cursor-pointer">Sign Up</button>
                </form>
            </div>
        </main>
    );
}