import Profile from "../assets/profile.png";
export default function About() {
    return (
        <section id="about">
            <div className="container flex flex-col items-center px-10 py-20 mx-auto font-bold md:flex-row font-Ysabeau">
                <div className="flex flex-col items-center mb-16 text-xl text-center lg:flex-grow lg:pr-12 md:px-8 md:items-start md:text-left md:mb-0">
                    <h3 className="pb-5 text-left">
                        Hi,{" "}
                        <span className="text-gray-300 line-through">I'm </span>
                        {/* <br /> */}
                        My name is
                    </h3>
                    <h1 className="text-6xl font-Josefin hover:text-cyan-400">
                        Aditya Kanu
                    </h1>
                    <h2 className="items-center py-2 font-medium text-left ">
                        <span className="font-bold">I'm</span> a{" "}
                        <span className="hover:text-violet-600">
                            Creative Developer
                        </span>{" "}
                        +{" "}
                        <span className="hover:text-violet-600">Designer</span>
                    </h2>
                </div>
                <div>
                    <img
                        src={Profile}
                        className="lg:max-w-lg lg:w-full md:w-[1/1.3] w-5/6 md:ml-auto"
                        alt="Portrait"
                    />
                </div>
            </div>
        </section>
    );
}
