import React, { useRef } from "react";
import HeadingIntro from "./HeadingIntro";
import { useScroll, useTransform } from "motion/react";

export default function Introduction() {
    const theText = `While you're striving to produce      
    outstanding work, outdated design platforms hold you back with cluttered interfaces and steep              
    learning curves.`
    const words = theText.split(" ")

    const theTarget = useRef(null);
    const { scrollYProgress } = useScroll({ target: theTarget, offset: ["start end", "end end"] });
    const [currentWord, setCurrentWord] = React.useState(0)
    const wordIndex = useTransform(scrollYProgress, [0.5, 1], [0, words.length])
    React.useEffect(() => {
        wordIndex.on('change', (latest) => {
            setCurrentWord(latest)
        })

    }, [wordIndex])

    return (
        <section className="w-full h-[250vh] p-4 overflow-clip" ref={theTarget}>
            <section className="w-full md:h-[100vh] h-[80vh] px-5 flex items-center justify-evenly flex-col text-center sticky top-0">
                <HeadingIntro>Introducing Seed</HeadingIntro>
                <h1 className="lg:text-6xl md:text-[3em] text-[1.5em] font-normal lg:w-[80vw] md:w-full lg:leading-17 md:leading-14
                lg:mb-23">
                    <span className="text-[#f7f7f7]">
                        You deserve tools that keep up with your creativity.
                    </span>
                    <span className="text-[#3b3a3a]">
                        {
                            words.map((word, index) => {
                                return (
                                    <span key={index} className={`${index < currentWord && 'text-[#f7f7f7]'} 
                                        transition-all duration-500 ease-in-out`}>
                                        {`${word} `}
                                    </span>
                                )
                            })
                        }
                    </span> <br className="hidden lg:block" />
                    <span className="bg-gradient-to-r from-[#0061FF] via-[#30A8FF] to-[#60EFFF] text-transparent bg-clip-text">
                        That's why we created Seeds.
                    </span>
                </h1>
            </section>
        </section>
    )
}