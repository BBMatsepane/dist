import React from "react";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="min-h-screen flex flex-col -mt-10 md:flex-row items-center justify-center px-8 py-16 bg-white">
      
      {/* Left: Image */}
      <motion.div
        className="md:w-1/2 flex justify-center mb-10 md:mb-0"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <img
          src="./assets/profile.jpg"
          alt="Basetsana Matsepane"
          className="w-94 h-94 object-cover border-7 border-stone-900 rounded-full shadow-lg"
        />
      </motion.div>

      {/* Right: Text */}
      <motion.div
        className="md:w-1/2 text-center mr-10 md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        viewport={{ once: true }}
      >
        <h2
          className="text-3xl md:text-4xl mb-4 text-stone-800"
          style={{ fontFamily: 'satoshi-black' }}
        >
          About Me
        </h2>
        <p
          className="text-zinc-600 leading-relaxed mb-6"
          style={{ fontFamily: 'satoshi-medium' }}
        >
          Hi! I'm <span className="font-semibold text-stone-800">Basetsana Matsepane</span>, an ambitious, dedicated, and goal-oriented final year student pursuing the qualification of Bachelor of Science in Information Technology at North-West University. My academic journey has equipped me with practical skills in Object Oriented Programming, Data Structures and algorithms, and System Analysis and Design. I enjoy building efficient, well-structured solutions and turning complex problems into simple, scalable systems. System Analysis and Design showed me how to understand user needs and design systems that actually work.
        </p>
        <p
          className="text-zinc-600 leading-relaxed mb-6"
          style={{ fontFamily: 'satoshi-medium' }}
        >
          I’m constantly learning new tools and frameworks, and I’m open to opportunities where I can apply these skills, collaborate, and keep growing as a developer. I am enthusiastic about working in settings where I can effectively bridge the gap between innovation and real-world application.
        </p>
      </motion.div>
    </section>
  );
};

export default About;
