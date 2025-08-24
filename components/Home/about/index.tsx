"use client";

import React from "react";
import { motion } from "framer-motion";
import { Rocket } from "lucide-react";
import { GoArrowUpRight } from "react-icons/go";
import Link from "next/link";
import Image from "next/image";

const fadeUp = (delay: number = 0) => ({
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, delay, ease: "easeOut" } },
});

const About: React.FC = () => {
  return (
    <section className="relative w-full bg-white py-10 lg:py-24">
      <div className="container mx-auto px-4 lg:px-0 flex flex-col lg:flex-row items-center gap-12">
        {/* Left side - Images */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          className="relative flex-1 w-full"
        >
          {/* Main Image */}
          <motion.div
            variants={fadeUp(0.2)}
            className="relative max-w-lg h-[500px] rounded-md overflow-hidden"
          >
            <motion.img
              src="images/hero.webp"
              alt="Rajeev Kumar Sah - Developer"
              className="w-full h-full object-cover"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.6 }}
            />
          </motion.div>

          {/* Floating card with image */}
          <motion.div
            variants={fadeUp(0.4)}
            className="absolute -bottom-20 right-20 max-w-xs h-[300px] overflow-hidden border-8 border-white"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          >
            <Image
              src="/images/hero.webp"
              alt="Creative digital workspace"
              width={300}
              height={300}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Floating Badge */}
          <motion.div
            variants={fadeUp(0.6)}
            className="absolute top-0 right-32 flex items-center justify-center border-8 border-white"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          >
            <div className="bg-primary-dark text-white px-4 py-3 text-center font-semibold flex items-center gap-2">
              <Rocket className="w-5 h-5" />
              <span>Frontend Developer</span>
            </div>
          </motion.div>
        </motion.div>

        {/* Right side - Content */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp(0.3)}
          className="flex-1 space-y-6"
        >
          <motion.p
            variants={fadeUp(0.4)}
            className="uppercase text-sm tracking-wider text-gray-400 font-semibold mb-3"
          >
            About Me
          </motion.p>

          <motion.h1
            variants={fadeUp(0.6)}
            className="text-3xl md:text-5xl font-serif font-semibold leading-tight text-primary-dark"
          >
            Passionate about building
            <br />
            modern, user-friendly, and
            <br />
            scalable digital
            <br />
            <span className="text-primary-light">experiences,</span>
            <br />
            <span className="text-primary-light">applications, and brands</span>
          </motion.h1>

          <motion.p
            variants={fadeUp(0.8)}
            className="text-gray-600 max-w-xl"
          >
            I’m a frontend developer who loves crafting clean, responsive, and
            high-performing web applications. With expertise in React, Next.js,
            and modern UI frameworks, I aim to deliver impactful digital
            solutions that blend creativity and functionality.
          </motion.p>

          <motion.div variants={fadeUp(1)}>
            <Link
              href="/projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary-dark text-white font-semibold hover:bg-primary-dark/90 transition">
              Explore My Work <span><GoArrowUpRight size={18} /></span>
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
