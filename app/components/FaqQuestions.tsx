import React from "react";
import HeadingIntro from "./HeadingIntro";
import Faqs from "./Faq";
import { motion } from "framer-motion";

export default function FaqQuestions() {
    const allFaqs = Faqs.map((faq, index) => {
        const [answer, setAnswer] = React.useState(faq.isIt)
        function toggleAnswer() {
            setAnswer(!answer)
        }
        return (
            <motion.div
                key={index}
                className="border text-start lg:w-[50vw] md:w-[70vw] w-full h-fit p-5 rounded-2xl border-[#333333] bg-[#191919] flex 
                items-center justify-center gap-5 cursor-pointer"
                onClick={toggleAnswer}
                initial={{ opacity: 0.9 }}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
            >
                <div className="w-[90%] flex flex-col gap-2">
                    <h1 className="font-semibold text-md">{faq.question}</h1>
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                            height: answer ? "auto" : 0,
                            opacity: answer ? 1 : 0
                        }}
                        transition={{
                            duration: 0.5,
                            ease: "easeInOut"
                        }}
                    >
                        <p className="text-md text-[#757575]">
                            {faq.answer}
                        </p>
                    </motion.div>
                </div>
                <motion.div
                    className="w-5 h-5 cursor-pointer relative flex justify-center items-center p-2"
                    animate={{ rotate: answer ? 45 : 0 }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                >
                    <div className="w-4 h-[0.2rem] bg-[#4792f5] rounded-full absolute"></div>
                    <div className="w-[0.2rem] h-4 bg-[#4792f5] rounded-full absolute"></div>
                </motion.div>
            </motion.div>
        )
    })

    return (
        <section className="w-full min-h-[100vh] h-fit overflow-clip flex flex-col justify-center items-center p-5 text-center 
            md:gap-15 gap-7">
            <HeadingIntro>FAQ</HeadingIntro>
            <div className="flex flex-col items-center justify-center gap-10 w-full">
                <h1 className="lg:text-6xl md:text-[3em] text-[1.5em]">Questions? We've got {" "} <br />
                    <span className="bg-gradient-to-r from-[#0061FF] via-[#30A8FF] to-[#60EFFF] text-transparent bg-clip-text">
                        answers
                    </span>
                </h1>
                <div className="flex flex-col justify-center items-center gap-2">
                    {allFaqs}
                </div>
            </div>
        </section>
    )
}