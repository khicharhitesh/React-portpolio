// import React, { useState } from "react";
// import { Link, useLocation } from "react-router-dom";

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const location = useLocation();

//   // Close menu automatically on route change
//   React.useEffect(() => {
//     setIsOpen(false);
//   }, [location]);

//   const toggleMenu = () => setIsOpen((prev) => !prev);

//   return (
//     <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4">
//       <div className="flex justify-between items-center">
//         <Link className="text-2xl font-bold text-lime-500" to={"/"}>
//           Hitesh
//         </Link>

//         {/* Desktop Menu */}
//         <ul className="hidden md:flex space-x-6 font-medium text-black">
//           <li><Link to="/">Home</Link></li>
//           <li><Link to="/about">About</Link></li>
//           <li><Link to="/skills">Skills</Link></li>
//           <li><Link to="/projects">Projects</Link></li>
//           <li><Link to="/contact">Contact</Link></li>
//         </ul>

//         {/* Mobile Hamburger Button */}
//         <button
//           className="md:hidden text-black focus:outline-none z-50"
//           onClick={toggleMenu}
//         >
//           <svg
//             className="w-6 h-6"
//             fill="none"
//             stroke="currentColor"
//             viewBox="0 0 24 24"
//             xmlns="http://www.w3.org/2000/svg"
//           >
//             {isOpen ? (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M6 18L18 6M6 6l12 12"
//               />
//             ) : (
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth={2}
//                 d="M4 6h16M4 12h16M4 18h16"
//               />
//             )}
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden transition-all duration-300 ${
//           isOpen ? "block" : "hidden"
//         }`}
//       >
//         <ul className="mt-4 space-y-4 font-medium text-black">
//           <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
//           <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
//           <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
//           <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
//           <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
//         </ul>
//       </div>
//     </nav>
//   );
// };

// export default Navbar;



import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  // Auto-close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => setIsOpen((prev) => !prev);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white shadow-md z-50 px-6 py-4">
      <div className="flex justify-between items-center">
        <Link className="text-2xl font-bold text-lime-500" to={"/"}>
          Hitesh
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-medium text-black">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/skills">Skills</Link></li>
          <li><Link to="/projects">Projects</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden text-black focus:outline-none z-50"
          onClick={toggleMenu}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            {isOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden ${isOpen ? "block" : "hidden"}`}>
        <ul className="mt-4 space-y-4 font-medium text-black">
          <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
          <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
          <li><Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link></li>
          <li><Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link></li>
          <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
