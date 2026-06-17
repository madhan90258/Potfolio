function Skills() {
  return (
    <section
      id="skills"
      className="min-h-screen pt-24 bg-[#050505] text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-10">

        <h2 className="text-5xl font-bold text-yellow-400 mb-10">
          Skills
        </h2>

        <div className="grid md:grid-cols-4 gap-6">

          {[
            "Java",
            "Python",
            "JavaScript",
            "React",
            "Node.js",
            "Express.js",
            "MongoDB",
            "Machine Learning",
          ].map((skill) => (
            <div
              key={skill}
              className="bg-[#111] border border-yellow-500/20 p-6 rounded-xl text-center"
            >
              {skill}
            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;