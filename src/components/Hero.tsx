import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import profileImage from "../assets/profile.jpg";
import {
    FaGithub,
    FaLinkedin,
    FaJava,
    FaReact,
    FaDocker,
    FaAws,
    FaPython,
} from "react-icons/fa";
import { VscAzure } from "react-icons/vsc";
import { SiSpringboot, SiAngular, SiJavascript } from "react-icons/si";

function Hero() {
    return (
        <section
            id="home"
            className="min-h-screen flex flex-row items-center bg-gradient-to-br from-slate-950 via-slate-900 to-blue-950 px-8"
        >
            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center">

                {/* Left */}

                <motion.div
                    initial={{ opacity: 0, x: -80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <p className="text-blue-400 text-xl mb-3">
                        Hello, I'm
                    </p>

                    <h1 className="text-5xl lg:text-7xl font-black mb-6">
                        Kareemulla
                    </h1>

                    <TypeAnimation
                        sequence={[
                            "Java Full Stack Developer",
                            2000,
                            "React Developer",
                            2000,
                            "Spring Boot Developer",
                            2000,
                            "Cloud Enthusiast",
                            2000,
                        ]}
                        wrapper="h2"
                        speed={50}
                        repeat={Infinity}
                        className="text-3xl text-cyan-400 font-bold"
                    />

                    <p className="mt-8 text-slate-300 leading-8 max-w-xl">
                        Passionate Full Stack Developer with experience in Java,
                        Spring Boot, React, Angular, Python, Docker,
                        AWS and Azure. I enjoy building scalable enterprise
                        applications with modern technologies.
                    </p>

                    <div className="flex gap-5 mt-10">

                        <a
                            href=".././Kareem_Resume.docx"
                            download
                            className="px-8 py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition"
                        >
                            Download Resume
                        </a>

                        <a
                            href="tel:+918247797585"
                            className="px-8 py-4 rounded-xl border border-blue-500 hover:bg-blue-600 transition"
                        >
                            Contact Me
                        </a>

                    </div>

                    <div className="flex gap-6 mt-10 text-3xl">

                        <a  href="https://github.com/kareemsheik"

                            target="_blank"
                            rel="noopener noreferrer">
                            <FaGithub className="hover:text-blue-400 transition" />
                        </a>

                        <a
                            href="https://www.linkedin.com/in/kareemulla-sheik-687350275"

                            target="_blank"
                            rel="noopener noreferrer"
                            className="hover:text-blue-500"
                        >
                            <FaLinkedin />
                        </a>

                    </div>

                </motion.div>

                {/* Right */}

                <motion.div
                    initial={{ opacity: 0, x: 80 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8 }}
                    className="relative flex justify-center">

                    <div className="absolute w-96 h-96 rounded-full bg-blue-500 blur-3xl opacity-20"></div>

                    <img
                        src={profileImage}
                        alt="Profile"
                        className="relative w-80 h-80 rounded-full border-8 border-blue-500 object-cover shadow-2xl"
                    />

                    {/* Floating Skills */}

                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="absolute top-5 left-0 bg-slate-800 px-4 py-2 rounded-xl flex items-center gap-2"
                    >
                        <FaJava className="text-orange-500" />
                        Java
                    </motion.div>

                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="absolute bottom-10 left-5 bg-slate-800 px-4 py-2 rounded-xl flex items-center gap-2"
                    >
                        <FaReact className="text-cyan-400" />
                        React
                    </motion.div>

                    <motion.div
                        animate={{ y: [-10, 10, -10] }}
                        transition={{ repeat: Infinity, duration: 4 }}
                        className="absolute top-20 right-0 bg-slate-800 px-4 py-2 rounded-xl flex items-center gap-2"
                    >
                        <SiSpringboot className="text-green-500" />
                        Spring Boot
                    </motion.div>

                    <motion.div
                        animate={{ y: [10, -10, 10] }}
                        transition={{ repeat: Infinity, duration: 3 }}
                        className="absolute bottom-20 right-5 bg-slate-800 px-4 py-2 rounded-xl flex items-center gap-2"
                    >
                        <FaDocker className="text-blue-400" />
                        Docker
                    </motion.div>

                </motion.div>

            </div>

            {/* Tech Stack */}


                <div className="flex justify-center gap-8 text-4xl flex-wrap">

                    <FaJava />

                    <FaReact className="text-cyan-400" />

                    <SiAngular className="text-red-500" />

                    <SiSpringboot className="text-green-500" />

                    <FaPython className="text-yellow-400" />

                    <SiJavascript className="text-yellow-300" />

                    <FaDocker className="text-blue-400" />

                    <FaAws className="text-orange-400" />

                    <VscAzure className="text-blue-500" />

                </div>

            

        </section>
    );
}

export default Hero;