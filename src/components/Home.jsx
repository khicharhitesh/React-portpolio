import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import profile from "../assets/profilepicture.jpg";

export default function HomePage() {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    AOS.init();
  }, []);

  const handleHireMeClick = () => {
    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 3000); // Auto-close after 3s
  };

  return (
    <>
     
      <section
        id="home"
        className="pt-20 min-h-screen bg-white flex items-center justify-center px-6 text-black"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-10 sm:gap-12 items-center m-[40px]">
          {/* Profile Image */}
          <div
            className="w-full md:w-1/2 flex justify-center m-[50px]"
            data-aos="fade-right"
            data-aos-duration="1200"
          >
            <img
              src={profile}
              alt="Hitesh"
              className="rounded-2xl shadow-xl w-52 h-52 sm:w-64 sm:h-64 md:w-80 md:h-80 object-cover border-4 border-lime-500 transition-transform duration-300 hover:scale-105"
            />
          </div>

          {/* Text Content */}
          <div className="w-full md:w-1/2 space-y-6 text-center md:text-left px-2 sm:px-0">
            <h1
              className="text-3xl sm:text-4xl md:text-5xl font-mono font-bold tracking-tight text-lime-500"
              data-aos="fade-left"
              data-aos-delay="400"
            >
              Hello, I'm <span className="text-black">Hitesh</span>
            </h1>

            <p
              className="text-base sm:text-lg font-light leading-relaxed text-green-400"
              data-aos="fade-up"
              data-aos-delay="800"
            >
              Full-Stack & MERN Stack Developer passionate about crafting
              interactive, responsive user interfaces and robust backend
              systems. Always curious, always building. Explore my projects and
              let's connect!
            </p>

            {/* Social Links */}
            <div
              className="flex gap-4 sm:gap-5 justify-center md:justify-start text-xl text-black"
              data-aos="zoom-in-up"
              data-aos-delay="1200"
            >
              <SocialLink href="https://github.com/" icon="fa-github" />
              <SocialLink
                href="https://instagram.com/hitesh_chaudhary__2157/"
                icon="fa-instagram"
              />
              <SocialLink
                href="https://linkedin.com/in/hitesh-khichar-35b310333/"
                icon="fa-linkedin"
              />
              <SocialLink href="https://x.com/hit3084" icon="fa-twitter" />
            </div>

            {/* Hire Me Button */}
            <div data-aos="fade-up" data-aos-delay="1600">
              <button
                onClick={handleHireMeClick}
                className="mt-4 px-6 py-3 bg-lime-500 hover:bg-lime-600 text-black font-semibold rounded-lg transition duration-300 w-full sm:w-auto"
              >
                Hire Me
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Responsive Popup */}
      {showPopup && (
        <div className="fixed bottom-5 left-1/2 transform -translate-x-1/2 bg-lime-500 text-white px-6 py-3 rounded-lg shadow-md z-50 text-center text-sm sm:text-base">
          Thank you for your interest!
        </div>
      )}
    </>
  );
}

function SocialLink({ href, icon }) {
  return (
    <a
      href={href}
      className="hover:text-lime-500 transition duration-300"
      target="_blank"
      rel="noopener noreferrer"
    >
      <i className={`fa-brands ${icon}`}></i>
    </a>
  );
}
