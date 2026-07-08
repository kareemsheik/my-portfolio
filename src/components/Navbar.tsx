import { useState } from "react";
import { Link } from "react-scroll";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion } from "framer-motion";

function Navbar() {
  const [open, setOpen] = useState(false);

  const menus = [
    "Home",
    "About",
    "Skills",
    "Timeline",
    "Projects",
    "Contact",
  ];

  return (
    <motion.nav
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.7 }}
      className="fixed top-0 left-0 w-full z-50 backdrop-blur-xl bg-slate-900/70 border-b border-slate-800"
    >
      <div className="max-w-7xl mx-auto px-8 h-20 flex justify-between items-center">

        {/* Logo */}

        <motion.h1
          whileHover={{ scale: 1.05 }}
          className="text-3xl font-bold cursor-pointer"
        >
          <span className="text-blue-500">&lt;</span>
          Kareem
          <span className="text-blue-500"> /&gt;</span>
        </motion.h1>

        {/* Desktop Menu */}

        <ul className="hidden lg:flex items-center gap-8">

          {menus.map((menu) => (

            <li key={menu}>

              <Link
                activeClass="text-blue-400"
                to={menu.toLowerCase()}
                spy={true}
                smooth={true}
                duration={500}
                offset={-70}
                className="cursor-pointer font-medium text-slate-300 hover:text-blue-400 transition-all duration-300"
              >
                {menu}
              </Link>

            </li>

          ))}

        </ul>

        {/* Resume Button */}

        <a
           href=".././Kareem_Resume.docx"
           download
          className="hidden lg:block px-5 py-2 rounded-full bg-blue-600 hover:bg-blue-500 transition font-semibold"
        >
          Resume
        </a>

        {/* Mobile Icon */}

        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden text-2xl"
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}

      {open && (

        <motion.div
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden bg-slate-900 border-t border-slate-800"
        >

          {menus.map((menu) => (

            <Link
              key={menu}
              to={menu.toLowerCase()}
              smooth={true}
              duration={500}
              offset={-70}
              onClick={() => setOpen(false)}
              className="block px-8 py-5 border-b border-slate-800 hover:bg-slate-800 cursor-pointer"
            >
              {menu}
            </Link>

          ))}

          <div className="p-6">

            <a
              href="#"
              className="block text-center bg-blue-600 rounded-lg py-3 font-semibold"
            >
              Download Resume
            </a>

          </div>

        </motion.div>

      )}

    </motion.nav>
  );
}

export default Navbar;