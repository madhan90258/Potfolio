function Hero() {
  return (
    <section className="min-h-screen bg-black text-white flex items-center pt-20">

      <div className="max-w-7xl mx-auto px-16 grid md:grid-cols-2 gap-20 items-center">

        {/* Left Side */}

        <div className="translate-x-20">

          <p className="text-yellow-400 uppercase tracking-[5px] mb-4">
            Full Stack Developer
          </p>

          <h1 className="text-6xl md:text-7xl font-bold leading-tight">
            Madhan
            <span className="text-yellow-400"> Raj</span>
          </h1>

          <h2 className="text-2xl text-gray-300 mt-4">
            MERN Stack Developer & Machine Learning Enthusiast
          </h2>

          <p className="text-gray-400 mt-8 max-w-xl leading-relaxed">
            Computer Science Engineering student passionate about
            Full Stack Development, Machine Learning, REST APIs,
            and building scalable applications.
          </p>

        </div>

        {/* Right Side */}

        <div className="flex justify-center">

          <div className="relative">

            {/* Glow Effect */}
            <div className="absolute inset-0 bg-yellow-400 blur-3xl opacity-20 rounded-full"></div>

            {/* Profile Card */}
            <div className="relative w-80 h-80 bg-[#111111] border-2 border-yellow-400 rounded-3xl flex items-center justify-center shadow-xl shadow-yellow-500/20">

              <h1 className="text-8xl font-bold text-yellow-400">
                MR
              </h1>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Hero;