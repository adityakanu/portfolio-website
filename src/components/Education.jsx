import { Player } from "@lottiefiles/react-lottie-player";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import downloadBtnWhite from "../assets/download-button-white.svg";

// GSAP Components
gsap.registerPlugin(ScrollTrigger);

// JSX
export default function Education() {
  return (
    <section id="Education">
      <div className="container flex md:flex-row flex-col mx-auto px-5vw py-20 ">
        <div className="eContent font-Ysabeau font-thin lg:flex-grow lg:pr-12 md:px-8 flex flex-col md:items-start md:text-left md:mb-0 items-center text-center text-xl">
          <h1>Studying</h1>
          <h2 className="font-medium">
            Electronics and Instrumentation Engineering{" "}
            <span className="font-thin">at</span>
          </h2>
          <h2 className="text-4xl font-semibold">
            National Institute of Technology, Agartala
          </h2>
          <span className="font-thin mb-4">2021-2025</span>
          <button className="inline-flex items-center border-0 bg-slate-400 text-white pb-1 pt-2 px-2 font-Josefin font-bold rounded-xl hover:bg-cyan-700  ">
            <a
              href="https://drive.google.com/file/d/1ngo_6TCpyLDMgI1aTUuJWrn5OuPle6-6/view?usp=sharing"
              rel="noreferrer"
              target="_blank"
            >
              Download Resume
            </a>
            <img src={downloadBtnWhite} className="w-6 h-6 mb-1 ml-1" alt="" />
          </button>
        </div>
        <div>
          <Player
            className="eSVG m-5 "
            autoplay
            loop
            background="transparent"
            speed="0.25"
            src="https://assets7.lottiefiles.com/packages/lf20_9gddhmw6.json"
            style={{ height: "300px", width: "300px" }}
          ></Player>
        </div>
      </div>
    </section>
  );
}
