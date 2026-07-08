import { motion } from "framer-motion";

import {
  FaJava,
  FaReact,
  FaPython,
  FaDocker,
  FaAws,
} from "react-icons/fa";

import {
  SiSpringboot,
  SiAngular,
  SiJavascript,
} from "react-icons/si";

import { VscAzure } from "react-icons/vsc";

const skills = [
  {
    name: "Java",
    icon: <FaJava className="text-orange-500 text-5xl" />,
    percentage: 92,
  },
  {
    name: "Spring Boot",
    icon: <SiSpringboot className="text-green-500 text-5xl" />,
    percentage: 90,
  },
  {
    name: "React",
    icon: <FaReact className="text-cyan-400 text-5xl" />,
    percentage: 90,
  },
  {
    name: "Angular",
    icon: <SiAngular className="text-red-500 text-5xl" />,
    percentage: 82,
  },
  {
    name: "Python",
    icon: <FaPython className="text-yellow-400 text-5xl" />,
    percentage: 80,
  },
  {
    name: "JavaScript",
    icon: <SiJavascript className="text-yellow-300 text-5xl" />,
    percentage: 88,
  },
  {
    name: "Docker",
    icon: <FaDocker className="text-blue-400 text-5xl" />,
    percentage: 82,
  },
  {
    name: "AWS",
    icon: <FaAws className="text-orange-400 text-5xl" />,
    percentage: 78,
  },
  {
    name: "Azure",
    icon: <VscAzure className="text-blue-500 text-5xl" />,
    percentage: 75,
  },
];

function Skills() {
  return (
    <section
      id="skills"
      className="bg-slate-900 py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .7 }}
          viewport={{ once: true }}
          className="text-center"
        >

          <h2 className="text-5xl font-bold">

            Technical

            <span className="text-blue-500">
              {" "}Skills
            </span>

          </h2>

          <p className="text-slate-400 mt-5">

            Technologies I use to build scalable applications

          </p>

        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-20">

          {skills.map((skill, index) => (

            <motion.div

              key={index}

              initial={{ opacity: 0, y: 40 }}

              whileInView={{ opacity: 1, y: 0 }}

              transition={{
                duration: .5,
                delay: index * .08,
              }}

              viewport={{ once: true }}

              whileHover={{
                y: -10,
                scale: 1.03,
              }}

              className="bg-slate-950 rounded-2xl p-8 shadow-xl border border-slate-800"
            >

              <div className="flex justify-center">

                {skill.icon}

              </div>

              <h3 className="text-center text-2xl font-bold mt-5">

                {skill.name}

              </h3>

              <div className="mt-8">

                <div className="flex justify-between">

                  <span>Proficiency</span>

                  <span>{skill.percentage}%</span>

                </div>

                <div className="w-full h-3 bg-slate-700 rounded-full mt-3">

                  <motion.div

                    initial={{ width: 0 }}

                    whileInView={{
                      width: `${skill.percentage}%`,
                    }}

                    transition={{
                      duration: 1.2,
                    }}

                    viewport={{ once: true }}

                    className="h-3 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400"

                  />

                </div>

              </div>

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;