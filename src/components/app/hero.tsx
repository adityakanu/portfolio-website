'use client'

import { ArrowDownIcon } from "@radix-ui/react-icons";

export default function Hero() {
    return (
        <main className="p-4 font-syne h-screen flex flex-col items-center justify-center ">
            <span className="text-2xl italic">Hello, The name is</span>
            <h1 className="text-9xl">Aditya Kanu</h1>
            <h3 className="flex justify-center items-center text-xl absolute bottom-10 gap-3 font-syne font-bold">Scroll <ArrowDownIcon className="animate-bounce w-5 h-5"/></h3>
        </main>

    );
}