import { motion } from "framer-motion";
import {
  FaJava,
  FaReact,
  FaDocker,
  FaPython,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiAngular,
} from "react-icons/si";

import { VscAzure } from "react-icons/vsc";
import profileImage1 from "../assets/profile1.jpg";
function About() {
  return (
    <section
      id="about"
      className="bg-slate-950 py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-5xl font-bold">

            About

            <span className="text-blue-500">
              {" "}Me
            </span>

          </h2>

          <p className="text-slate-400 mt-5 max-w-3xl mx-auto">
            Passionate Full Stack Developer focused on building scalable,
            secure and modern enterprise applications.
            I enjoy learning new technologies and solving real-world
            business problems.
          </p>

        </motion.div>

        {/* Content */}

        <div className="grid lg:grid-cols-2 gap-16 mt-20 items-center">

          {/* Image */}

          <motion.div

            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}

            className="flex justify-center"
          >

            <img
              src={profileImage1}
              alt="Developer"
              className="rounded-3xl shadow-2xl border border-slate-800"
            />

          </motion.div>

          {/* Right */}

          <motion.div

            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: .8 }}
            viewport={{ once: true }}

          >

            <h3 className="text-3xl font-bold">

              Full Stack Developer

            </h3>

            <p className="mt-6 text-slate-300 leading-8">

              I build enterprise web applications using Java,
              Spring Boot, React, Angular and Python.

              I have experience working with cloud platforms like
              AWS & Azure and containerization using Docker.

              My goal is to design secure, scalable and
              high-performance applications that deliver excellent
              user experiences.

            </p>

            {/* Cards */}

            <div className="grid grid-cols-2 gap-5 mt-10">

              <div className="bg-slate-900 rounded-xl p-6">

                <h4 className="text-4xl font-bold text-blue-500">

                  15+

                </h4>

                <p className="mt-2">

                  Technologies

                </p>

              </div>

              <div className="bg-slate-900 rounded-xl p-6">

                <h4 className="text-4xl font-bold text-blue-500">

                  10+

                </h4>

                <p className="mt-2">

                  Projects

                </p>

              </div>

              <div className="bg-slate-900 rounded-xl p-6">

                <h4 className="text-4xl font-bold text-blue-500">

                  Full Stack

                </h4>

                <p className="mt-2">

                  Development

                </p>

              </div>

              <div className="bg-slate-900 rounded-xl p-6">

                <h4 className="text-4xl font-bold text-blue-500">

                  Cloud

                </h4>

                <p className="mt-2">

                  AWS • Azure

                </p>

              </div>

            </div>

            {/* Tech Icons */}

            <div className="flex flex-wrap gap-5 mt-10 text-4xl">

              <FaJava className="text-orange-500" />

              <FaReact className="text-cyan-400" />

              <SiAngular className="text-red-500" />

              <SiSpringboot className="text-green-500" />

              <FaPython className="text-yellow-400" />

              <FaDocker className="text-blue-400" />

              <VscAzure className="text-blue-500" />

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}

export default About;