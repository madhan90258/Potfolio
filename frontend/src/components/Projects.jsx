import crmImage from "../assets/projects/crm.png";
import fingerImage from "../assets/projects/finger-count.png";
import gestureImage from "../assets/projects/gesture.png";
import petImage from "../assets/projects/pet-classifier.png";

function Projects() {
  const projects = [
    {
      title: "CRM Application",
      description:
        "Full Stack CRM system with authentication, customer management, dashboard analytics and database integration.",
      tech: ["React", "Node.js", "PostgreSQL"],
      image: crmImage,
    },
    {
      title: "Live Finger Counting System",
      description:
        "Real-time finger counting system using Computer Vision, OpenCV and MediaPipe.",
      tech: ["Python", "OpenCV", "MediaPipe"],
      image: fingerImage,
    },
    {
      title: "Hand Gesture Recognition",
      description:
        "Machine Learning application that detects and recognizes hand gestures in real time.",
      tech: ["Python", "TensorFlow", "OpenCV"],
      image: gestureImage,
    },
    {
      title: "Pet Image Classifier",
      description:
        "Deep Learning project that classifies pet images using CNN and TensorFlow.",
      tech: ["Python", "TensorFlow", "CNN"],
      image: petImage,
    },
  ];

  return (
    <section
      id="projects"
      className="min-h-screen bg-black text-white py-20 px-6 lg:px-20 scroll-mt-28"
    >
      <div className="max-w-6xl mx-auto translate-x-15">

        {/* Section Header */}
        <p className="text-white uppercase tracking-[4px] text-sm mb-4">
          My Projects
        </p>

        <div className="flex justify-between items-center mb-12">

          <h2 className="text-5xl lg:text-6xl font-bold text-yellow-400">
            Featured Projects
          </h2>

          <button
            className="
              border
              border-yellow-400
              px-6
              py-3
              rounded-xl
              text-yellow-400
              hover:bg-yellow-400
              hover:text-black
              transition-all
              duration-300
            "
          >
            View All Projects
          </button>

        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {projects.map((project, index) => (
            <div
              key={index}
              className="
                bg-[#111111]
                border
                border-yellow-500/10
                rounded-2xl
                overflow-hidden
                hover:border-yellow-400/40
                hover:-translate-y-2
                hover:shadow-lg
                hover:shadow-yellow-500/20
                transition-all
                duration-300
              "
            >

              {/* Project Image */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />

              {/* Project Details */}
              <div className="p-5">

                <h3 className="text-xl font-bold mb-3">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed mb-5">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2">

                  {project.tech.map((tech, idx) => (
                    <span
                      key={idx}
                      className="
                        px-3
                        py-1
                        text-xs
                        bg-yellow-500/10
                        border
                        border-yellow-400/20
                        text-yellow-400
                        rounded-lg
                      "
                    >
                      {tech}
                    </span>
                  ))}

                </div>

              </div>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;