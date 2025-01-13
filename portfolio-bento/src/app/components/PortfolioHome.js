import React from 'react';
import WorkExperience from './BentoGridItems/WorkExperience';
import TypeWriterEffect from './TypeWriterEffect';
import Resume from './BentoGridItems/Resume';
import Skills from './BentoGridItems/Skills';

const Portfolio = () => {


  return (
    <div className="relative w-full min-h-screen bg-gray-100">
      {/* Desktop Layout - Only visible on large screens */}
      <div className="hidden lg:block relative w-full h-screen">
        {/* Work Experience */}
        <div className="absolute top-4 left-4 w-[30vw] h-[62vh] text-lightNeutral rounded-lg shadow-[0px_0px_10px_1px_rgba(45,_63,_98,_0.5)] animate-float1 flex items-center justify-center">
          <WorkExperience />
        </div>

        {/* Projects */}
        <div className="absolute top-4 left-[32vw] w-[35vw] h-[22vh] bg-deepBlue text-lightNeutral rounded-lg shadow-[0px_0px_10px_1px_rgba(45,_63,_98,_0.5)] animate-float2 flex items-center justify-center">
          Projects
        </div>

        {/* Skills */}
        <div className="absolute top-4 right-4 w-[31vw] h-[22vh] bg-slateBlue text-lightNeutral rounded-lg shadow-[0px_0px_10px_1px_rgba(45,_63,_98,_0.5)] animate-float3 flex items-center justify-center">
          <Skills/>
        </div>

        {/* Education */}
        <div className="absolute top-[25vh] right-4 w-[16vw] h-[38vh] bg-softBlue text-darkNavy rounded-lg shadow-[0px_0px_10px_1px_rgba(45,_63,_98,_0.5)] animate-float4 flex items-center justify-center">
          Education
        </div>

        {/* Resume */}
        <div className="absolute bottom-4 left-4 w-[25vw] h-[33vh] bg-darkNavy text-lightNeutral rounded-lg shadow-[0px_0px_10px_1px_rgba(45,_63,_98,_0.5)] animate-float5 flex items-center justify-center">
          <Resume/>
        </div>

        {/* Contact Me */}
        <div className="absolute bottom-4 left-[27vw] w-[51vw] h-[33vh] bg-slateBlue text-darkNavy rounded-lg shadow-[0px_0px_10px_1px_rgba(45,_63,_98,_0.5)] animate-float6 flex items-center justify-center">
          Contact Me
        </div>

        {/* Social Icons */}
        <div className="absolute bottom-4 right-4 w-[20vw] h-[33vh] bg-deepBlue text-lightNeutral rounded-lg shadow-[0px_0px_10px_1px_rgba(45,_63,_98,_0.5)] animate-float7 flex items-center justify-center">
          Social Icons
        </div>

        {/* Center Block (Name and Title) */}
        <div className="absolute top-[25vh] left-[32vw] w-[50vw] h-[38vh] bg-lightNeutral text-darkNavy rounded-lg shadow-[0px_0px_10px_1px_rgba(45,_63,_98,_0.5)] animate-float8 flex flex-col items-center justify-center text-center">
          <p className="font-bold text-xl">
            {/* <Typewriter
            words={['Phanishree']}
            cursor
            cursorStyle='_'
            cursorBlinking
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1000}
          /> */}
            <TypeWriterEffect words={["Phanishree"]} cursorBlinking={true} cursor={true} />
          </p>
          <p className="text-sm"><TypeWriterEffect words={["Creative Web Developer"]} /></p>
        </div>
      </div>

      {/* Mobile/Tablet Layout - Only visible on small/medium screens */}
      <div className="lg:hidden flex flex-col space-y-4 p-4">
        {/* Name and Title */}
        <div className="w-full bg-lightNeutral text-darkNavy rounded-lg shadow-lg p-6 text-center">
          <p className="font-bold text-xl"><TypeWriterEffect words={["Phanishree"]} cursorBlinking={true} cursor={true} /></p>
          <p className="text-sm"><TypeWriterEffect words={["Creative Web Developer"]} /></p>
        </div>

        {/* Work Experience */}
        <div className="w-full bg-darkNavy text-lightNeutral rounded-lg shadow-lg p-6 min-h-[300px] flex items-center justify-center">
          <WorkExperience />
        </div>

        {/* Projects */}
        <div className="w-full bg-deepBlue text-lightNeutral rounded-lg shadow-lg p-6 min-h-[200px] flex items-center justify-center">
          Projects
        </div>

        {/* Skills */}
        <div className="w-full bg-slateBlue text-lightNeutral rounded-lg shadow-lg p-6 min-h-[200px] flex items-center justify-center">
          <Skills/>
        </div>

        {/* Education */}
        <div className="w-full bg-softBlue text-darkNavy rounded-lg shadow-lg p-6 min-h-[200px] flex items-center justify-center">
          Education
        </div>

        {/* Resume */}
        <div className="w-full bg-darkNavy text-lightNeutral rounded-lg shadow-lg p-6 min-h-[200px] flex items-center justify-center">
          <Resume/>
        </div>

        {/* Contact Me */}
        <div className="w-full bg-slateBlue text-darkNavy rounded-lg shadow-lg p-6 min-h-[200px] flex items-center justify-center">
          Contact Me
        </div>

        {/* Social Icons */}
        <div className="w-full bg-deepBlue text-lightNeutral rounded-lg shadow-lg p-6 min-h-[200px] flex items-center justify-center">
          Social Icons
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
