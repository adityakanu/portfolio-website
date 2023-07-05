import twelvethman from "../assets/12thman.png";
import aws from "../assets/aws.svg";
import ecell from "../assets/ecell-website.png";
import firebase from "../assets/firebase.svg";
import Github from "../assets/github.svg";
import gulchin from "../assets/gulchin.png";
import Weblink from "../assets/link-64.png";
import mongodb from "../assets/mongodb.svg";
import react from "../assets/react.svg";
import tailwind from "../assets/tailwind.svg";
import Youtube from "../assets/youtube.svg";

export default function Projects() {
    return (
        <section id="Projects" className="">
            <div className="">
                <h1 className="flex items-center justify-center h-screen p-10 text-5xl font-semibold font-Ysabeau">
                    My Projects
                </h1>
                <div className="flex flex-col justify-center items-center m-auto space-y-10 w-[65vw]">
                    {/* Individual projects */}
                    <div
                        id="Project-1"
                        className="p-4 m-4 bg-cyan-100 rounded-xl"
                    >
                        <img
                            src={gulchin}
                            className="w-100 h-100 rounded-xl"
                            alt="Project Glimpse"
                        />
                        <div className="flex flex-row px-5 py-2">
                            <div className="text-left">
                                <p className="mr-auto text-sm ">Coming Soon</p>
                                <div className="inline-flex space-x-2 ">
                                    <h3>Tech Stacks:</h3>
                                    <img
                                        src={react}
                                        className="w-4 h-4 mt-1"
                                        alt="React"
                                    />
                                    <img
                                        src={tailwind}
                                        className="w-4 h-4 mt-1"
                                        alt="Tailwind CSS"
                                    />
                                    <img
                                        src={firebase}
                                        className="w-4 h-4 mt-1"
                                        alt="Firebase"
                                    />
                                    <img
                                        src={mongodb}
                                        className="w-4 h-4 mt-1"
                                        alt="Mongo DB"
                                    />
                                    <img
                                        src={aws}
                                        className="w-4 h-4 mt-1"
                                        alt="AWS"
                                    />
                                </div>
                            </div>
                            <div className="inline-flex mx-5 ml-auto">
                                <a href="/" target="_blank">
                                    {/* Source Code */}
                                </a>
                                <img
                                    src={Github}
                                    className="w-6 h-6 ml-1"
                                    alt="Github Logo"
                                />
                                <a href="/">{/* Demo Video */}</a>
                                <img
                                    src={Youtube}
                                    className="w-6 h-6 ml-1"
                                    alt="Youtube logo"
                                />
                                <a href="/">{/* Deployed Live */}</a>
                                <img
                                    src={Weblink}
                                    className="w-6 h-6 ml-1"
                                    alt="Site logo"
                                />
                            </div>
                        </div>
                    </div>
                    {/* 2nd project */}
                    <div id="Project-1" className="p-4 bg-cyan-100 rounded-xl">
                        <img
                            src={ecell}
                            className="w-100 h-100 rounded-xl"
                            alt="Project Glimpse"
                        />
                        <div className="flex flex-row px-5 py-2">
                            <div className="text-left">
                                <p className="mr-auto text-sm ">Coming Soon</p>
                                <div className="inline-flex space-x-2 ">
                                    <h3>Tech Stacks:</h3>
                                    <img
                                        src={react}
                                        className="w-4 h-4 mt-1"
                                        alt="React"
                                    />
                                    <img
                                        src={tailwind}
                                        className="w-4 h-4 mt-1"
                                        alt="Tailwind CSS"
                                    />
                                    <img
                                        src={firebase}
                                        className="w-4 h-4 mt-1"
                                        alt="Firebase"
                                    />
                                    {/* <img src={mongodb} className="w-4 h-4 mt-1" alt="Mongo DB" /> */}
                                    {/* <img src={aws} className="w-4 h-4 mt-1" alt="AWS" /> */}
                                </div>
                            </div>
                            <div className="inline-flex mx-5 ml-auto">
                                <a href="/" target="_blank">
                                    {/* Source Code */}
                                </a>
                                <img
                                    src={Github}
                                    className="w-6 h-6 ml-1"
                                    alt="Github Logo"
                                />
                                <a href="/">{/* Demo Video */}</a>
                                <img
                                    src={Youtube}
                                    className="w-6 h-6 ml-1"
                                    alt="Youtube logo"
                                />
                                <a href="/">{/* Deployed Live */}</a>
                                <img
                                    src={Weblink}
                                    className="w-6 h-6 ml-1"
                                    alt="Site logo"
                                />
                            </div>
                        </div>
                    </div>
                    {/* 3rd project */}
                    <div id="Project-1" className="p-4 bg-cyan-100 rounded-xl">
                        <img
                            src={twelvethman}
                            className="w-100 h-100 rounded-xl"
                            alt="Project Glimpse"
                        />
                        <div className="flex flex-row px-5 py-2">
                            <div className="text-left">
                                <p className="mr-auto text-sm ">Coming Soon</p>
                                <div className="inline-flex space-x-2 ">
                                    <h3>Tech Stacks:</h3>
                                    <img
                                        src={react}
                                        className="w-4 h-4 mt-1"
                                        alt="React"
                                    />
                                    <img
                                        src={tailwind}
                                        className="w-4 h-4 mt-1"
                                        alt="Tailwind CSS"
                                    />
                                    <img
                                        src={firebase}
                                        className="w-4 h-4 mt-1"
                                        alt="Firebase"
                                    />
                                    <img
                                        src={mongodb}
                                        className="w-4 h-4 mt-1"
                                        alt="Mongo DB"
                                    />
                                    <img
                                        src={aws}
                                        className="w-4 h-4 mt-1"
                                        alt="AWS"
                                    />
                                </div>
                            </div>
                            <div className="inline-flex mx-5 ml-auto">
                                <a href="/" target="_blank">
                                    {/* Source Code */}
                                </a>
                                <img
                                    src={Github}
                                    className="w-6 h-6 ml-1"
                                    alt="Github Logo"
                                />
                                <a href="/">{/* Demo Video */}</a>
                                <img
                                    src={Youtube}
                                    className="w-6 h-6 ml-1"
                                    alt="Youtube logo"
                                />
                                <a href="/">{/* Deployed Live */}</a>
                                <img
                                    src={Weblink}
                                    className="w-6 h-6 ml-1"
                                    alt="Site logo"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
