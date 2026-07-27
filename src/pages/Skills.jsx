import React from "react";
import { jsx } from 'react/jsx-runtime';
import Autoplay from "embla-carousel-autoplay";
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel";
import { SiCplusplus, SiPython, SiOpenjdk } from "react-icons/si";
import { motion } from "framer-motion";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0 },
};

const Skills = () => {
  const skills = [
    { icon: <SiCplusplus className="text-blue-500 text-8xl" />, name: "C++" },
    { icon: <SiPython className="text-yellow-400 text-8xl" />, name: "Python" },
    { icon: <SiOpenjdk className="text-red-500 text-8xl" />, name: "Java" },
  ];

  return (
    <>
      {/* Skills Section */}
      <section className="py-16 px-4 text-center">
        <motion.h2
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl text-stone-800 mb-7"
          style={{ fontFamily: "satoshi-black" }}
        >
          Tech Stack
        </motion.h2>
        <motion.p
          initial="hidden"
          whileInView="visible"
          variants={fadeUp}
          transition={{ delay: 0.2, duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-10 text-zinc-600 leading-relaxed max-w-2xl mx-auto text-base md:text-lg"
          style={{ fontFamily: "satoshi-medium" }}
        >
          My academic journey introduced me to C++, C#, Python, and Java. I’ve used them to go from low-level logic and algorithms, to building full applications, to automating tasks and solving complex problems efficiently.
        </motion.p>
        <Carousel plugins={[Autoplay({ delay: 2000 })]} className="w-full max-w-3xl mx-auto">
          <CarouselContent className="flex items-center">
            {skills.map((skill, index) => (
              <CarouselItem key={index} className="basis-1/4 md:basis-1/6 flex flex-col items-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  {skill.icon}
                  <p className="mt-2 text-sm" style={{ fontFamily: "satoshi-medium" }}>
                    {skill.name}
                  </p>
                </motion.div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </section>
      {/* Resume/CV Section */}
      <section className="py-8 px-4 bg-gray-100">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl md:text-3xl text-stone-800 mb-4"
            style={{ fontFamily: "satoshi-black" }}
          >
            Get My Resume
          </motion.h2>
          <motion.p
            initial="hidden"
            whileInView="visible"
            variants={fadeUp}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-6 text-zinc-600 leading-relaxed text-base md:text-lg"
            style={{ fontFamily: "satoshi-medium" }}
          >
            Want to know more about my experience and skills? Download my resume below!
          </motion.p>
          <motion.a
            href="https://drive.google.com/file/d/1DvqHu4vwKPJ9u2QkXJuQReAaHIS7gOWc/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            style={{ fontFamily: "satoshi-medium" }}
          >
            Download Resume
          </motion.a>
        </div>
      </section>
    </>
  );
};

export default Skills;