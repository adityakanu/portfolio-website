import githubPastel from "../assets/icons8-github.svg";
import facebook from "../assets/pastel-facebook.svg";
import instagram from "../assets/pastel-instagram.svg";
import linkedin from "../assets/pastel-linkedin-logo.svg";
import twitter from "../assets/pastel-twitter.svg";
import youtube from "../assets/pastel-youtube-logo.svg";

export default function Contact() {
  return (
    <section id="contact" className="">
      <div className="p-10  ">
        <div className=" font-Ysabeau font-medium text-xl ">
          Feel free to reach out
        </div>
        <div className="inline-flex pt-6 pb-2 items-center justify-center">
          <a
            href="https://twitter.com/adityakanu_"
            target="_blank"
            rel="noreferrer"
          >
            <img src={twitter} alt="" className="w-9 h-9 mx-1" />
          </a>
          <a
            href="https://instagram.com/adityakanu_"
            target="_blank"
            rel="noreferrer"
          >
            <img src={instagram} alt="" className="w-9 h-9 mx-1" />
          </a>
          <a
            href="https://linkedin.com/in/adityakanu"
            target="_blank"
            rel="noreferrer"
          >
            <img src={linkedin} alt="" className="w-9 h-9 mx-1" />
          </a>
          <a
            href="https://github.com/adityakanu"
            target="_blank"
            rel="noreferrer"
          >
            <img src={githubPastel} alt="" className="w-9 h-9 mx-1" />
          </a>
          <a href="/">
            <img src={facebook} alt="" className="w-9 h-9 mx-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
