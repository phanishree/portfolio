import React from 'react';
import WorkExperience from './BentoGridItems/WorkExperience';
import TypeWriterEffect from './TypeWriterEffect';
import Resume from './BentoGridItems/Resume';
import Skills from './BentoGridItems/Skills';
import Socials from './BentoGridItems/Socials';
import Spotify from './BentoGridItems/Spotify';
import Education from './BentoGridItems/Education';
import Projects from './BentoGridItems/Projects';
import { motion } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.8, y: 50 },
  show: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const fallingVariants = {
  hidden: { opacity: 0, y: -100 }, // Fall from above
  show: {
    opacity: 1,
    y: 0, 
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const slidingVariants = {
  hidden: { opacity: 0, x: 100 }, // Slide in from the right
  show: {
    opacity: 1,
    x: 0, // Final position
    transition: {
      duration: 0.8,
      ease: "easeOut",
    },
  },
};

const Portfolio = () => {
  return (
    <motion.div
      className="relative w-full min-h-screen bg-zinc-950"
      variants={containerVariants}
      initial="hidden"
      animate="show"
    >
      {/* Desktop Layout */}
      <div className="hidden lg:block relative w-full h-screen">
        {/* Work Experience */}
        <motion.div
          variants={itemVariants}
          className="absolute top-4 left-4 w-[30vw] h-[62vh] text-lightNeutral rounded-lg animate-float1 flex items-center justify-center"
        >
          <WorkExperience />
        </motion.div>

        {/* Projects */}
        <motion.div
          variants={itemVariants}
          className="absolute top-4 left-[32vw] w-[35vw] h-[22vh] bg-mainBg text-lightNeutral rounded-lg animate-float2 flex items-center justify-center"
        >
          <Projects />
        </motion.div>

        {/* Skills */}
        <motion.div
          variants={itemVariants}
          className="absolute top-4 right-4 w-[31vw] h-[22vh] bg-mainBg text-lightNeutral rounded-lg animate-float3 flex items-center justify-center"
        >
          <Skills />
        </motion.div>

        {/* Education */}
        <motion.div
          variants={itemVariants}
          className="absolute top-[25vh] right-4 w-[16vw] h-[38vh] bg-mainBg text-lightNeutral rounded-lg animate-float4 flex items-center justify-center"
        >
          <Education />
        </motion.div>

        {/* Resume */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-4 left-4 w-[25vw] h-[33vh] bg-mainBg text-lightNeutral rounded-lg animate-float5 flex items-center justify-center"
        >
          <Resume />
        </motion.div>

        {/* Socials */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-4 left-[27vw] w-[51vw] h-[33vh] bg-mainBg text-lightNeutral rounded-lg animate-float6 flex items-center justify-center"
        >
          <Socials />
        </motion.div>

        {/* Spotify */}
        <motion.div
          variants={itemVariants}
          className="absolute bottom-4 right-4 w-[20vw] h-[33vh] bg-mainBg text-lightNeutral rounded-lg animate-float7 flex items-center justify-center"
        >
          <Spotify />
        </motion.div>

        {/* Center Block (Name and Title) */}
        <motion.div
          variants={itemVariants}
          className="absolute top-[25vh] left-[32vw] w-[50vw] h-[38vh] bg-mainBg text-lightNeutral rounded-lg animate-float8 flex flex-col items-center justify-center text-center"
        >
          <p className="font-bold text-2xl">
            <TypeWriterEffect words={["Phanishree"]} cursorBlinking={true} cursor={true} />
          </p>
          <p className="text-sm">
            <TypeWriterEffect words={["Creative Web Developer"]} />
          </p>
        </motion.div>
      </div>

      {/* Mobile Layout */}
      <motion.div
        className="lg:hidden flex flex-col space-y-4 p-4"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        <motion.div variants={itemVariants} className="w-full h-full bg-mainBg text-lightNeutral rounded-lg text-center">
          <p className="font-bold text-xl">
            <TypeWriterEffect words={["Phanishree"]} cursorBlinking={true} cursor={true} />
          </p>
          <p className="text-sm">
            <TypeWriterEffect words={["Creative Web Developer"]} />
          </p>
        </motion.div>

        {/* Remaining Items */}
        {[WorkExperience, Skills, Projects, Education, Resume, Socials, Spotify].map((Component, index) => (
          <motion.div
            key={index}
            variants={itemVariants}
            className="w-full h-full bg-mainBg text-lightNeutral rounded-lg min-h-[200px] flex items-center justify-center"
          >
            <Component />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
};

export default Portfolio;
