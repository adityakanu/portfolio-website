import { ArrowRightIcon } from "@heroicons/react/24/solid";
import Alphabet from "../assets/Alphabet.svg";
export default function Navbar() {
  return (
    <header className="font-Ysabeau lg:sticky md:sticky t-0 z-10">
      <div className="container mx-auto flex flex-wrap py-5 flex-col md:flex-row items-center">
        <a className="font-semibold mb-4 md:m-0">
          <a href="#About" className="logo md:m-0">
            <img className="w-1/3 mx-auto" src={Alphabet} alt="Aditya Kanu" />
          </a>
        </a>
        <nav className="flex flex-wrap items-center text-base justify-center">
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
          className="inline-flex items-center bg-gray-800 border-0 md:ml-auto mr-7 py-1 px-3 focus:outline-none hover:bg-cyan-600 rounded text-white text-base mt-4 md:mt-0"
        >
          Contact Me
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </div>
    </header>
  );
}
