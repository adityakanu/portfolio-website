'use client'

import { useOutsideClick } from "@/components/hooks/use-outside-click";
import { Button } from "@/components/ui/button";
import { GitHubLogoIcon, Link1Icon, VideoIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion } from 'framer-motion';
import { Link } from "next-view-transitions";
import React, { useEffect, useId, useRef, useState } from 'react';

type Project = {
    date: string;
    title: string;
    category: string;
    github?: string;
    youtube?: string;
    live?: string;
    details: string[];
}

const projects: Project[] = [
    {
        date: "Jul '24",
        title: "NITA Placement Connect",
        category: "Software Development",
        live: "https://nita-placement-connect.vercel.app/",
        youtube: "https://youtu.be/2eJ7_YMAO_I",
        details: [
            "On-Campus Placement Portal, reducing manual entry errors by an <strong>≈87%</strong> compared to traditional Google Forms.",
            "Implemented role-based access control, enabling secure data management for admins, coordinators, and students.",
            "Using MongoDB’s aggregation framework, reduced the time to generate various student reports by <strong>≈70%</strong>.",
            "Contributed to frontend and backend, collaborating with my team using Git and deploying it on Vercel and Render.",
        ]
    },
    {
        date: "Feb '24",
        title: "Issue Tracker and Log Ingestor",
        category: "Software Development",
        github: "https://github.com/adityakanu/Log-Ingestor-with-Query-Interface",
        youtube: "https://youtu.be/bKpkh2cvIAo",
        details: [
            "Built a webapp to insert issues to Org’s issue management infra, implementing both API and UI options to insert logs.",
            "Implemented a modern technology stack to manage the entire log lifecycle, including React, Express, and MongoDB.",
            "The throughput as observed on load test with 100 virtual users over 1 minute, averaged around <strong>46 requests/sec</strong>.",
            "The system demonstrated its peak throughput, reaching up to <strong>90 requests/sec</strong> during the test."
        ]
    },
    {
        date: "Jan '24",
        title: "npm i create-react-tail",
        category: "Software Development",
        github: "https://github.com/adityakanu/create-react-tail",
        youtube: "https://youtu.be/bKpkh2cvIAo",
        details: [
            "Built a command-line interface(CLI) tool using Vite.js to automate React with Tailwind project initialization.",
            "Commands for usage: <code><strong> npm i create-react-tail </strong></code> and <code><strong> npx create-react-tail </strong></code>",
            "Reduced initial setup time from 6-10 minutes to a single command i.e. <strong>≈90% improvement in developer efficiency</strong>.",
        ]
    },
    {
        date: "Nov '23",
        title: "Efficient Solar Tracker",
        category: "Electronics",
        github: "https://github.com/adityakanu/Sun-Tracking-Solar-Panel",
        youtube: "https://drive.google.com/file/d/1frltAbsYjo3rVHL5WJbuG5jVyg7E93tY/view?usp=sharing",
        details: [
            "Developed solar panel sun tracking system utilizing light dependent resistors (LDRs), Arduino nano microcontroller, and servo motor to optimize solar energy absorption",
            "Designed and implemented a precise and automated mechanism that dynamically adjusts solar panel orientation to maximize sun exposure, <strong>enhancing energy absorption by ≈34%.</strong>",
        ]
    },
    {
        date: "Nov '23",
        title: "Displacement Measurement of Iron Piece",
        category: "Electronics",
        github: "https://drive.google.com/file/d/1eDwtlPZ_5SIZnwahU28HFu54hxbT093c/view?usp=sharing",
        details: [
            "Engineered a versatile displacement measurement solution that harnesses Maxwell Bridge to measure the inductance of the Solenoid within which the iron piece is placed, facilitating accurate and dynamic measurement of its displacement within the Solenoid with seamless integration into various projects.",
            "Used Precision Full Wave Rectifier to convert the AC signals to DC to use Arduino Nano to display the displacement in centimetres via Smartphone or Computer.",
        ]
    },
];

export default function Projects() {
    const [activeTab, setActiveTab] = useState("All");
    const [active, setActive] = useState<Project | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

    const filteredProjects = activeTab === "All"
        ? projects
        : projects.filter(project => project.category === activeTab);

    useEffect(() => {
        function onKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                setActive(null);
            }
        }

        if (active) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        window.addEventListener("keydown", onKeyDown);
        return () => window.removeEventListener("keydown", onKeyDown);
    }, [active]);

    useOutsideClick(ref, () => setActive(null));

    return (
        <main className="p-4 flex flex-col mt-10">
            <h2 className="font-syne font-bold text-4xl mb-6">Projects</h2>
            <div className="max-w-2xl mx-auto w-full p-4">
                <div className="flex space-x-2 mb-6 font-mont">
                    {["All", "Software Development", "Electronics"].map((tab) => (
                        <Button
                            key={tab}
                            variant={activeTab === tab ? "destructive" : "ghost"}
                            onClick={() => setActiveTab(tab)}
                        >
                            {tab}
                        </Button>
                    ))}
                </div>
                <div className=" font-mont">
                    {filteredProjects.map((project, index) => (
                        <motion.div
                            layoutId={`card-${project.title}-${id}`}
                            key={`card-${project.title}-${id}`}
                            onClick={() => setActive(project)}
                            className="flex items-center space-x-4 p-1 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                        >
                            <motion.span layoutId={`date-${project.title}-${id}`} className="text-sm text-gray-500 md:w-16 md:block hidden">{project.date}</motion.span>
                            <motion.span layoutId={`title-${project.title}-${id}`} className="font-medium flex-grow">{project.title}</motion.span>
                            <div className="flex space-x-2">
                                {project.github && (
                                    <Link href={project.github} target="_blank" className="text-gray-500 hover:text-gray-700">
                                        <GitHubLogoIcon className="h-5 w-5" />
                                    </Link>
                                )}
                                {project.youtube && (
                                    <Link href={project.youtube} target="_blank" className="text-gray-500 hover:text-gray-700">
                                        <VideoIcon className="h-5 w-5" />
                                    </Link>
                                )}
                                {project.live && (
                                    <Link href={project.live} target="_blank" className="text-gray-500 hover:text-gray-700">
                                        <Link1Icon className="h-5 w-5" />
                                    </Link>
                                )}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>

            <AnimatePresence>
                {active && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black/20 h-full w-full z-10"
                    />
                )}
            </AnimatePresence>

            <AnimatePresence>
                {active && (
                    <div className="fixed inset-0 grid place-items-center z-[100]">
                        <motion.button
                            key={`button-${active.title}-${id}`}
                            layout
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { duration: 0.05 } }}
                            className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
                            onClick={() => setActive(null)}
                        >
                            <CloseIcon />
                        </motion.button>
                        <motion.div
                            layoutId={`card-${active.title}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
                        >
                            <div className="p-6">
                                <motion.h3
                                    layoutId={`title-${active.title}-${id}`}
                                    className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 mb-2"
                                >
                                    {active.title}
                                </motion.h3>
                                <motion.p
                                    layoutId={`date-${active.title}-${id}`}
                                    className="text-sm text-neutral-600 dark:text-neutral-400 mb-4"
                                >
                                    {active.date}
                                </motion.p>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-neutral-600 dark:text-neutral-400 mb-4"
                                >
                                    <ul className="list-disc pl-5 space-y-2">
                                        {active.details.map((detail, index) => (
                                            <li key={index} dangerouslySetInnerHTML={{ __html: detail }}></li>
                                        ))}
                                    </ul>
                                </motion.div>
                                <div className="flex space-x-4">
                                    {active.github && (
                                        <Link href={active.github} target="_blank" className="text-gray-500 hover:text-gray-700">
                                            <Button variant="outline">
                                                <GitHubLogoIcon className="h-5 w-5 mr-2" />
                                                GitHub
                                            </Button>
                                        </Link>
                                    )}
                                    {active.youtube && (
                                        <Link href={active.youtube} target="_blank" className="text-gray-500 hover:text-gray-700">
                                            <Button variant="outline">
                                                <VideoIcon className="h-5 w-5 mr-2" />
                                                YouTube
                                            </Button>
                                        </Link>
                                    )}
                                    {active.live && (
                                        <Link href={active.live} target="_blank" className="text-gray-500 hover:text-gray-700">
                                            <Button variant="outline">
                                                <Link1Icon className="h-5 w-5 mr-2" />
                                                Live Demo
                                            </Button>
                                        </Link>
                                    )}
                                </div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        </main>
    );
}

const CloseIcon = () => {
    return (
        <motion.svg
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, transition: { duration: 0.05 } }}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-4 w-4 text-black"
        >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M18 6l-12 12" />
            <path d="M6 6l12 12" />
        </motion.svg>
    );
};