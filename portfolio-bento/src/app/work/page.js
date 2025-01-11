"use client"
import React from "react";
import NavBar from "../components/Navbar";
import { motion } from 'framer-motion';
import WorkExperienceCard from "../components/WorkExperienceCard";

export default function WorkExperience() {

    const career = {
        company: "Tech Solutions Inc",
        roles: [
            {
                title: "Software Engineer",
                period: "2023 - Present",
                achievements: [
                    "Promoted based on consistent high performance",
                    "Leading technical initiatives across teams",
                    "Mentoring junior developers"
                ]
            },
            {
                title: "Associate Software Engineer",
                period: "2021 - 2023",
                achievements: [
                    "Started as junior member of the development team",
                    "Rapidly grew technical expertise",
                    "Contributed to multiple key projects"
                ]
            }
        ],
        projects: [
            {
                name: "Customer Dashboard",
                role: "Software Engineer",
                period: "Jan 2024 - Present",
                description: "Led the development of real-time analytics dashboard",
                technologies: ["React", "Node.js", "WebSocket"],
                achievements: [
                    "Reduced data loading time by 60%",
                    "Implemented real-time updates",
                    "Served 10,000+ daily active users"
                ]
            },
            {
                name: "API Gateway",
                role: "Software Engineer",
                period: "Sep 2023 - Dec 2023",
                description: "Architected and developed centralized API gateway",
                technologies: ["Express", "Redis", "Docker"],
                achievements: [
                    "Handled 1M+ daily requests",
                    "Reduced service latency by 40%",
                    "Implemented rate limiting"
                ]
            },
            {
                name: "Mobile App",
                role: "Associate Software Engineer",
                period: "Jan 2023 - Aug 2023",
                description: "Core team member for company's first mobile app",
                technologies: ["React Native", "GraphQL", "AWS"],
                achievements: [
                    "4.8 star rating on App Store",
                    "100K+ downloads",
                    "Offline-first architecture"
                ]
            },
            {
                name: "Authentication System",
                role: "Associate Software Engineer",
                period: "Oct 2022 - Dec 2022",
                description: "Contributed to authentication system rebuild",
                technologies: ["OAuth", "JWT", "MongoDB"],
                achievements: [
                    "Implemented SSO",
                    "Enhanced security protocols",
                    "Reduced login time by 30%"
                ]
            }
        ]
    };

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.2 }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1
        }
    };

    const projects = [
        {
            title: "3D Car Config App",
            image: "/car-app.jpg",
            points: [
                "Created an immersive Ford Mustang GT configurator with real-time customization",
                "Engineered virtual test drive and dynamic 360° viewing experience",
                "Optimized memory footprint to 38MB, boosting performance by 40%"
            ]
        },
        {
            title: "Content Hub",
            image: "/launcher.jpg",
            points: [
                "Built a sleek TV app launcher with intuitive content discovery",
                "Designed dynamic app management system with drag-drop reorganization",
                "Crafted detailed app preview screens with rich metadata integration"
            ]
        },
        {
            title: "Interactive Multi-Screen App",
            image: "/multi-screen.jpg",
            points: [
                "Pioneered a WebRTC-powered second screen experience for TV control",
                "Built a versatile media canvas supporting videos, games, and live widgets",
                "Engineered real-time sync for seamless quad-screen content playback"
            ]
        },
        {
            title: "Ad Logic SDK",
            image: "/multi-screen.jpg",
            points: [
                "Architected a cross-platform ad integration SDK for OTT apps",
                "Integrated industry-standard viewability tracking with OM-SDK",
                "Simplified Ad implementation with plug-and-play developer tools"
            ]
        }
    ];

    return (
        <div className="bg-indigo w-[100vw] h-[100vh] flex flex-col relative">
            <NavBar selected="work" />

            <div className="flex-1 overflow-y-auto p-4 relative">
                <motion.header
                    initial={{ opacity: 0, x: -250 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="absolute left-[-50%] right-[-50%] top-20 text-2xl sm:text-3xl md:text-4xl font-bold p-4 rounded-lg bg-transparent flex items-center justify-center space-x-2 mb-[500px]"
                >
                    <h1 className="text-white font-bold text-[4vw] sm:text-[6vw] md:text-[6vw] lg:text-[3vw]">
                        Software Engineer @
                    </h1>
                    <motion.img
                        src="/synamedia-logo.png"
                        alt="Synamedia Logo"
                        className="h-8 sm:h-8 md:h-16 object-contain"
                        initial={{ opacity: 0, x: 550 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    />
                </motion.header>

                {/* main content */}
                <div className="relative mt-[150px] text-black text-center">
                    {/* <p>Let him cook !!!!!</p>
                    <div className="h-[200vh]"></div> */}
                    {projects.map((project, index) => (
                        <WorkExperienceCard key={index} project={project} index={index} />
                    ))}
                </div>
            </div>
        </div>
    );
}