import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";
import { motion } from "framer-motion";

function Footer() {
  return (
    <footer className="bg-black border-t border-slate-800">

      {/* Main Footer */}

      <div className="max-w-7xl mx-auto px-8 py-16">

        <div className="grid md:grid-cols-3 gap-12">

          {/* Left */}

          <div>

            <motion.h2
              whileHover={{ scale: 1.05 }}
              className="text-3xl font-bold text-blue-500"
            >
              Kareemulla
            </motion.h2>

            <p className="mt-5 text-slate-400 leading-8">

              Full Stack Developer passionate about building
              scalable enterprise applications using Java,
              Spring Boot, React, Angular, Docker and Cloud
              technologies.

            </p>

          </div>

          {/* Middle */}

          <div>

            <h3 className="text-xl font-semibold mb-5">

              Quick Links

            </h3>

            <div className="flex flex-col gap-3">

              <Link
                to="home"
                smooth
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition"
              >
                Home
              </Link>

              <Link
                to="about"
                smooth
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition"
              >
                About
              </Link>

              <Link
                to="skills"
                smooth
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition"
              >
                Skills
              </Link>

              <Link
                to="projects"
                smooth
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition"
              >
                Projects
              </Link>

              <Link
                to="contact"
                smooth
                duration={500}
                className="cursor-pointer hover:text-blue-500 transition"
              >
                Contact
              </Link>

            </div>

          </div>

          {/* Right */}

          <div>

            <h3 className="text-xl font-semibold mb-5">

              Connect

            </h3>

            <div className="flex gap-5 text-3xl">

              <a
                href="https://github.com/kareemsheik"
                target="_blank"
                rel="noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaGithub />
              </a>

              <a
                href="https://www.linkedin.com/in/kareemulla-sheik-687350275"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-blue-500 transition"
              >
                <FaLinkedin />
              </a>

            </div>

            <div className="mt-8">

              <button
                className="bg-blue-600 hover:bg-blue-500 p-4 rounded-full transition"
                onClick={() =>
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  })
                }
              >
                <FaArrowUp />
              </button>

            </div>

          </div>

        </div>

      </div>

      {/* Bottom */}

      <div className="border-t border-slate-800">

        <div className="max-w-7xl mx-auto py-6 px-8 flex flex-col md:flex-row justify-between items-center">

          <p className="text-slate-500">

            © {new Date().getFullYear()} Kareemulla.
            All Rights Reserved.

          </p>

          <p className="text-slate-500 mt-3 md:mt-0">

            Built with ❤️ using React, Tailwind CSS &
            Framer Motion

          </p>

        </div>

      </div>

    </footer>
  );
}

export default Footer;