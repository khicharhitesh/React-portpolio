import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setIsOpen(false); // Close the menu on route change
  }, [location]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <motion.div
        className={`relative flex flex-col items-center justify-start transition-all duration-500 ease-in-out ${
          isOpen ? "w-96 h-80" : "w-32 h-20"
        } bg-white rounded-full shadow-xl overflow-hidden`}
        animate={{ borderRadius: isOpen ? "2rem" : "9999px" }}
      >
        {/* Toggle Button */}
        <button
          onClick={toggleMenu}
          className="w-12 h-12 mt-4 rounded-full bg-lime-500 text-white text-xl font-bold flex items-center justify-center z-50"
        >
          {isOpen ? "X" : "≡"}
        </button>

        {/* Menu Items */}
        <AnimatePresence>
          {isOpen && (
            <motion.ul
              className="mt-8 flex flex-col items-center gap-5 text-black font-semibold text-lg"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              <li>
                <Link to="/" onClick={() => setIsOpen(false)}>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" onClick={() => setIsOpen(false)}>
                  About
                </Link>
              </li>
              <li>
                <Link to="/skills" onClick={() => setIsOpen(false)}>
                  Skills
                </Link>
              </li>
              <li>
                <Link to="/projects" onClick={() => setIsOpen(false)}>
                  Projects
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setIsOpen(false)}>
                  Contact
                </Link>
              </li>
            </motion.ul>
          )}
        </AnimatePresence>
      </motion.div>
    </nav>
  );
};

export default Navbar;
