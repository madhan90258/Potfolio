import React from "react";

function Experience() {
  const experiences = [
    {
      year: "2025",
      role: "MERN Stack Developer Intern",
      company: "IBM SkillsBuild | Naan Mudhalvan",
      description:
        "Developed CRM Application using React.js, Node.js, Express.js and PostgreSQL. Implemented authentication, dashboard modules and REST APIs.",
      tech: ["React.js", "Node.js", "Express.js", "PostgreSQL"],
    },
    {
      year: "2025",
      role: "Machine Learning Intern",
      company: "SkillCraft Technology",
      description:
        "Built Computer Vision and Machine Learning projects including Hand Gesture Recognition and Live Finger Counting using Python, OpenCV and TensorFlow.",
      tech: ["Python", "OpenCV", "TensorFlow"],
    },
  ];

  return (
    <section
      id="experience"
      className="bg-black text-white py-16 px-6 lg:px-20 scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto translate-x-15">

        <p className="text-white uppercase tracking-[4px] text-sm mb-4">
          Experience
        </p>

        <h2 className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-20">
          My Journey
        </h2>

        {/* First Experience */}
        <div className="flex justify-start items-center gap-8 mb-20">

          <div className="w-full md:w-[45%] bg-[#111111] border border-yellow-500/10 rounded-3xl p-8 hover:border-yellow-400/40 hover:-translate-y-2 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">

            <span className="text-yellow-400 font-semibold">
              {experiences[0].year}
            </span>

            <h3 className="text-3xl font-bold mt-3 mb-2">
              {experiences[0].role}
            </h3>

            <h4 className="text-xl text-gray-300 mb-5">
              {experiences[0].company}
            </h4>

            <p className="text-gray-400 leading-relaxed mb-6">
              {experiences[0].description}
            </p>

            <div className="flex flex-wrap gap-2">
              {experiences[0].tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm bg-yellow-500/10 border border-yellow-400/20 text-yellow-400 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

          <div className="hidden md:flex w-8 h-8 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50"></div>

        </div>

        {/* Second Experience */}
        <div className="flex justify-end items-center gap-8 mb-40">

          <div className="hidden md:flex w-8 h-8 rounded-full bg-yellow-400 shadow-lg shadow-yellow-400/50"></div>

          <div className="w-full md:w-[45%] bg-[#111111] border border-yellow-500/10 rounded-3xl p-8 hover:border-yellow-400/40 hover:-translate-y-2 hover:shadow-lg hover:shadow-yellow-500/20 transition-all duration-300">

            <span className="text-yellow-400 font-semibold">
              {experiences[1].year}
            </span>

            <h3 className="text-3xl font-bold mt-3 mb-2">
              {experiences[1].role}
            </h3>

            <h4 className="text-xl text-gray-300 mb-5">
              {experiences[1].company}
            </h4>

            <p className="text-gray-400 leading-relaxed mb-6">
              {experiences[1].description}
            </p>

            <div className="flex flex-wrap gap-2">
              {experiences[1].tech.map((tech, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 text-sm bg-yellow-500/10 border border-yellow-400/20 text-yellow-400 rounded-lg"
                >
                  {tech}
                </span>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Experience;