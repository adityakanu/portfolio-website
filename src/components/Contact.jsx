import githubPastel from "../assets/icons8-github.svg";
import facebook from "../assets/pastel-facebook.svg";
import instagram from "../assets/pastel-instagram.svg";
import linkedin from "../assets/pastel-linkedin-logo.svg";
import twitter from "../assets/pastel-twitter.svg";
// import youtube from "../assets/pastel-youtube-logo.svg";

export default function Contact() {
    return (
        <section id="contact" className="">
            <div className="flex flex-col items-center justify-center p-10">
                <div className="mt-5 text-xl font-medium font-Ysabeau">
                    <h1>Feel free to reach out</h1>
                </div>
                <div className="flex flex-row items-center justify-center pt-6 pb-2">
                    <a
                        href="https://twitter.com/adityakanu_"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={twitter} alt="" className="mx-1 w-9 h-9" />
                    </a>
                    <a
                        href="https://instagram.com/adityakanu_"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={instagram} alt="" className="mx-1 w-9 h-9" />
                    </a>
                    <a
                        href="https://linkedin.com/in/adityakanu"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img src={linkedin} alt="" className="mx-1 w-9 h-9" />
                    </a>
                    <a
                        href="https://github.com/adityakanu"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <img
                            src={githubPastel}
                            alt=""
                            className="mx-1 w-9 h-9"
                        />
                    </a>
                    <a href="/">
                        <img src={facebook} alt="" className="mx-1 w-9 h-9" />
                    </a>
                </div>
            </div>
        </section>
    );
}
