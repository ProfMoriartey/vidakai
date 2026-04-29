"use client"

import { motion } from "framer-motion"
import type { Variants } from "framer-motion"
import { useCursor } from "../context/CursorContext"

const services = [
  {
    id: "01",
    title: "Digital Product Engineering",
    description: "We build custom, interactive web applications. Our team uses modern frameworks to deliver fast, bug-free software tailored directly to your business requirements."
  },
  {
    id: "02",
    title: "Managed Web Operations",
    description: "We handle the technical infrastructure so you can focus on running your business. From database configuration to secure cloud hosting and continuous maintenance, we keep your systems online."
  },
  {
    id: "03",
    title: "Functional Interface Design",
    description: "We create accessible, minimalist user interfaces. Our designs prioritize usability and speed, ensuring your customers can navigate your platform without friction."
  }
]

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 }
  }
}

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
}

export default function Services() {
  const { setCursorType, setCursorText } = useCursor()

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto  text-black" id="services">
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <h2 className="text-3xl md:text-5xl font-bold tracking-tighter mb-12">
          Expertise
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="p-8 border border-gray-100 bg-gray-50 rounded-2xl flex flex-col group hover:bg-black hover:text-white transition-colors duration-500"
              onMouseEnter={() => {
                setCursorType("pointer")
                setCursorText("View")
              }}
              onMouseLeave={() => {
                setCursorType("default")
                setCursorText("")
              }}
            >
              <span className="text-sm font-medium text-gray-400 group-hover:text-gray-400 mb-8 block transition-colors duration-500">
                {service.id}
              </span>
              <h3 className="text-2xl font-bold mb-4">
                {service.title}
              </h3>
              <p className="text-gray-600 group-hover:text-gray-300 leading-relaxed text-sm transition-colors duration-500">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  )
}