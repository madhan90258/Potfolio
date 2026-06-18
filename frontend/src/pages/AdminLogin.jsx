import { useState } from "react";
import {
  FaUserShield,
  FaEye,
  FaEyeSlash,
  FaArrowLeft,
} from "react-icons/fa";

function AdminLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();

    if (
      email === "admin@madhan.com" &&
      password === "admin123"
    ) {
      localStorage.setItem("admin", "true");
      window.location.href = "/admin/dashboard";
    } else {
      alert("Invalid Email or Password");
    }
  };

  return (
    <section
      className="
        min-h-screen
        bg-black
        flex
        items-center
        justify-center
        px-6
      "
    >
      <div
        className="
          relative
          w-full
          max-w-xl
          min-h-[380px]
          bg-gradient-to-br
          from-[#111111]
          to-[#0a0a0a]
          border
          border-yellow-500/20
          rounded-3xl
          p-8
          shadow-[0_0_35px_rgba(255,215,0,0.15)]
        "
      >
        {/* Floating Icon */}
        <div className="absolute left-1/2 -translate-x-1/2 -top-24">
          <div
            className="
              w-20
              h-20
              rounded-full
              bg-yellow-500/10
              border
              border-yellow-500/20
              flex
              items-center
              justify-center
            "
          >
            <FaUserShield className="text-yellow-400 text-4xl" />
          </div>
        </div>

        {/* Heading */}
        <div className="text-center mt-10 mb-8">
          <h1 className="text-6xl font-bold text-yellow-400">
            Admin Login
          </h1>

          <p className="text-gray-400 text-xl mt-2">
            Authorized Access Only
          </p>
        </div>

        {/* Form */}
        <form
  onSubmit={handleLogin}
  className="
    mt-4
    h-[240px]
    flex
    flex-col
    justify-evenly
    items-center
  "
>
          {/* Email */}
          <input
            type="email"
            placeholder="  Admin Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="
              w-full
              max-w-lg
              h-14
              px-5
              bg-black
              border
              border-yellow-500/20
              rounded-xl
              text-white
              outline-none
              focus:border-yellow-400
              transition-all
            "
          />

          {/* Password */}
          <div className="relative w-full max-w-lg">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="  Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
                w-full
                h-14
                px-5
                pr-14
                bg-black
                border
                border-yellow-500/20
                rounded-xl
                text-white
                outline-none
                focus:border-yellow-400
                transition-all
              "
            />

            <button
              type="button"
              onClick={() =>
                setShowPassword(!showPassword)
              }
              className="
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                text-yellow-400
              "
            >
              {showPassword ? (
                <FaEyeSlash />
              ) : (
                <FaEye />
              )}
            </button>
          </div>

          {/* Login Button */}
          <button
            type="submit"   
            className="
              w-40
              h-14
              bg-yellow-400
              text-black
              rounded-xl
              font-bold
              text-lg
              hover:bg-yellow-300
              hover:scale-105
              transition-all
              duration-300
              shadow-lg
              shadow-yellow-500/20
            "
          >
            Login
          </button>

          {/* Back Button */}
          <a
            href="/"
            className="
              flex
              items-center
              justify-center
              gap-2
              text-gray-400
              hover:text-yellow-400
              transition-all
              duration-300
              text-lg
            "
          >
            <FaArrowLeft />
            Back To Portfolio
          </a>
        </form>
      </div>
    </section>
  );
}

export default AdminLogin;