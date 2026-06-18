function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-20 bg-black/95 backdrop-blur-md border-b border-yellow-500/20 z-50">
      
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center">
          <a href="#hero">
            <h1 className="text-3xl font-bold tracking-wider text-yellow-400 hover:text-yellow-300 transition duration-300">
              MADHAN RAJ
            </h1>
          </a>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center gap-10 text-white font-medium text-lg">

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
              href="#experience"
              className="hover:text-yellow-400 transition duration-300"
            >
              Experience
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

        {/* Admin Login Button */}
<div>
  <a href="/admin/login">
    <button
      className="
        bg-yellow-400
        text-black
        px-5
        py-2.5
        rounded-lg
        font-semibold
        hover:bg-yellow-300
        hover:scale-105
        transition-all
        duration-300
        shadow-lg
        shadow-yellow-500/20
      "
    >
      Admin Login
    </button>
  </a>
</div>
      </div>

    </nav>
  );
}

export default Navbar;