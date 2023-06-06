import Profile from "../assets/profile.png";
export default function About() {
  return (
    <section id="about">
      <div className="container mx-auto px-10 py-20 flex md:flex-row flex-col font-Ysabeau font-bold items-center">
        <div className="lg:flex-grow lg:pr-12 md:px-8 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center text-xl">
          <h3 className="text-left pb-5">
            Hi, <span className="text-gray-300 line-through">I'm </span>
            {/* <br /> */}
            My name is
          </h3>
          <h1 className="font-Josefin text-6xl hover:text-cyan-400">
            Aditya Kanu
          </h1>
          <h2 className="text-left py-2 font-medium items-center ">
            <span className="font-bold">I'm</span> a{" "}
            <span className="hover:text-violet-600">Creative Developer</span> +{" "}
            <span className="hover:text-violet-600">Designer</span>
          </h2>
        </div>
        <div>
          <img
            src={Profile}
            className="lg:max-w-lg lg:w-full md:w-1/1.3 w-6/ md:ml-auto"
            alt="Portrait"
          />
        </div>
      </div>
    </section>
  );
}
