import React from "react";
import Link from "next/link";
import RoundedArrow from "../RoundedArrow";
import {
    SiAwslambda,
    SiCss3,
    SiCypress,
    SiHtml5,
    SiJava,
    SiJavascript,
    SiMongodb,
    SiNextdotjs,
    SiNodedotjs,
    SiReact,
    SiSass,
    SiServerless,
    SiTerraform,
    SiThreedotjs,
    SiWebgl,
    SiWebrtc,
  } from "react-icons/si";
  import { FaJava, FaNodeJs } from "react-icons/fa";
  import { RiNextjsFill, RiReactjsFill } from "react-icons/ri";
  import { TbBrandThreejs } from "react-icons/tb";


export default function Skills() {

    const techStack = [
        { icon: <RiNextjsFill />, label: "Next.js" },
        { icon: <RiReactjsFill />, label: "React.js" },
        { icon: <TbBrandThreejs />, label: "Three.js" },
        { icon: <SiJavascript />, label: "JavaScript" },
        { icon: <SiWebrtc />, label: "Web-RTC" },
        { icon: <SiCss3 />, label: "CSS" },
        { icon: <SiHtml5 />, label: "HTML" },
        { icon: <SiMongodb />, label: "MongoDB" },
        { icon: <FaNodeJs />, label: "Node.js" },
        { icon: <SiAwslambda />, label: "AWS Lambda" },
        // { icon: <SiServerless />, label: "Serverless" },
        { icon: <FaJava />, label: "Java" },
      ];

      const duplicatedStack = [...techStack, ...techStack, ...techStack, ...techStack,...techStack, ...techStack, ...techStack];

    return (
        <Link href="/skills" scroll={false} className="w-full h-full flex items-center justify-center group">
            <div className="w-full h-full text-white  bg-mainBg border-borderColor rounded-lg shadow-lg flex flex-col items-center justify-center space-y-2 p-4 transform hover:scale-101 hover:shadow-lg border border-cardBorder hover:border-green-500 transition-all duration-300 cursor-pointer">
                <p className="text-2xl font-bold">Tech Stack</p>
                <div className="overflow-hidden w-full bg-transparent py-3">
                    {/* Marquee Container */}
                    <div className="flex space-x-8 animate-marquee">

                        {techStack.map((tech, index) => (
                            <div
                                key={`tech-${index}`}
                                className="flex flex-col items-center text-white text-sm"
                            >
                                <div className="text-4xl">{tech.icon}</div>
                                {/* <p>{tech.label}</p> */}
                            </div>
                        ))}

                        {techStack.map((tech, index) => (
                            <div
                                key={`tech-${index}`}
                                className="flex flex-col items-center text-white text-sm"
                            >
                                <div className="text-4xl">{tech.icon}</div>
                                {/* <p>{tech.label}</p> */}
                            </div>
                        ))}
                    </div>
                </div>
                {/* <video src="./skills.mp4" autoPlay loop muted className="w-[175px] h-[100px] object-cover" /> */}

                <RoundedArrow />
            </div>

        </Link>
    )
}