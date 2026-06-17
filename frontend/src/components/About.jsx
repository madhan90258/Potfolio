import {
  FaUser,
  FaEnvelope,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

import { BsFillCheckCircleFill } from "react-icons/bs";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen bg-black text-white px-6 lg:px-20 py-20 flex items-center"
    >
      <div className="max-w-7xl mx-auto w-full">

        <div className="grid grid-cols-1 lg:grid-cols-[6fr_4fr] gap-16 items-center">

          {/* LEFT SIDE */}
          <div className="translate-x-15">

            {/* Heading */}
            <h2 className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-8">
              About Me
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed max-w-3xl">
              I'm Madhan Raj, a Computer Science Engineering student
              passionate about Full Stack Development, Software Engineering,
              and Machine Learning.

              <br />
              <br />

              I specialize in building modern web applications using
              React.js, Node.js, Express.js, PostgreSQL, and Python.

              <br />
              <br />

              I enjoy creating scalable solutions, learning new
              technologies, and turning ideas into real-world projects.
              My goal is to become a Software Engineer and contribute to
              innovative technology-driven solutions.
            </p>

            {/* SOCIAL LINKS */}
            <div className="flex justify-center items-center gap-10 mt-10 ml-12 mb-12">

              <a
                href="https://github.com/madhan90258"
                target="_blank"
                rel="noreferrer"
                className="text-4xl text-gray-400 hover:text-yellow-400 hover:scale-125 transition-all duration-300"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/"
                target="_blank"
                rel="noreferrer"
                className="text-4xl text-gray-400 hover:text-yellow-400 hover:scale-125 transition-all duration-300"
              >
                <FaLinkedin />
              </a>

              <a
                href="mailto:madhan90258@gmail.com"
                className="text-4xl text-gray-400 hover:text-yellow-400 hover:scale-125 transition-all duration-300"
              >
                <FaEnvelope />
              </a>

            </div>

            {/* Resume Button */}
<div className="flex justify-center ml-12">
              <button
  className="
    px-12
    py-4
    text-xl
    font-semibold
    border-2
    border-yellow-400
    text-yellow-400
    rounded-2xl
    hover:bg-yellow-400
    hover:text-black
    hover:scale-110
    transition-all
    duration-300
    shadow-lg
    shadow-yellow-500/20
  "
>
                Download Resume
              </button>

            </div>

          </div>

          {/* RIGHT SIDE CARD */}
          <div
            className="
              bg-gradient-to-br
              from-yellow-950/20
              via-slate-900/50
              to-black/40
              backdrop-blur-xl
              border border-yellow-500/20
              rounded-3xl
              p-8
              shadow-[0_8px_32px_rgba(0,0,0,0.45)]
              hover:border-yellow-400/30
              transition-all
              duration-500
              w-full
              min-h-[420px]
              flex
              flex-col
              justify-center
            "
          >

            <div className="h-[340px] flex flex-col justify-evenly">

              {/* NAME */}
              <div className="flex items-center gap-12 border-b border-white/10 py-4 pl-16">

                <FaUser className="text-yellow-400 text-3xl min-w-[32px]" />

                <div>
                  <p className="text-gray-400 text-sm">
                    Name
                  </p>

                  <h3 className="text-xl font-semibold text-white">
                    Madhan Raj
                  </h3>
                </div>

              </div>

              {/* EMAIL */}
              <div className="flex items-center gap-12 border-b border-white/10 py-4 pl-16">

                <FaEnvelope className="text-yellow-400 text-3xl min-w-[32px]" />

                <div>
                  <p className="text-gray-400 text-sm">
                    Email
                  </p>

                  <h3 className="text-xl font-semibold text-white">
                    madhan90258@gmail.com
                  </h3>
                </div>

              </div>

              {/* LOCATION */}
              <div className="flex items-center gap-12 border-b border-white/10 py-4 pl-16">

                <FaMapMarkerAlt className="text-yellow-400 text-3xl min-w-[32px]" />

                <div>
                  <p className="text-gray-400 text-sm">
                    Location
                  </p>

                  <h3 className="text-xl font-semibold text-white">
                    Chennai, India
                  </h3>
                </div>

              </div>

              {/* AVAILABILITY */}
              <div className="flex items-center gap-12 py-4 pl-16">

                <BsFillCheckCircleFill className="text-green-500 text-3xl min-w-[32px]" />

                <div>
                  <p className="text-gray-400 text-sm">
                    Availability
                  </p>

                  <h3 className="text-xl font-semibold text-green-400">
                    Available for Work
                  </h3>
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;