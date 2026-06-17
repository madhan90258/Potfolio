function Projects() {
  return (
    <section
      id="projects"
      className="min-h-screen pt-24 bg-black text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-10">

        <h2 className="text-5xl font-bold text-yellow-400 mb-10">
          Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-[#111] p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              CRM Application
            </h3>
          </div>

          <div className="bg-[#111] p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              Hand Gesture Recognition
            </h3>
          </div>

          <div className="bg-[#111] p-6 rounded-xl">
            <h3 className="text-2xl font-bold mb-4">
              Live Finger Counting
            </h3>
          </div>

        </div>

      </div>
    </section>
  );
}

export default Projects;