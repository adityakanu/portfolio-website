import { ArrowRightIcon } from "@heroicons/react/24/solid";
import "../App.css";
import Alphabet from "../assets/Alphabet.svg";

export default function Navbar() {
    return (
        <header className="z-10 font-Ysabeau lg:sticky md:sticky t-0">
            <div className="container flex flex-col flex-wrap items-center pb-5 mx-auto md:flex-row">
                <a className="mb-4 font-semibold md:m-0">
                    <a href="#About" className="logo md:m-0">
                        <img
                            className="w-1/3 mx-auto"
                            src={Alphabet}
                            alt="Aditya Kanu"
                        />
                    </a>
                </a>
                <nav className="flex flex-wrap items-center justify-center text-base">
                    <a
                        href="https://blog.adityakanu.com"
                        className="mx-5 hover:font-bold hover:underline hover:text-cyan-500 "
                    >
                        Blog
                    </a>
                    <a
                        href="#Projects"
                        className="mx-5 hover:font-bold hover:underline hover:text-cyan-500 "
                    >
                        Projects
                    </a>
                    <a
                        href="#Skills"
                        className="mx-5 hover:font-bold hover:underline hover:text-cyan-500 "
                    >
                        Skills
                    </a>
                </nav>
                <a
                    href="#Contact"
                    className="inline-flex items-center px-3 py-1 mt-4 text-base text-white bg-gray-800 border-0 rounded md:ml-auto mr-7 focus:outline-none hover:bg-cyan-600 md:mt-0"
                >
                    Contact Me
                    <ArrowRightIcon className="w-4 h-4 ml-1" />
                </a>
            </div>
        </header>
    );
}
