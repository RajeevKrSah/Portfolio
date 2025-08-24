"use client";

import { motion } from "framer-motion";
import { FaDownload } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Hero = () => {
    return (
        <section className="relative min-h-[75vh] flex items-center justify-center">
            <div className="relative container mx-auto">
                <div className="absolute left-0 top-1/2 -translate-y-1/2 z-20 px-4 lg:px-0">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="mb-8"
                    >
                        <p className="text-xs tracking-[0.25em] font-light opacity-70 uppercase">
                            Hello, I’m Rajeev Kumar Sah
                        </p>
                    </motion.div>

                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                        className="mb-12"
                    >

                        <h1 className="text-[clamp(3.5rem,8vw,6rem)] leading-[0.9] tracking-[-0.02em] font-light">
                            <div className="serif-font">Frontend.</div>
                            <div className="serif-font">Creative.</div>
                            <div className="serif-font">Developer.</div>
                        </h1>
                    </motion.div>
                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                        className="flex space-x-4"
                    >
                        {/* Download Resume */}
                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-2 bg-gradient-to-r from-primary-medium to-primary-light text-white text-sm px-6 py-2.5 rounded-full shadow-lg shadow-primary-medium/30 transition-all duration-300"
                        >
                            <span className="relative z-10">Download Resume</span>
                            <FaDownload className="transition-transform duration-300 group-hover:translate-y-1" />
                        </motion.button>

                        {/* Contact Me */}
                        <motion.button
                            whileHover={{ scale: 1.08 }}
                            whileTap={{ scale: 0.95 }}
                            className="group flex items-center gap-2 bg-transparent border-2 border-primary-medium text-primary-medium text-sm px-6 py-2.5 rounded-full hover:bg-primary-medium hover:text-white transition-all duration-300"
                        >
                            <span className="relative z-10">Contact Me</span>
                            <MdEmail className="transition-transform duration-300 group-hover:translate-x-1" />
                        </motion.button>
                    </motion.div>

                </div>

                {/* Right Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="absolute right-0 bottom-[15%] max-w-[280px] z-20"
                >
                    <p className="text-[13px] font-light leading-relaxed opacity-80">
                        I design and build{" "}
                        <span className="text-primary-light">modern, responsive, and impactful</span> web
                        applications with React, Next.js, and Tailwind.
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
