import React from "react";
import { motion } from "framer-motion";
import bloodImg from '../assets/blood.jpg';
import systemImg from '../assets/system.jpg';

const Projects = () => {
  const projects = [
    {
      title: "Blood Over Boarders",
      description: "This system is where the blood bank tracks the number of units of blood from each blood type, to make sure that there is enough blood from each blood type",
      image: bloodImg,
      link: "https://github.com/BBMatsepane/Blood-Over-Boarders",
      tech: ["C#"],
    },
    {
      title: "Creative Project",
      description: "This is a C++ program for an Order Management System. Lets you input item name, price, and generates a random order number, shows all orders with item, price, and order number, removes an order by order number and writes/reads orders.",
      image: systemImg,
      link: "https://github.com/BBMatsepane/Creative_Project_51001357",
      tech: ["C++"],
    },
  ];

  return (
    <section className="py-16 px-4 bg-orange-50">
      <div className="max-w-6xl mx-auto text-center">
        <motion.h2
          className="text-3xl md:text-4xl text-stone-800 mb-6"
          style={{ fontFamily: "satoshi-black" }}
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Projects
        </motion.h2>
        <motion.p
          className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base"
          style={{ fontFamily: "satoshi-medium" }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Here are some of the projects I've worked on.
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.03 }}
            >
              <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
              <div className="p-6 text-left">
                <h3
                  className="text-xl font-semibold text-stone-800 mb-2"
                  style={{ fontFamily: "satoshi-bold" }}
                >
                  {project.title}
                </h3>
                <p
                  className="text-zinc-600 text-sm mb-4"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((t, i) => (
                    <span key={i} className="bg-rose-200 text-rose-800 px-2 py-1 rounded-full text-xs">
                      {t}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-rose-300 border-1 border-stone-800 text-stone-800 px-4 py-2 rounded-sm text-sm font-semibold hover:bg-rose-400 transition-colors"
                  style={{ fontFamily: "satoshi-medium" }}
                >
                  View Project
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;