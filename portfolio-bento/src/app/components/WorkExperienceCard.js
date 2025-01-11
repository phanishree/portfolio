import React from "react";
import { motion } from "framer-motion";

export default function WorkExperienceCard() {

    const itemVariants = {
        hidden: { x: -20, opacity: 0 },
        visible: {
            x: 0,
            opacity: 1
        }
    };

    return (<motion.div
        initial="hidden"
        animate="visible"
        variants={itemVariants}
    >
        <div className="bg-white shadow-lg rounded-lg p-6 mb-6">

        </div>
    </motion.div>);
}