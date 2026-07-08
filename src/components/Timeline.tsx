import { motion } from "framer-motion";
import {
  FaLaptopCode,
  FaReact,
  FaJava,
  FaDocker,
  FaCloud,
  FaRocket,
} from "react-icons/fa";

const timeline = [
  {
    year: "2022",
    title: "Started Programming",
    description:
      "Started learning programming fundamentals, JavaScript and web development.",
    icon: <FaLaptopCode />,
  },
  {
    year: "2023",
    title: "Frontend Development",
    description:
      "Built responsive applications using React, Angular, HTML, CSS and Tailwind CSS.",
    icon: <FaReact />,
  },
  {
    year: "2024",
    title: "Backend Development",
    description:
      "Developed REST APIs using Java, Spring Boot and integrated databases.",
    icon: <FaJava />,
  },
  {
    year: "2025",
    title: "DevOps & Cloud",
    description:
      "Worked with Docker containers and deployed applications on AWS & Azure.",
    icon: <FaDocker />,
  },
  {
    year: "Now",
    title: "Enterprise Full Stack Developer",
    description:
      "Building secure enterprise applications while continuously learning cloud-native technologies.",
    icon: <FaRocket />,
  },
];

function Timeline() {
  return (
    <section
      id="timeline"
      className="bg-slate-950 py-24 px-6"
    >
      <div className="max-w-6xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-5xl font-bold">
            My <span className="text-blue-500">Journey</span>
          </h2>

          <p className="text-slate-400 mt-5">
            Continuous learning and building modern software solutions.
          </p>
        </motion.div>

        <div className="relative">

          {/* Vertical Line */}

          <div className="absolute left-6 md:left-1/2 top-0 h-full w-1 bg-blue-600 transform md:-translate-x-1/2"></div>

          {timeline.map((item, index) => (

            <motion.div
              key={index}
              initial={{
                opacity: 0,
                x: index % 2 === 0 ? -100 : 100,
              }}
              whileInView={{
                opacity: 1,
                x: 0,
              }}
              transition={{
                duration: .7,
              }}
              viewport={{ once: true }}
              className={`relative mb-16 flex ${
                index % 2 === 0
                  ? "md:justify-start"
                  : "md:justify-end"
              }`}
            >

              <div className="bg-slate-900 rounded-2xl shadow-xl border border-slate-700 p-8 w-full md:w-5/12 ml-16 md:ml-0">

                <div className="flex items-center gap-4">

                  <div className="w-14 h-14 rounded-full bg-blue-600 flex justify-center items-center text-2xl">

                    {item.icon}

                  </div>

                  <div>

                    <h3 className="text-2xl font-bold">

                      {item.title}

                    </h3>

                    <p className="text-blue-400">

                      {item.year}

                    </p>

                  </div>

                </div>

                <p className="mt-5 text-slate-300 leading-7">

                  {item.description}

                </p>

              </div>

              {/* Timeline Dot */}

              <div className="absolute left-3 md:left-1/2 w-7 h-7 rounded-full bg-blue-500 border-4 border-slate-950 transform md:-translate-x-1/2 mt-10"></div>

            </motion.div>

          ))}

        </div>

        {/* Bottom Card */}

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
          className="mt-16 bg-gradient-to-r from-blue-600 to-cyan-500 rounded-3xl p-10 text-center"
        >

          <FaCloud className="text-6xl mx-auto mb-5" />

          <h3 className="text-3xl font-bold">

            Always Learning 🚀

          </h3>

          <p className="mt-4 text-lg">

            My goal is to become a Cloud Native Full Stack Engineer,
            building scalable applications with modern technologies.

          </p>

        </motion.div>

      </div>
    </section>
  );
}

export default Timeline;