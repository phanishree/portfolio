import React from "react";
import { motion } from "framer-motion";

export default function WorkExperienceCard({ project, index }) {
    const oddItemVariants = {
        hidden: { x: -200, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    };

    const evenItemVariants = {
        hidden: { x: 200, opacity: 0 },
        visible: { x: 0, opacity: 1 }
    };

    const isOdd = index % 2 !== 0;

    return (
        <motion.div
            initial="hidden"
            animate="visible"
            variants={isOdd ? oddItemVariants : evenItemVariants}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className={`flex ${isOdd ? "justify-end" : "justify-start"} w-full md:w-[90vw]`}
        >
            <div
                className={`flex flex-col md:flex-row ${isOdd ? "md:flex-row-reverse" : ""} items-center w-full md:w-[70vw] bg-purple text-white shadow-xl rounded-xl p-6 mb-6 hover:shadow-2xl transition-shadow duration-300 space-y-4 md:space-y-0 md:space-x-4`}
            >

                <div className="flex-1 flex justify-center">
                    <img
                        src={project.image}
                        alt={project.title}
                        className="rounded-lg w-full md:w-[80%] object-cover"
                    />
                </div>

                <div className="flex-1 space-y-4 text-left">
                    <h2 className="text-xl md:text-2xl font-bold">{project.title}</h2>
                    <ul className="list-disc list-inside space-y-2">
                        {project.points.map((point, idx) => (
                            <li key={idx} className="text-sm md:text-base">
                                {point}
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </motion.div>
    );
}
