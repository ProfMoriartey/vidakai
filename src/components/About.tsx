"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { useCursor } from "../context/CursorContext"

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }
  }
}

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } }
}

export default function About() {
  const { setCursorType, setCursorText } = useCursor()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto bg-white text-black" id="about">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
        className="grid grid-cols-1 md:grid-cols-2 gap-16"
      >
        <motion.div variants={itemVariants}>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-8">
            Background
          </h2>
          <div className="space-y-6 text-gray-600 text-lg">
            <p>
              I build custom web applications and lead international sales and marketing campaigns. This dual focus allows me to create digital products that look great and drive real business growth.
            </p>
            <p>
              My foundation stems from a Bachelor of Science in Chemistry. This background grounds my approach in deep analytical thinking and precise problem-solving. I treat code architecture the same way I treat chemical structures—every piece must serve a deliberate purpose.
            </p>
            <p>
              Currently, I direct the web presence and global marketing efforts for Tüzemen Group. I also manage the full project lifecycle for independent applications, ensuring accessible and modern user experiences.
            </p>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col justify-center">
          <div 
            className="p-8 bg-gray-50 rounded-2xl border border-gray-100"
            onMouseEnter={() => {
              setCursorType("project")
              setCursorText("Verify")
            }}
            onMouseLeave={() => {
              setCursorType("default")
              setCursorText("")
            }}
          >
            <h3 className="text-xl font-bold mb-6 tracking-tight">Credentials</h3>
            <ul className="space-y-4">
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full" />
                <span className="font-medium text-black">Meta Certified Professional</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 bg-black rounded-full" />
                <span className="font-medium text-black">Google Certified Professional</span>
              </li>
              <li className="flex items-center gap-4">
                <div className="w-2 h-2 bg-gray-300 rounded-full" />
                <span className="text-gray-600">B.Sc. Chemistry</span>
              </li>
            </ul>
          </div>
        </motion.div>
      </motion.div>
    </section>
  )
}