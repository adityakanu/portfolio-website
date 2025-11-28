'use client'

import { useOutsideClick } from "@/components/hooks/use-outside-click";
import { AnimatePresence, motion } from "framer-motion";
import React, { useEffect, useId, useRef, useState } from "react";

interface Experience {
    date: string;
    company: string;
    position: string;
    location: string;
    details: string[];
}

const experiences: Experience[] = [
    {
        date: "Aug 2025 - Present",
        company: "Zscaler",
        position: "Associate Software Development Engineer",
        location: "Remote, India",
        details: [
            "Building CLI tools <strong>automating cloud operations</strong>, reducing manual workflows and deployment time by over <strong>30%</strong>.",
            "Automating large-scale infrastructure testing using <strong>k6</strong>, enhancing system reliability and scalability benchmarks.",
            "Standardized infrastructure code by refactoring multi-language scripts into a single <strong>Golang</strong> codebase, improving maintainability across testing and deployment pipelines.",
            "Automating end-to-end workflows using <strong>Playwright</strong>, enhancing testing coverage and operational efficiency."
        ]
    },
    {
        date: "Feb 2025 - Aug 2025",
        company: "Zscaler",
        position: "Intern - Software Development",
        location: "Bangalore, Karnataka",
        details: [
            "Optimized a critical <strong>Kusto (KQL)</strong> query on <strong>Azure</strong>, cutting execution time by over <strong>80%</strong> (from >60s to <12s).",
            "Utilized <strong>Telemetry Pipelines</strong> to detect anomalous crashes in real-time, improving Incident response efficiency.",
            "Collaborated with an 8-member offshore team across India and San Jose to synchronise on sprints goals.",
            "Debugging log files using <strong>WinDBG</strong> to investigate root causes of bugs and system failures improving reliability.",
        ]
    },
    {
        date: "Mar 2024 - Jul 2024",
        company: "Qrit",
        position: "Backend SDE Intern (GoLang)",
        location: "Remote",
        details: [
            "Implemented authentication flow using <strong>Google auth</strong>, & thoroughly tested it with various edge cases using <strong>Postman</strong>.",
            "Enhanced security by integrating session management using <strong>Gorilla/session</strong> library preventing unauthorized access.",
            "Researched optimal encryption techniques & benchmarked our options GoCrypto & Tink for backend data security.",
            "Wrote <strong>unit tests and integration tests</strong> for all the APIs and Services developed covering a wide range of test cases.",
            "Utilized <strong>Docker</strong> for isolated testing of individual microservices in the GoLang backend, ensuring successful functionality."
        ]
    }
];

export function Experience() {
    const [active, setActive] = useState<Experience | null>(null);
    const ref = useRef<HTMLDivElement>(null);
    const id = useId();

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
            <h2 className="font-serif font-bold text-4xl mb-6">Experience</h2>
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
                            key={`button-${active.company}-${id}`}
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
                            layoutId={`card-${active.company}-${active.position}-${id}`}
                            ref={ref}
                            className="w-full max-w-[500px] h-full md:h-fit md:max-h-[90%] flex flex-col bg-background border-2 border-border shadow-neobrutal-lg sm:rounded-3xl overflow-hidden"
                        >
                            <div className="p-6">
                                <motion.h3
                                    layoutId={`company-${active.company}-${active.position}-${id}`}
                                    className="font-bold text-2xl text-neutral-800 dark:text-neutral-200 mb-2"
                                >
                                    {active.company}
                                </motion.h3>
                                <motion.p
                                    layoutId={`position-${active.position}-${id}`}
                                    className="text-sm font-bold text-neutral-600 dark:text-neutral-400 mb-1"
                                >
                                    {active.position}
                                </motion.p>
                                <motion.p
                                    layoutId={`location-${active.location}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 mb-1"
                                >
                                    {active.location}
                                </motion.p>
                                <motion.p
                                    layoutId={`date-${active.date}-${id}`}
                                    className="text-neutral-600 dark:text-neutral-400 mb-4"
                                >
                                    {active.date}
                                </motion.p>
                                <motion.div
                                    layout
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="text-neutral-600 dark:text-neutral-400"
                                >
                                    <ul className="list-disc pl-5 space-y-2">
                                        {active.details.map((detail, index) => (
                                            <li key={index} dangerouslySetInnerHTML={{ __html: detail }} />
                                        ))}
                                    </ul>
                                </motion.div>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            <ul className="max-w-2xl mx-auto w-full space-y-4">
                {experiences.map((exp, index) => (
                    <motion.div
                        layoutId={`card-${exp.company}-${exp.position}-${id}`}
                        key={`card-${exp.company}-${exp.position}-${id}`}
                        onClick={() => setActive(exp)}
                        whileHover={{
                            x: 2,
                            y: 2,
                            boxShadow: "0px 0px 0px 0px transparent"
                        }}
                        transition={{ duration: 0.2 }}
                        className="p-4 flex justify-between items-center bg-card border-2 border-border shadow-neobrutal rounded-xl cursor-pointer"
                    >
                        <div className="">
                            <motion.h3
                                layoutId={`company-${exp.company}-${exp.position}-${id}`}
                                className="font-medium md:text-lg text-neutral-800 dark:text-neutral-200"
                            >
                                {exp.company}
                            </motion.h3>
                            <motion.p
                                layoutId={`position-${exp.position}-${id}`}
                                className="text-neutral-600 dark:text-neutral-400 "
                            >
                                {exp.position}
                            </motion.p>
                        </div>
                        <div className="flex flex-col items-end">
                            <motion.p
                                layoutId={`location-${exp.location}-${id}`}
                                className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1 hidden md:block"
                            >
                                {exp.location}
                            </motion.p>
                            <motion.p
                                layoutId={`date-${exp.date}-${id}`}
                                className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-1 hidden md:block"
                            >
                                {exp.date}
                            </motion.p>
                        </div>

                        {/* <motion.button
                            layoutId={`button-${exp.company}-${id}`}
                            className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-sky-500 hover:text-white text-black"
                        >
                            View Details
                        </motion.button> */}
                    </motion.div>
                ))}
            </ul>
        </main>
    );
}

export const CloseIcon = () => {
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