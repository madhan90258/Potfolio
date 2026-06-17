import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
      id="contact"
      className="bg-black text-white py-16 px-6 lg:px-20 scroll-mt-28"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <p className="text-white uppercase tracking-[4px] text-sm mb-4">
          Contact Me
        </p>

        <h2 className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-12">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT SIDE */}
          <div
            className="
              bg-[#111111]
              border border-yellow-500/10
              rounded-3xl
              p-8
            "
          >
            <h3 className="text-2xl font-bold mb-6">
              Let's Connect
            </h3>

            <p className="text-gray-400 leading-relaxed mb-10">
              Have a project in mind, internship opportunity,
              or want to collaborate? Feel free to send me a
              message. I'll get back to you as soon as possible.
            </p>

            {/* Email */}
            <div className="flex items-center gap-5 mb-8">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                <FaEnvelope className="text-yellow-400 text-xl" />
              </div>

              <div>
                <p className="text-gray-500 text-sm">Email</p>
                <h4 className="text-lg">
                  madhan90258@gmail.com
                </h4>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-5 mb-8">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                <FaPhoneAlt className="text-yellow-400 text-xl" />
              </div>

              <div>
                <p className="text-gray-500 text-sm">Phone</p>
                <h4 className="text-lg">
                  +91 9025872161
                </h4>
              </div>
            </div>

            {/* Location */}
            <div className="flex items-center gap-5">
              <div className="w-12 h-12 rounded-xl bg-yellow-500/10 flex items-center justify-center">
                <FaMapMarkerAlt className="text-yellow-400 text-xl" />
              </div>

              <div>
                <p className="text-gray-500 text-sm">Location</p>
                <h4 className="text-lg">
                  Chennai, Tamil Nadu, India
                </h4>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE FORM */}
          <div
            className="
              bg-[#111111]
              border border-yellow-500/10
              rounded-3xl
              p-8
            "
          >

            <form className="space-y-5">

              <div className="grid md:grid-cols-2 gap-5">

                <input
                  type="text"
                  placeholder="Your Name"
                  className="
                    bg-black
                    border border-yellow-500/20
                    rounded-xl
                    px-5
                    py-4
                    outline-none
                    focus:border-yellow-400
                  "
                />

                <input
                  type="email"
                  placeholder="Your Email"
                  className="
                    bg-black
                    border border-yellow-500/20
                    rounded-xl
                    px-5
                    py-4
                    outline-none
                    focus:border-yellow-400
                  "
                />

              </div>

              <input
                type="text"
                placeholder="Subject"
                className="
                  w-full
                  bg-black
                  border border-yellow-500/20
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  focus:border-yellow-400
                "
              />

              <textarea
                rows="6"
                placeholder="Your Message"
                className="
                  w-full
                  bg-black
                  border border-yellow-500/20
                  rounded-xl
                  px-5
                  py-4
                  outline-none
                  resize-none
                  focus:border-yellow-400
                "
              ></textarea>

              <button
                type="submit"
                className="
                  w-full
                  bg-yellow-400
                  text-black
                  font-semibold
                  py-4
                  rounded-xl
                  hover:bg-yellow-300
                  transition-all
                  duration-300
                  shadow-lg
                  shadow-yellow-500/20
                "
              >
                Send Message
              </button>

            </form>

          </div>

        </div>

      </div>
    </section>
  );
}

export default Contact;