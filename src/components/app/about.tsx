import {
    ResizableHandle,
    ResizablePanel,
    ResizablePanelGroup,
} from "@/components/ui/resizable"
import Image from "next/image"
import nita from "../../../public/Nita.png"
import aws from "../../../public/aws-dark.svg"
import blury from "../../../public/bbblurry.svg"
import cpp from "../../../public/c-plusplus.svg"
import circle from "../../../public/cccircular.svg"
import docker from "../../../public/docker.svg"
import figma from "../../../public/figma-light.svg"
import go from "../../../public/golang.svg"
import js from "../../../public/javascript.svg"
import linux from "../../../public/linux-light.svg"
import me from "../../../public/me.webp"
import mongo from "../../../public/mongodb.svg"
import persp from "../../../public/ppperspective.svg"
import python from "../../../public/python-light.svg"
import react from "../../../public/react-dark.svg"
import whirl from "../../../public/wwwhirl.svg"

export default function About() {
    return (
        <main className="p-4">
            <Image alt="svg" src={persp} className="absolute z-0 top-0 left-2/5 translate-x-10 -translate-y-40"></Image>
            <Image alt="svg" src={blury} className="absolute z-0 top-5/7 left-2/5 translate-x-20 -translate-y-10"></Image>
            <div className="grid auto-rows-[200px] grid-cols-3 gap-4 max-w-5xl mx-auto z-100 relative ">
                <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-white/10 isolate backdrop:blur-lg shadow-lg ring-1 ring-black/5 relative overflow-clip">
                    <div className="absolute top-1/2 left-4 transform -translate-x-1/2 -translate-y-1/2"><Image alt="react logo" src={react} width={80} className="hover:animate-pulse"></Image></div>
                    <div className="absolute top-0 right-0 translate-x-2 -translate-y-4 transform"><Image alt="docker logo" src={docker} width={90} className="hover:animate-pulse"></Image></div>
                    <div className="absolute bottom-0 right-10 -translate-x-2 translate-y-4 transform"><Image alt="aws logo" src={aws} width={100} className="hover:animate-pulse"></Image></div>
                    <div className="absolute top-0 right-12 -translate-x-20 -translate-y-3 transform"><Image alt="mongo logo" src={mongo} width={100} className="hover:animate-pulse"></Image></div>
                    <div className="absolute bottom-0 left-20 translate-y-2 transform"><Image alt="figma logo" src={figma} width={40} className="hover:animate-pulse"></Image></div>
                </div>
                <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-white/10 isolate backdrop:blur-lg shadow-lg ring-1 ring-black/5 flex items-center justify-center">
                    <h1 className="font-bold font-syne text-5xl ">Skills</h1>
                </div>
                <div className="row-span-2 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-white/10 isolate backdrop:blur-lg shadow-lg ring-1 ring-black/5 flex items-center">
                    <Image alt="my picture" src={me} width={1080} className="rounded-2xl hover:animate-pulse"></Image>
                </div>
                <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-white/10 isolate backdrop:blur-lg shadow-lg ring-1 ring-black/5 col-span-2 flex gap-10 justify-center items-center ">
                    <div className="border p-4 bg-slate-200/10 backdrop:blur-sm border-slate-400/10 rounded-3xl hover:animate-pulse"><Image alt="cpp logo" src={cpp} width={70}></Image></div>
                    <div className="border p-4 bg-slate-200/10 backdrop:blur-sm border-slate-400/10 rounded-3xl hover:animate-pulse"><Image alt="go logo" src={go} width={70}></Image></div>
                    <div className="border p-4 bg-slate-200/10 backdrop:blur-sm border-slate-400/10 rounded-3xl hover:animate-pulse"><Image alt="js logo" src={js} width={70}></Image></div>
                    <div className="border p-4 bg-slate-200/10 backdrop:blur-sm border-slate-400/10 rounded-3xl hover:animate-pulse"><Image alt="python logo" src={python} width={70}></Image></div>

                </div>

                <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 p-4 dark:bg-white/10 isolate backdrop:blur-lg shadow-lg ring-1 ring-black/5 flex items-center justify-center  ">
                    <h1 className="font-bold font-syne text-5xl text-white">Problem Solver</h1>
                </div>
                <div className="row-span-1 rounded-xl border-2 border-slate-400/10 bg-neutral-100 py-4 pl-4 dark:bg-white/10 isolate backdrop:blur-lg shadow-lg ring-1 ring-black/5 col-span-2 flex items-center ">
                    <span className="text-sm ">currently pursuing B.Tech at <span className="font-semibold block text-2xl text-teal-100 ">National Institute of Technology Agartala <span className="text-sm text-white font-normal">in</span></span> <span className="font-semibold text-teal-200 text-xl">Electronics and Instrumentation Engineering</span></span>
                    <Image alt="circular svg" src={circle} width={150} className="rounded-lg ml-auto hover:animate-pulse"></Image>
                </div>
            </div>


        </main>
    )
}
