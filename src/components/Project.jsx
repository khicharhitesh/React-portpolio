import React, { useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";

const projects = [
  {
    title: "Typing Master",
    description: "Interactive typing speed app built with HTML, CSS, and JavaScript.",
    image: "https://cdn.pixabay.com/photo/2016/11/20/09/06/laptop-1842297_1280.jpg",
    demoLink: "https://typing-master-pearl.vercel.app/",
    codeLink: "https://github.com/khicharhitesh/Typing-master",
  },
  {
    title: "Find Country",
    description: "Simple React app to search for countries using REST API.",
    image: "https://images.pexels.com/photos/335393/pexels-photo-335393.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoLink: "https://country-project-alpha.vercel.app/",
    codeLink: "https://github.com/khicharhitesh/country-project",
  },
  {
    title: "Travel Website",
    description: "Explore destinations, book trips, and discover travel guides online.",
    image: "https://images.pexels.com/photos/996954/pexels-photo-996954.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
    demoLink: "https://travel-website-chi-nine.vercel.app/",
    codeLink: "https://github.com/khicharhitesh/travel-website",
  },
  {
    title: "Login and Sign up (React)",
    description: "Authentication UI with React, including login and sign up forms.",
    image: "https://imgs.search.brave.com/_gvuQsNV2RGS5PzzphvslZdUafwFifr3XVbDIUT_zGM/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4y/LnZlY3RvcnN0b2Nr/LmNvbS9pLzEwMDB4/MTAwMC81MS82MS8z/ZC13ZWItY29tcHV0/ZXItYW5kLWFjY291/bnQtbG9naW4tcGFz/c3dvcmQtdmVjdG9y/LTM4MDU1MTYxLmpw/Zw",
    demoLink: "https://login-signup-react-taupe.vercel.app/",
    codeLink: "https://github.com/khicharhitesh/login-signup-react",
  },
];

export default function Project() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="min-h-screen bg-[#f5f6f8] text-white py-14 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto md:my-20">
        <h1
          className="text-3xl sm:text-4xl font-bold text-center text-lime-500 mb-10 m-[30px]"
          data-aos="fade-down"
        >
          My Projects
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-8">
          {projects.map((project) => (
            <div
              key={project.title}
              className="bg-[#1e293b] rounded-xl overflow-hidden shadow-md hover:shadow-xl transition duration-300 max-w-xs mx-auto"
              data-aos="fade-up"
            >
              <div className="aspect-[4/3] w-full overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
              <div className="p-3 space-y-2">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="text-gray-400 text-sm">{project.description}</p>
                <div className="flex flex-wrap gap-4 pt-2 text-sm">
                  <a
                    href={project.demoLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-blue-400 hover:text-blue-300"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Live Demo
                  </a>
                  <a
                    href={project.codeLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center text-lime-400 hover:text-lime-300"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Source Code
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
