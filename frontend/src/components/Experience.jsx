function Experience() {
  const experiences = [
    {
      year: "2026",
      role: "Full Stack Developer Intern",
      company: "IBM SkillsBuild - Naan Mudhalvan",
      description:
        "Worked on CRM Application development using MERN Stack. Built frontend components, REST APIs and database integration.",
      tech: ["React", "Node.js", "Express", "PostgreSQL"],
    },
    {
      year: "2025",
      role: "Machine Learning Intern",
      company: "SkillCraft Technology",
      description:
        "Developed Computer Vision and Machine Learning projects using Python, OpenCV and TensorFlow.",
      tech: ["Python", "OpenCV", "TensorFlow"],
    },
  ];

  return (
    <section
      id="experience"
      className="min-h-screen bg-black text-white py-20 px-6 lg:px-20 scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <p className="text-white uppercase tracking-[4px] text-sm mb-4">
          Experience
        </p>

        <h2 className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-16">
          My Journey
        </h2>

        {/* Cards */}
        <div className="grid md:grid-cols-2 gap-8">

          {experiences.map((exp, index) => (
            <div
              key={index}
              className="
                bg-[#111111]
                border border-yellow-500/10
                rounded-3xl
                p-8
                hover:border-yellow-400/40
                hover:-translate-y-2
                hover:shadow-lg
                hover:shadow-yellow-500/20
                transition-all
                duration-300
              "
            >
              <span className="text-yellow-400 font-semibold text-sm">
                {exp.year}
              </span>

              <h3 className="text-3xl font-bold mt-3 mb-2">
                {exp.role}
              </h3>

              <h4 className="text-xl text-gray-300 mb-5">
                {exp.company}
              </h4>

              <p className="text-gray-400 leading-relaxed mb-6">
                {exp.description}
              </p>

              <div className="flex flex-wrap gap-2">
                {exp.tech.map((tech, idx) => (
                  <span
                    key={idx}
                    className="
                      px-3 py-1
                      text-sm
                      bg-yellow-500/10
                      border border-yellow-400/20
                      text-yellow-400
                      rounded-lg
                    "
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Experience;