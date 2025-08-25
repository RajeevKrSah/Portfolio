'use client'
import { motion } from "framer-motion"

const Stats: React.FC = () => {
  return (
    <section className="relative w-full h-[550px] overflow-hidden">
      <div className="absolute inset-0 opacity-40">
        <svg
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="none"
          viewBox="0 0 100 100"
        >
          <path
            d="M0,72 Q90,0 100,0 L100,100 L0,100 Z"
            fill="url(#gradient)"
          />
          <defs>
            <linearGradient id="gradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#6366F1" />
              <stop offset="100%" stopColor="#EC4899" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Content */}
      <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-start px-6 lg:px-0">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-indigo-400 to-pink-400 drop-shadow-lg">
            My Achievements
          </h2>
        </motion.div>
        <div className="flex flex-wrap gap-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            className="bg-primary-light text-white p-8 rounded-2xl shadow-xl w-[240px]"
          >
            <h3 className="text-5xl font-extrabold">
              1<span className="text-2xl align-super">+</span>
            </h3>
            <p className="mt-3 font-medium text-gray-200 leading-snug">
              Years of Experience
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="bg-black text-white p-8 rounded-2xl shadow-xl w-[240px]"
          >
            <h3 className="text-5xl font-extrabold">
              10<span className="text-2xl align-super">+</span>
            </h3>
            <p className="mt-3 font-medium text-gray-200 leading-snug">
              Successful Projects
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default Stats