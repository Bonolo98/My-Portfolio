import React from "react";
import resume from '../Assets/Angular.png'

export default function About() {
  return (
    <section id="about">
      <div className=" flex  py-36 md:flex-row flex-col items-center mb-10">
        <div className=" px-32">
          <img
            className="object-cover object-center rounded-lg w-72"
            alt="hero"
            src="./profile.jpeg"
          />
        </div>

        <div className=" lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-black">
            Hello, I'm Bonolo Solomon.
            <br className="hidden lg:inline-block" />I am a Full Stack
            Developer.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a UI/UX Designer and a Full Stack Developer currently based in
            Johannesburg, I am also a collaborative team player and a good
            problem solver.
          </p>

          <p className=" mb-10">
            I am also an innovative and creative individual, I love to take on
            challenges. I enjoys exploring new technologies and communicating
            ideas to ultimately guide my team to achieve a combined goal.
          </p>

          <div>
          {/* <p className=" mb-10">
            I am also an innovative and creative individual, I love to take on
            challenges. I enjoys exploring new technologies and communicating
            ideas to ultimately guide my team to achieve a combined goal.
          </p> */}
          </div>

          <div className="flex justify-center">
            <a
              href={resume}
              download
              className=" text-white bg-green-700 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400  rounded text-lg"
            >
              Download CV
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-white bg-gray-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 hover:text-white rounded text-lg"
            >
              See My Past Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
