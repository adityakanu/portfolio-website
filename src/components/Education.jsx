import { Player } from "@lottiefiles/react-lottie-player";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import LocomotiveScroll from "locomotive-scroll";
import downloadBtnWhite from "../assets/download-button-white.svg";

// const scroll = new LocomotiveScroll();
// GSAP Components
gsap.registerPlugin(ScrollTrigger);

// JSX
export default function Education() {
    return (
        <section id="Education">
            <div className="container flex flex-col py-20 mx-auto md:flex-row px-[7vw] ">
                <div className="flex flex-col items-center text-xl font-thin text-center font-Ysabeau lg:flex-grow lg:pr-12 md:px-8 md:items-start md:text-left md:mb-0">
                    <h1>Studying</h1>
                    <h2 className="font-medium">
                        Electronics and Instrumentation Engineering{" "}
                        <span className="font-thin">at</span>
                    </h2>
                    <h2 className="text-4xl font-semibold">
                        National Institute of Technology, Agartala
                    </h2>
                    <span className="mb-4 font-thin">2021-2025</span>
                    <button className="inline-flex items-center px-2 pt-2 pb-1 font-bold text-white border-0 bg-slate-400 font-Josefin rounded-xl hover:bg-cyan-700 ">
                        <a
                            href="https://drive.google.com/file/d/1ngo_6TCpyLDMgI1aTUuJWrn5OuPle6-6/view?usp=sharing"
                            rel="noreferrer"
                            target="_blank"
                        >
                            Download Resume
                        </a>
                        <img
                            src={downloadBtnWhite}
                            className="w-6 h-6 mb-1 ml-1"
                            alt=""
                        />
                    </button>
                </div>
                <div>
                    <Player
                        className="w-full mx-5"
                        autoplay
                        loop
                        background="transparent"
                        speed="0.25"
                        src="https://assets7.lottiefiles.com/packages/lf20_9gddhmw6.json"
                        // style={{ height: "500px", width: "500px" }}
                    ></Player>
                </div>
            </div>
        </section>
    );
}
