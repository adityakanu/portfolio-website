import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { GitHubLogoIcon, GlobeIcon, VideoIcon } from "@radix-ui/react-icons"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"
import { FaReact } from "react-icons/fa"
import { FaNode } from "react-icons/fa6"
import { IconContext } from "react-icons/lib"
import { SiFirebase, SiMongodb } from "react-icons/si"
import log from "../../../public/log-thumb.png"
import npmDark from "../../../public/npm-dark.png"
import ride from "../../../public/ride-web.png"

export default function Projects() {

    return (
        <main className="md:p-40 flex items-center justify-center">
            <Carousel
                plugins={[
                    Autoplay({
                        delay: 2000,
                    }),
                ]}
                className="w-full md:max-w-xl "
            >
                <CarouselContent>
                    {/* Project 1 */}
                    <CarouselItem >
                        <div className="p-1 ">
                            <Card className="bg-slate/40 backdrop:blur-lg">
                                <CardHeader>
                                    <CardTitle>
                                        <span className="text-3xl font-semibold font-syne text-teal-400">Issue Tracker and Log Ingestor</span>
                                    </CardTitle>
                                    <CardDescription className="text-justify">Seamless log ingestion, accommodating both UI interactions and direct transmissions on PORT specified. The throughput as observed during a recent load test with <span className="text-amber-100">100 virtual users</span> over 1 minute, averaged around <span className="text-amber-100">46 requests/sec</span>. The system demonstrated its <span className="text-amber-100">peak throughput, reaching up to 90 requests/sec </span> during the test.</CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-col aspect-auto items-center justify-center">
                                    <Image
                                        src={log}
                                        width={720}
                                        height={1080}
                                        layout="responsive"
                                        alt="Project Thumbnail"
                                        className="rounded-sm py-4 "
                                    />
                                    <span className="flex md:text-xl text-xs border p-4 rounded-xl justify-center items-center gap-3 font-semibold ">
                                        Tech Stack: 
                                        <IconContext.Provider value={{ color: "cyan", size: "1.5em", className: "global-class-name" }}>
                                            <FaReact />
                                            <SiMongodb />
                                            <FaNode />
                                        </IconContext.Provider>
                                    </span>
                                </CardContent>
                                <CardFooter className="flex gap-4 items-center justify-center">
                                    <Link href="https://github.com/adityakanu/Log-Ingestor-with-Query-Interface"><GitHubLogoIcon className="w-7 h-7" /> </Link>
                                    <Link href="https://www.youtube.com/watch?v=bKpkh2cvIAo"><VideoIcon className="w-7 h-7" /> </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </CarouselItem>
                    {/* Project 2 */}
                    <CarouselItem >
                        <div className="p-1 ">
                            <Card className="bg-slate/40 backdrop:blur-lg">
                                <CardHeader>
                                    <CardTitle>
                                        <span className="text-3xl font-semibold font-syne text-teal-300">npm i create-react-tail</span>
                                    </CardTitle>
                                    <CardDescription className="text-justify">Developed a React project initiation tool using Vite.js and Tailwind CSS, automating setup for quick project kickstart. Significantly reduces initial project setup time, optimizing the process and transforming approximately <span className="text-amber-100 ">90% of the traditional 10-minute configuration</span> into a single command for enhanced development initiation efficiency.</CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-col aspect-auto items-center justify-center">
                                    <Image
                                        src={npmDark}
                                        width={720}
                                        height={1080}
                                        layout="responsive"
                                        alt="Project Thumbnail"
                                        className="rounded-3xl "
                                    />
                                    {/* <div className="bg-slate-100/10 rounded-xl p-10">
                                        <div className="rounded-full bg-red-600 absolute w-3 h-3 top-1/6 -translate-y-12 "></div>
                                        <pre>
                                            <code className="block">
                                                <span className="block"><span className="text-yellow-500">$ npm i</span> create-react-tail</span>
                                                <span className="block"><span className="text-yellow-500">$ npx</span> create-react-tail</span>
                                            </code>
                                        </pre>
                                    </div> */}
                                    <span className="flex md:text-xl text-xs border p-4 rounded-xl justify-center items-center gap-3 font-semibold mt-4">
                                        Tech Stack: 
                                        <IconContext.Provider value={{ color: "cyan", size: "1.5em", className: "global-class-name" }}>
                                        <FaNode />
                                        </IconContext.Provider>
                                    </span>
                                </CardContent>
                                <CardFooter className="flex gap-4 items-center justify-center">
                                    <Link href="https://github.com/adityakanu/create-react-tail"><GitHubLogoIcon className="w-7 h-7" /> </Link>
                                    <Link href="https://www.npmjs.com/package/create-react-tail"><GlobeIcon className="w-7 h-7" /> </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </CarouselItem>
                    {/* Project 3 */}
                    <CarouselItem >
                        <div className="p-1 ">
                            <Card className="bg-slate/40 backdrop:blur-lg">
                                <CardHeader>
                                    <CardTitle>
                                        <span className="text-3xl font-semibold font-syne text-teal-300">Ride Booking Website</span>
                                    </CardTitle>
                                    <CardDescription className="text-justify">Developed a Ride Booking Website that enabled users to select destinations and stops for themselves or others, providing the flexibility to negotiate and search for the most suitable prices based on their specific requirements. Integrated <span className="text-amber-100">Firebase</span> for secure user authentication and implemented <span className="text-amber-100">Razorpay</span> as the payment gateway, ensuring a secure booking experience.</CardDescription>
                                </CardHeader>
                                <CardContent className="flex flex-col aspect-auto items-center justify-center">
                                    <Image
                                        src={ride}
                                        width={720}
                                        height={1080}
                                        layout="responsive"
                                        alt="Project Thumbnail"
                                        className="rounded-3xl "
                                    />
                                    {/* <div className="bg-slate-100/10 rounded-xl p-10">
                                        <div className="rounded-full bg-red-600 absolute w-3 h-3 top-1/6 -translate-y-12 "></div>
                                        <pre>
                                            <code className="block">
                                                <span className="block"><span className="text-yellow-500">$ npm i</span> create-react-tail</span>
                                                <span className="block"><span className="text-yellow-500">$ npx</span> create-react-tail</span>
                                            </code>
                                        </pre>
                                    </div> */}
                                    <span className="flex md:text-xl text-xs border p-4 rounded-xl justify-center items-center gap-3 font-semibold mt-4">
                                        Tech Stack: 
                                        <IconContext.Provider value={{ color: "cyan", size: "1.5em", className: "global-class-name" }}>
                                        <FaReact />
                                        <SiFirebase />
                                        </IconContext.Provider>
                                    </span>
                                </CardContent>
                                <CardFooter className="flex gap-4 items-center justify-center">
                                    <Link href="https://github.com/adityakanu/Velovista"><GitHubLogoIcon className="w-7 h-7" /> </Link>
                                    <Link href="https://velovista.vercel.app/"><GlobeIcon className="w-7 h-7" /> </Link>
                                    <Link href="https://www.youtube.com/watch?v=ZK12C5Wk4iE"><VideoIcon className="w-7 h-7" /> </Link>
                                </CardFooter>
                            </Card>
                        </div>
                    </CarouselItem>
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel >
        </main>
    )
}
