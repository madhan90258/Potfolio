import {
  SiPython,
  SiJavascript,
  SiReact,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiGit,
  SiGithub,
  SiTensorflow,
  SiHtml5,
} from "react-icons/si";

import {
  FaJava,
  FaDatabase,
} from "react-icons/fa";

function Skills() {
  const skills = [
    {
      name: "Python",
      category: "Programming",
      icon: <SiPython className="text-5xl text-yellow-400" />,
    },
    {
      name: "Java",
      category: "Programming",
      icon: <FaJava className="text-5xl text-orange-500" />,
    },
    {
      name: "HTML5",
      category: "Frontend",
      icon: <SiHtml5 className="text-5xl text-orange-500" />,
    },
    {
      name: "JavaScript",
      category: "Frontend",
      icon: <SiJavascript className="text-5xl text-yellow-400" />,
    },
    {
      name: "React.js",
      category: "Frontend",
      icon: <SiReact className="text-5xl text-cyan-400" />,
    },
    {
      name: "Node.js",
      category: "Backend",
      icon: <SiNodedotjs className="text-5xl text-green-500" />,
    },
    {
      name: "Express.js",
      category: "Backend",
      icon: <SiExpress className="text-5xl text-gray-300" />,
    },
    {
      name: "PostgreSQL",
      category: "Database",
      icon: <SiPostgresql className="text-5xl text-blue-500" />,
    },
    {
      name: "SQL",
      category: "Database",
      icon: <FaDatabase className="text-5xl text-green-400" />,
    },
    {
      name: "TensorFlow",
      category: "Machine Learning",
      icon: <SiTensorflow className="text-5xl text-orange-400" />,
    },
    {
      name: "Git",
      category: "Tools",
      icon: <SiGit className="text-5xl text-red-500" />,
    },
    {
      name: "GitHub",
      category: "Tools",
      icon: <SiGithub className="text-5xl text-white" />,
    },
  ];

  return (
    <section
  id="skills"
  className="min-h-screen bg-black text-white py-16 px-6 lg:px-20 scroll-mt-28"
>
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
       <p className="text-white uppercase tracking-[4px] text-sm mb-4">
  My Skills
</p>

        <h2 className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-12">
          Technical Skills
        </h2>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {skills.map((skill, index) => (
            <div
              key={index}
              className="
                bg-[#111111]
                border border-yellow-500/10
                rounded-2xl
                p-6
                flex flex-col
                items-center
                text-center
                hover:border-yellow-400/40
                hover:-translate-y-2
                hover:shadow-lg
                hover:shadow-yellow-500/20
                transition-all
                duration-300
              "
            >
              {skill.icon}

              <h3 className="mt-4 text-lg font-semibold">
                {skill.name}
              </h3>

              <p className="text-gray-400 text-xs mt-1">
                {skill.category}
              </p>

              <div className="w-full h-2 bg-gray-800 rounded-full mt-4">
                <div className="h-2 bg-yellow-400 rounded-full w-[85%]"></div>
              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;