function Contact() {
  return (
    <section
      id="contact"
      className="min-h-screen pt-24 bg-[#050505] text-white flex items-center"
    >
      <div className="max-w-7xl mx-auto px-10 w-full">

        <h2 className="text-5xl font-bold text-yellow-400 mb-10">
          Contact Me
        </h2>

        <form className="max-w-3xl space-y-6">

          <input
            type="text"
            placeholder="Your Name"
            className="w-full p-4 bg-[#111] rounded-xl border border-yellow-500/20"
          />

          <input
            type="email"
            placeholder="Your Email"
            className="w-full p-4 bg-[#111] rounded-xl border border-yellow-500/20"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
            className="w-full p-4 bg-[#111] rounded-xl border border-yellow-500/20"
          />

          <button className="bg-yellow-400 text-black px-8 py-3 rounded-lg font-bold">
            Send Message
          </button>

        </form>

      </div>
    </section>
  );
}

export default Contact;