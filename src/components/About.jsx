import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <motion.div
      className="pt-20 px-6 min-h-screen bg-white"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-lime-500 mb-6">About Me</h1>
        <p className="text-lg text-green-500 leading-relaxed max-w-3xl mx-auto">
          I am a passionate <span className="text-lime-500 font-semibold">Full-Stack Developer</span> with experience in both front-end and back-end development.
          I specialize in creating modern, user-friendly web applications using <span className="text-black font-medium">React</span>, <span className="text-black font-medium">Node.js</span>, and more.
        </p>

        <div className="mt-12 grid gap-6 md:grid-cols-3">
          <motion.div className="bg-gray-100 p-6 rounded-xl shadow-md" whileHover={{ scale: 1.05 }}>
            <h2 className="text-xl font-semibold text-lime-500 mb-3">Proficient In</h2>
            <p className="text-green-600">
              React, JavaScript, Node.js, Express.js, MongoDB, HTML, CSS, Tailwind CSS.
            </p>
          </motion.div>

          <motion.div className="bg-gray-100 p-6 rounded-xl shadow-md" whileHover={{ scale: 1.05 }}>
            <h2 className="text-xl font-semibold text-lime-500 mb-3">Experience</h2>
            <p className="text-green-600">
              Completed a <span className="text-lime-500 font-semibold">3-month internship</span> at <span className="text-black font-semibold">Kodu Sikar</span>.
              <br /><br />
              Currently a <span className="text-lime-500 font-semibold">Full-Stack Developer Intern</span> at <span className="text-black font-semibold">Delaine Technologies Pvt. Ltd</span> since <span className="text-black font-medium">May 2025</span>.
            </p>
          </motion.div>

          <motion.div className="bg-gray-100 p-6 rounded-xl shadow-md" whileHover={{ scale: 1.05 }}>
            <h2 className="text-xl font-semibold text-lime-500 mb-3">Hobbies</h2>
            <p className="text-green-600">
              Exploring new technologies, solving coding challenges, and sharing knowledge through mentoring.
            </p>
          </motion.div>
        </div>

        <button className="mt-8 px-6 py-3 bg-lime-500 text-black font-semibold rounded-lg shadow-md hover:bg-lime-600 transition">
          Download CV
        </button>
      </div>
    </motion.div>
  );
};

export default About;

