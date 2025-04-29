import React from "react";
import Image from "next/image";



export default function IntegrationBrands(props: { img: string, name: string, desc: string }) {
    return (
        <section>
            <div className="md:w-72 md:h-76 w-70 h-70 border-[#333333] border rounded-4xl p-5 bg-[#191919] flex
                flex-col justify-evenly items-center text-center">
                <Image src={props.img} alt={props.name} className="w-22 h-22" />
                <h1 className="font-normal md:text-4xl text-[1.5em]">{props.name}</h1>
                <p className="text-[#757575] lg:text-lg md:text-md text-sm mt-2">{props.desc}</p>
            </div>
        </section>
    )
}