import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

function Contact() {
  return (
    <section
  id="contact"
  className="min-h-screen bg-black text-white pt-16 px-6 lg:px-20 scroll-mt-20"
>
      <div className="max-w-6xl mx-auto w-full translate-x-15">

        <div className="translate-x-15">

          {/* Heading */}
          <p className="text-white uppercase tracking-[4px] text-sm mb-3">
            Contact Me
          </p>

          <h2 className="text-5xl lg:text-6xl font-bold text-yellow-400 mb-16">
            Get In Touch
          </h2>

          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* LEFT SIDE */}
            <div
              className="
                bg-[#111111]
                border border-yellow-500/10
                rounded-3xl
                p-10
                hover:border-yellow-400/30
                transition-all
                duration-300
              "
            >
              <h3 className="text-4xl font-bold mb-6">
                Let's Connect
              </h3>

              <p className="text-gray-400 text-lg leading-relaxed mb-12">
                Have a project idea, internship opportunity, or want to
                collaborate? Feel free to send me a message.
              </p>

              {/* Email */}
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 min-w-[64px] rounded-xl bg-yellow-500/10 flex items-center justify-center">
                  <FaEnvelope className="text-yellow-400 text-2xl" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Email
                  </p>

                  <h4 className="text-xl font-medium">
                    madhan90258@gmail.com
                  </h4>
                </div>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-6 mb-10">
                <div className="w-16 h-16 min-w-[64px] rounded-xl bg-yellow-500/10 flex items-center justify-center">
                  <FaPhoneAlt className="text-yellow-400 text-2xl" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Phone
                  </p>

                  <h4 className="text-xl font-medium">
                    +91 90258 72161
                  </h4>
                </div>
              </div>

              {/* Location */}
              <div className="flex items-center gap-6">
                <div className="w-16 h-16 min-w-[64px] rounded-xl bg-yellow-500/10 flex items-center justify-center">
                  <FaMapMarkerAlt className="text-yellow-400 text-2xl" />
                </div>

                <div>
                  <p className="text-gray-500 text-sm">
                    Location
                  </p>

                  <h4 className="text-xl font-medium">
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
                p-10
                hover:border-yellow-400/30
                transition-all
                duration-300
              "
            >
              <div className="text-center">
  <p className="text-4xl font-bold">
    MESSAGE
  </p>
</div>
              <form className="space-y-6">

                <div className="grid md:grid-cols-2 gap-5">

                  <input
                    type="text"
                    placeholder="Your Name"
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

                  <input
                    type="email"
                    placeholder="Your Email"
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
                  rows="8"
                  placeholder="Your Message"
                  className="
                    w-full
                    bg-black
                    border border-yellow-500/20
                    rounded-xl
                    px-5
                    py-4
                    resize-none
                    outline-none
                    focus:border-yellow-400
                  "
                ></textarea>

                <button
                  type="submit"
                  className="
                    w-full
                    bg-yellow-400
                    text-black
                    font-bold
                    py-4
                    rounded-xl
                    hover:bg-yellow-300
                    hover:scale-[1.02]
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

      </div>
    </section>
  );
}

export default Contact;