import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import cloudedeployment from "../assets/clouddeployment.jpg";
import erp from "../assets/erp.jpg";
import portfolioImg from "../assets/portfolio.jpg";
const projects = [
  {
    title: "Enterprise Document Management",
    image:
      erp,
    description:
      "Enterprise application for document tracking, report generation, authentication and workflow automation.",
    technologies: [
      "Java",
      "Spring Boot",
      "Angular",
      "Docker",
      "Oracle"
    ],
    github: "#",
    demo: "#",
  },

  {
    title: "Personal Portfolio",
    image:
      portfolioImg,
    description:
      "Modern portfolio website with React, Tailwind CSS and Framer Motion animations.",
    technologies: [
      "React",
      "Tailwind",
      "Framer Motion",
    ],
    github: "#",
    demo: "#",
  },

  {
    title: "Cloud Deployment",
    image:cloudedeployment,
    description:
      "Containerized application deployed using Docker on AWS and Azure cloud environments.",
    technologies: [
      "Docker",
      "AWS",
      "Azure",
      "Linux",
    ],
    github: "#",
    demo: "#",
  },
];

function Projects() {
  return (
    <section
      id="projects"
      className="bg-slate-900 py-24 px-8"
    >
      <div className="max-w-7xl mx-auto">

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: .6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold">
            Featured
            <span className="text-blue-500"> Projects</span>
          </h2>

          <p className="text-slate-400 mt-4">
            A few projects showcasing my full-stack and cloud development skills.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

          {projects.map((project, index) => (

            <motion.div
              key={index}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: .6,
                delay: index * .2,
              }}
              viewport={{ once: true }}
              whileHover={{
                y: -10,
                scale: 1.02,
              }}
              className="bg-slate-950 rounded-2xl overflow-hidden border border-slate-800 shadow-xl"
            >

              <img
                src={project.image}
                alt={project.title}
                className="h-56 w-full object-cover"
              />

              <div className="p-6">

                <h3 className="text-2xl font-bold">
                  {project.title}
                </h3>

                <p className="text-slate-400 mt-4 leading-7">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-5">

                  {project.technologies.map((tech, i) => (

                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-600 rounded-full text-sm"
                    >
                      {tech}
                    </span>

                  ))}

                </div>

                <div className="flex gap-4 mt-8">

                  <a
                   href='https://github.com/kareemsheik'
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-slate-800 rounded-xl hover:bg-slate-700 transition"
                  >
                    <FaGithub />
                    GitHub
                  </a>

                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center gap-2 px-5 py-3 bg-blue-600 rounded-xl hover:bg-blue-500 transition"
                  >
                    <FaExternalLinkAlt />
                    Live
                  </a>

                </div>

              </div>

            </motion.div>

          ))}

        </div>
      </div>
    </section>
  );
}

export default Projects;