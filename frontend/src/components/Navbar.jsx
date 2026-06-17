function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-black/95 backdrop-blur-md border-b border-yellow-500/20 z-50">

      <div className="max-w-7xl mx-auto h-full px-10 grid grid-cols-3 items-center">

        {/* Logo */}
        <div className="flex justify-start items-center">
          <h1 className="text-3xl font-bold tracking-wider text-yellow-400 cursor-pointer">
            MADHAN RAJ
          </h1>
        </div>

        {/* Navigation */}
        <ul className="flex justify-center items-center gap-12 text-white font-medium text-lg">

          <li>
            <a
              href="#about"
              className="hover:text-yellow-400 transition duration-300"
            >
              About
            </a>
          </li>

          <li>
            <a
              href="#skills"
              className="hover:text-yellow-400 transition duration-300"
            >
              Skills
            </a>
          </li>

          <li>
            <a
              href="#projects"
              className="hover:text-yellow-400 transition duration-300"
            >
              Projects
            </a>
          </li>

          <li>
            <a
              href="#contact"
              className="hover:text-yellow-400 transition duration-300"
            >
              Contact
            </a>
          </li>

        </ul>

        {/* Login */}
        <div className="flex justify-end">
          <button className="bg-yellow-400 text-black px-5 py-2 rounded-lg font-semibold hover:bg-yellow-300 transition duration-300 shadow-lg shadow-yellow-500/20">
            Admin Login
          </button>
        </div>

      </div>

    </nav>
  );
}

export default Navbar;