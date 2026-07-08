import { motion } from "framer-motion";
import {
    FaEnvelope,
    FaPhoneAlt,
    FaMapMarkerAlt,
    FaGithub,
    FaLinkedin,
} from "react-icons/fa";

function Contact() {
    return (
        <section
            id="contact"
            className="bg-slate-950 py-24 px-8"
        >
            <div className="max-w-7xl mx-auto">

                {/* Heading */}

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: .6 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >

                    <h2 className="text-5xl font-bold">

                        Contact

                        <span className="text-blue-500">
                            {" "}Me
                        </span>

                    </h2>

                    <p className="text-slate-400 mt-5">

                        Let's build something amazing together.

                    </p>

                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12">

                    {/* Left */}

                    <motion.div

                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}

                    >

                        <h3 className="text-4xl font-bold">

                            Get In Touch

                        </h3>

                        <p className="mt-6 text-slate-300 leading-8">

                            I'm always interested in discussing software
                            development, cloud technologies, enterprise
                            applications and exciting opportunities.

                        </p>

                        <div className="space-y-6 mt-10">

                            <div className="flex items-center gap-5 bg-slate-900 p-5 rounded-xl">

                                <FaEnvelope className="text-blue-500 text-3xl" />

                                <div>

                                    <p className="text-slate-400">

                                        Email

                                    </p>

                                    <h4>

                                        kareemsheik133@gmail.com

                                    </h4>

                                </div>

                            </div>

                            <div className="flex items-center gap-5 bg-slate-900 p-5 rounded-xl">

                                <FaPhoneAlt className="text-green-500 text-3xl" />

                                <div>

                                    <p className="text-slate-400">

                                        Phone

                                    </p>

                                    <h4>

                                        +91 8247797585

                                    </h4>

                                </div>

                            </div>

                            <div className="flex items-center gap-5 bg-slate-900 p-5 rounded-xl">

                                <FaMapMarkerAlt className="text-red-500 text-3xl" />

                                <div>

                                    <p className="text-slate-400">

                                        Location

                                    </p>

                                    <h4>

                                        konaseema district, amalapuram, Andhra Pradesh, India

                                    </h4>

                                </div>

                            </div>

                        </div>

                        <div className="flex gap-6 mt-10 text-3xl">

                            <a
                               href="https://www.github.com/kareemsheik"
                                
                                target="_blank"
                                rel="noopener noreferrer"
                                className="hover:text-blue-500"
                            >
                                <FaGithub />
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

                    <motion.form

                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: .7 }}
                        viewport={{ once: true }}

                        className="bg-slate-900 p-8 rounded-3xl shadow-xl space-y-6"
                    >

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
                        />

                        <input
                            type="text"
                            placeholder="Subject"
                            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
                        />

                        <textarea
                            rows={6}
                            placeholder="Write your message..."
                            className="w-full p-4 rounded-xl bg-slate-800 outline-none"
                        />

                        <button
                            className="w-full py-4 rounded-xl bg-blue-600 hover:bg-blue-500 transition font-semibold"
                        >

                            Send Message

                        </button>

                    </motion.form>

                </div>

            </div>
        </section>
    );
}

export default Contact;