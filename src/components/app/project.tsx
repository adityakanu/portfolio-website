import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import { GitHubLogoIcon, VideoIcon } from "@radix-ui/react-icons"
import Autoplay from "embla-carousel-autoplay"
import Image from "next/image"
import Link from "next/link"
import { FaReact } from "react-icons/fa"
import { FaNode } from "react-icons/fa6"
import { IconContext } from "react-icons/lib"
import { SiMongodb } from "react-icons/si"
import log from "../../../public/log-thumb.png"

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
                    <CarouselItem >
                        <div className="p-1 ">
                            <Card className="bg-slate/40 backdrop:blur-lg">
                                <CardHeader>
                                    <CardTitle>
                                        <span className="text-3xl font-semibold">Issue Tracker and Log Ingestor</span>
                                    </CardTitle>
                                    <CardDescription className="text-justify">Seamless log ingestion, accommodating both UI interactions and direct transmissions on PORT specified. The throughput as observed during a recent load test with 100 virtual users over 1 minute, averaged around 46 requests/sec. The system demonstrated its peak throughput, reaching up to 90 requests/sec during the test.</CardDescription>
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
                                    <span className="flex text-xl sm:text-xs border p-4 rounded-xl justify-center items-center gap-3 font-semibold ">
                                        Tech Stack: 
                                        <IconContext.Provider value={{ color: "violet", size: "1.5em", className: "global-class-name" }}>

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
                    <CarouselItem >
                        <div className="p-1 ">
                            <Card className="bg-slate/40 backdrop:blur-lg">
                                <CardHeader>
                                    <CardTitle>
                                        <span className="text-3xl font-semibold">Issue Tracker and Log Ingestor</span>
                                    </CardTitle>
                                    <CardDescription className="text-justify">Seamless log ingestion, accommodating both UI interactions and direct transmissions on PORT specified. The throughput as observed during a recent load test with 100 virtual users over 1 minute, averaged around 46 requests/sec. The system demonstrated its peak throughput, reaching up to 90 requests/sec during the test.</CardDescription>
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
                                    <span className="flex text-xl sm:text-xs border p-4 rounded-xl justify-center items-center gap-3 font-semibold ">
                                        Tech Stack: 
                                        <IconContext.Provider value={{ color: "violet", size: "1.5em", className: "global-class-name" }}>

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
                    <CarouselItem >
                        <div className="p-1 ">
                            <Card className="bg-slate/40 backdrop:blur-lg">
                                <CardHeader>
                                    <CardTitle>
                                        <span className="text-3xl font-semibold">Issue Tracker and Log Ingestor</span>
                                    </CardTitle>
                                    <CardDescription className="text-justify">Seamless log ingestion, accommodating both UI interactions and direct transmissions on PORT specified. The throughput as observed during a recent load test with 100 virtual users over 1 minute, averaged around 46 requests/sec. The system demonstrated its peak throughput, reaching up to 90 requests/sec during the test.</CardDescription>
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
                                    <span className="flex text-xl sm:text-xs border p-4 rounded-xl justify-center items-center gap-3 font-semibold ">
                                        Tech Stack: 
                                        <IconContext.Provider value={{ color: "violet", size: "1.5em", className: "global-class-name" }}>

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
                    <CarouselItem >
                        <div className="p-1 ">
                            <Card className="bg-slate/40 backdrop:blur-lg">
                                <CardHeader>
                                    <CardTitle>
                                        <span className="text-3xl font-semibold">Issue Tracker and Log Ingestor</span>
                                    </CardTitle>
                                    <CardDescription className="text-justify">Seamless log ingestion, accommodating both UI interactions and direct transmissions on PORT specified. The throughput as observed during a recent load test with 100 virtual users over 1 minute, averaged around 46 requests/sec. The system demonstrated its peak throughput, reaching up to 90 requests/sec during the test.</CardDescription>
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
                                    <span className="flex text-xl sm:text-xs border p-4 rounded-xl justify-center items-center gap-3 font-semibold ">
                                        Tech Stack: 
                                        <IconContext.Provider value={{ color: "violet", size: "1.5em", className: "global-class-name" }}>

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
                </CarouselContent>
                <CarouselPrevious />
                <CarouselNext />
            </Carousel >
        </main>
    )
}
