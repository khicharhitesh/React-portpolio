export default function Contact() {
  return (
    <section className="min-h-screen bg-white text-black px-6 py-16">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-lime-500 mb-8">Contact Me</h2>
        <p className="text-green-400 mb-6">
          I'd love to hear from you. Let's get in touch!
        </p>

        <form className="grid gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-4 border border-lime-500 rounded-lg"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-4 border border-lime-500 rounded-lg"
          />
          <textarea
            placeholder="Your Message"
            rows="5"
            className="p-4 border border-lime-500 rounded-lg"
          ></textarea>
          <button
            type="submit"
            className="bg-lime-500 hover:bg-lime-600 text-black py-3 px-6 font-semibold rounded-lg transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
