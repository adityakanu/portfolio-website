'use client'

import { useOutsideClick } from "@/components/hooks/use-outside-click";
import { Button } from "@/components/ui/button";
import { LinkPreview } from "@/components/ui/link-preview";
import * as HoverCardPrimitive from "@radix-ui/react-hover-card";
import { GitHubLogoIcon, Link1Icon, VideoIcon } from "@radix-ui/react-icons";
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import Image from "next/image";
import Link from "next/link";
import { encode } from "qss";
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

// Custom non-clickable preview component
const ProjectPreview = ({ children, url }: { children: React.ReactNode; url: string }) => {
    const [isOpen, setOpen] = React.useState(false);
    const [isMounted, setIsMounted] = React.useState(false);

    React.useEffect(() => {
        setIsMounted(true);
    }, []);

    const springConfig = { stiffness: 100, damping: 15 };
    const x = useMotionValue(0);
    const translateX = useSpring(x, springConfig);

    const handleMouseMove = (event: any) => {
        const targetRect = event.target.getBoundingClientRect();
        const eventOffsetX = event.clientX - targetRect.left;
        const offsetFromCenter = (eventOffsetX - targetRect.width / 2) / 2; // Reduce the effect to make it subtle
        x.set(offsetFromCenter);
    };

    const params = encode({
        url,
        screenshot: true,
        meta: false,
        embed: "screenshot.url",
        colorScheme: "dark",
        "viewport.isMobile": true,
        "viewport.deviceScaleFactor": 1,
        "viewport.width": 600,
        "viewport.height": 375,
    });
    const src = `https://api.microlink.io/?${params}`;

    return (
        <>
            {isMounted ? (
                <div className="hidden">
                    <Image
                        src={src}
                        width={200}
                        height={125}
                        quality={50}
                        priority={true}
                        alt="hidden image"
                    />
                </div>
            ) : null}

            <HoverCardPrimitive.Root
                openDelay={50}
                closeDelay={100}
                onOpenChange={(open) => {
                    setOpen(open);
                }}
            >
                <HoverCardPrimitive.Trigger 
                    className="block w-full"
                    onMouseMove={handleMouseMove}
                >
                    {children}
                </HoverCardPrimitive.Trigger>

                <HoverCardPrimitive.Content
                    className="[transform-origin:var(--radix-hover-card-content-transform-origin)]"
                    side="top"
                    align="center"
                    sideOffset={10}
                >
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 20, scale: 0.6 }}
                                animate={{
                                    opacity: 1,
                                    y: 0,
                                    scale: 1,
                                    transition: {
                                        type: "spring",
                                        stiffness: 260,
                                        damping: 20,
                                    },
                                }}
                                exit={{ opacity: 0, y: 20, scale: 0.6 }}
                                className="shadow-xl rounded-xl"
                                style={{
                                    x: translateX,
                                }}
                            >
                                <div className="block p-1 bg-white border-2 border-transparent shadow rounded-xl">
                                    <Image
                                        src={src}
                                        width={200}
                                        height={125}
                                        quality={50}
                                        priority={true}
                                        className="rounded-lg"
                                        alt="preview image"
                                    />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </HoverCardPrimitive.Content>
            </HoverCardPrimitive.Root>
        </>
    );
};

const projects: Project[] = [
    {
        date: "Jul '25",
        title: "Memphi UI - A shadcn component library",
        category: "Frontend",
        live: "https://memphi.dev/",
        github: "https://github.com/adityakanu/memphi-ui",
        details: [
            "Developed Memphi UI, a themed React/Tailwind component library with Memphis, doodle, and neobrutalist aesthetics.",
            "Wrote scripts to auto-generate component registry files compatible with the shadcn CLI, enabling one-line installs.",
            "Deployed the registry and documentation to Vercel, enabling live previews and \"Open in v0\" support.",
        ]
    },
    {
        date: "Apr '25",
        title: "Ambinest - Ambient Sound Web App",
        category: "Frontend",
        live: "https://ambinest.adityakanu.com",
        youtube: "https://youtu.be/ambinest-demo",
        details: [
            "Designed and developed a visually immersive ambient sound web app with a focus on minimalist UI/UX.",
            "Ranked <strong>29th</strong> on Peerlist and <strong>35th</strong> on Product Hunt (out of 500+ daily entries), with 100+ organic users in the first week of launch.",
            "Built using Next.js, TypeScript, and Web Audio API for high-quality audio processing and playback.",
            "Demonstrated strong community traction with exceptional user engagement metrics.",
        ]
    },
    {
        date: "May '24",
        title: "NITA Placement Connect - On-Campus Placement Portal",
        category: "Full Stack",
        live: "https://nita-placement-connect.vercel.app",
        youtube: "https://youtu.be/nita-placement-demo",
        details: [
            "On-Campus Placement Portal, reducing manual entry errors by an <strong>≈87%</strong> compared to traditional Google Forms.",
            "Implemented role-based access control, enabling secure data management for admins, coordinators, and students.",
            "Using MongoDB's aggregation framework, reduced the time to generate various student reports by <strong>≈70%</strong>.",
            "Contributed to frontend and backend, collaborating with my team using Git and deploying it on Vercel and Render.",
        ]
    },
    {
        date: "May '25",
        title: "AroSneha - AI-Powered Health Companion",
        category: "Full Stack",
        live: "https://arosneha.vercel.app",
        youtube: "https://youtu.be/arosneha-demo",
        details: [
            "Engineered an end-to-end personal health platform to parse medical reports and deliver contextual AI insights.",
            "Built the MVP in 6 hours with a focus on modular architecture, enabling future expansion into doctor collaboration.",
            "Developed using Next.js, Supabase, OpenRouter, and TypeScript for a robust and scalable solution.",
            "Implemented AI-powered analysis capabilities for medical report interpretation and health recommendations.",
        ]
    },
    {
        date: "Feb '24",
        title: "Issue Tracker and Log Ingestor",
        category: "Full Stack",
        github: "https://github.com/adityakanu/Log-Ingestor-with-Query-Interface",
        youtube: "https://youtu.be/bKpkh2cvIAo",
        details: [
            "Built a webapp to insert issues to Org’s issue management infra, implementing both API and UI options to insert logs.",
            "Implemented a modern technology stack to manage the entire log lifecycle, including React, Express, and MongoDB.",
            "The throughput as observed on load test with 100 virtual users over 1 minute, averaged around <strong>46 requests/sec</strong>.",
            "The system demonstrated its peak throughput, reaching up to <strong>90 requests/sec</strong> during the test."
        ]
    }
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
                    {["All", "Frontend", "Full Stack"].map((tab) => (
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
                    {filteredProjects.map((project, index) => {
                        const previewUrl = project.live || project.github;
                        const ProjectRow = (
                            <motion.div
                                layoutId={`card-${project.title}-${id}`}
                                key={`card-${project.title}-${id}`}
                                onClick={() => setActive(project)}
                                className="flex items-center space-x-4 p-1 hover:bg-neutral-50 dark:hover:bg-neutral-800 rounded-xl cursor-pointer"
                            >
                                <motion.span layoutId={`date-${project.title}-${id}`} className="text-sm text-gray-500 md:w-16 md:block hidden">{project.date}</motion.span>
                                <motion.span layoutId={`title-${project.title}-${id}`} className="font-medium flex-grow">
                                    {project.title}
                                </motion.span>
                                <div className="flex space-x-2">
                                    {project.github && (
                                        <Link href={project.github} target="_blank" className="text-gray-500 hover:text-gray-700" onClick={(e) => e.stopPropagation()}>
                                            <GitHubLogoIcon className="h-5 w-5" />
                                        </Link>
                                    )}
                                    {project.youtube && (
                                        <Link href={project.youtube} target="_blank" className="text-gray-500 hover:text-gray-700" onClick={(e) => e.stopPropagation()}>
                                            <VideoIcon className="h-5 w-5" />
                                        </Link>
                                    )}
                                    {project.live && (
                                        <Link href={project.live} target="_blank" className="text-gray-500 hover:text-gray-700" onClick={(e) => e.stopPropagation()}>
                                            <Link1Icon className="h-5 w-5" />
                                        </Link>
                                    )}
                                </div>
                            </motion.div>
                        );

                        return previewUrl ? (
                            <ProjectPreview key={`preview-${project.title}-${id}`} url={previewUrl}>
                                {ProjectRow}
                            </ProjectPreview>
                        ) : ProjectRow;
                    })}
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