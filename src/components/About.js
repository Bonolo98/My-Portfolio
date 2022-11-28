import React from "react";

export default function About() {
  return (
    <section id="about">
      <div className="container flex px-10 py-20 md:flex-row flex-col items-center mb-20">
       
        <div className="lg:max-w-lg lg:w-56 md:w-56 w-5/6">
          <img
            className="object-cover object-center rounded-lg"
            alt="hero"
            src="./profile.jpeg"
          />
        </div>

        <div className="ml-10 lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hello, I'm Bonolo Solomon.
            <br className="hidden lg:inline-block" />I am a Full Stack Developer.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a UI/UX Designer and a Full Stack Developer currently based in Johannesburg, I am also a collaborative team player and a good problem solver.
          </p>
        
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-blue-700 rounded text-lg">
              Contact Me Now
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-700 hover:text-white rounded text-lg">
              See My Past Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
