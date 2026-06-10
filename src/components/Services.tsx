"use client";

import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

const services = [
  {
    id: "01",
    title: "Digital Product Engineering",
    description:
      "We build custom, interactive web applications. Our team uses modern frameworks to deliver fast, bug-free software tailored directly to your business requirements.",
  },
  {
    id: "02",
    title: "Managed Web Operations",
    description:
      "We handle the technical infrastructure so you can focus on running your business. From database configuration to secure cloud hosting and continuous maintenance, we keep your systems online.",
  },
  {
    id: "03",
    title: "Functional Interface Design",
    description:
      "We create accessible, minimalist user interfaces. Our designs prioritize usability and speed, ensuring your customers can navigate your platform without friction.",
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

export default function Services() {
  return (
    <section
      className="mx-auto max-w-7xl px-4 py-24 text-black sm:px-6 lg:px-8"
      id="services"
    >
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        variants={containerVariants}
      >
        <h2 className="mb-12 text-3xl font-bold tracking-tighter md:text-5xl">
          Expertise
        </h2>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={cardVariants}
              className="group flex flex-col rounded-2xl border border-gray-100 bg-gray-50 p-8 transition-colors duration-500 hover:bg-black hover:text-white"
            >
              <span className="mb-8 block text-sm font-medium text-gray-400 transition-colors duration-500 group-hover:text-gray-400">
                {service.id}
              </span>
              <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
              <p className="text-sm leading-relaxed text-gray-600 transition-colors duration-500 group-hover:text-gray-300">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
