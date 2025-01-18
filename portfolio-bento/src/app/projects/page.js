"use client"
import React, { useState } from 'react';
import { Github, ExternalLink, Code } from 'lucide-react';
import NavBar from '../components/Navbar';

const ProjectCard = ({ project, index }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (

        <div
            className={`relative group rounded-2xl p-6 transition-all duration-500 ease-out
        ${isHovered ? 'scale-[1.02] shadow-2xl' : 'shadow-lg'}
        ${index % 2 === 0 ? 'lg:translate-y-12' : ''}
        bg-[hsl(215,24%,10%)]
      `}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="relative">
                <div className="mb-6 relative">
                    <div className="w-full h-48 rounded-xl bg-gradient-to-br from-[hsl(215,24%,12%)] to-[hsl(215,24%,15%)] flex items-center justify-center overflow-hidden">
                        <div className={`transition-transform duration-700 ${isHovered ? 'scale-110' : 'scale-100'}`}>
                            <Code size={48} className="text-green-400" />
                        </div>

                        <div className="absolute inset-0">
                            {[...Array(3)].map((_, i) => (
                                <div
                                    key={i}
                                    className="absolute h-[1px] w-full bg-gradient-to-r from-transparent via-green-500/30 to-transparent opacity-30"
                                    style={{
                                        top: `${(i + 1) * 25}%`,
                                        transform: `rotate(${i * 5}deg)`,
                                        animation: `slide ${3 + i}s linear infinite`
                                    }}
                                />
                            ))}
                        </div>
                    </div>
                </div>

                {/* Project Title */}
                <h3 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-lightNeutral">
                    {project.title}
                </h3>

                <p className="text-gray-400 mb-6 leading-relaxed">
                    {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                        <span
                            key={tagIndex}
                            className="px-4 py-1.5 text-sm rounded-full bg-[hsl(215,24%,12%)] text-lightNeutral font-medium border border-blue-500/20"
                        >
                            {tag}
                        </span>
                    ))}
                </div>


                {/* Collaborators */}


                {
                    project.collaborators && project.collaborators.length > 0 && (
                        <div className="flex flex-wrap gap-2 mb-6">
                        <div className="text-gray-400 mb-2 leading-relaxed">Collaborators:</div>
                            {project.collaborators.map((collaborator, collaboratorIndex) => (
                               
                                <a
                                    href={collaborator.link}
                                    key={collaboratorIndex}
                                    className="px-4 py-1.5 text-sm rounded-full bg-[hsl(215,24%,12%)] text-lightNeutral font-medium border border-blue-500/20"
                                >
                                    {collaborator.name}
                                </a>
                             
                            ))}
                        </div>)
                }

                {/* Links */}
                <div className="flex gap-4">
                    <a
                        href={project.githubLink}
                        className="p-2 rounded-lg hover:bg-[hsl(215,24%,12%)] transition-colors"
                        aria-label="View GitHub Repository"
                    >
                        <Github className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
                    </a>
                    {project.liveLink.length > 2 && <a
                        href={project.liveLink}
                        className="p-2 rounded-lg hover:bg-[hsl(215,24%,12%)] transition-colors"
                        aria-label="View Live Demo"
                    >
                        <ExternalLink className="w-5 h-5 text-gray-400 hover:text-blue-400 transition-colors" />
                    </a>}
                </div>
            </div>
        </div>
    );
};

const ProjectsSection = () => {
    const projects = [
        {
            title: "Music Player App",
            description: "A desktop app for playing music. Features include playlists, favourite, trends and many more with a beautiful UI.",
            tags: ["Java", "JavaFx", "MySQL"],
            collaborators: [{name: "Rachitha", link: "hchdc"}],
            githubLink: "https://github.com/phanishree/MusicPlayer",
            liveLink: "#",
        },
        {
            title: "My Portfolio",
            description: `This. The one you're looking at right now 😄.\nMy portfolio`,
            tags: ["Next.js", "React.js", "Three.js", "Tailwind CSS"],
            githubLink: "https://github.com/phanishree/portfolio",
            liveLink: "https://www.phanishree.dev/",
        },
        {
            title: "Code generator using LLM",
            description: "A code generator that uses LLM to generates server code and testcases in Node.Js. This was part of a hacakthon we participated in.",
            tags: ["Node.js", "OpenAi (LLM)", "JavaScript"],
            collaborators: [{name:"Greeshma", link: "hchdc"}, {name: "Rachitha", link: "hchdc"}, {name: "Gokul", link: "hchdc"}, {name: "Ganesh", link: "hchdc"}],
            githubLink: "https://github.com/phanishree/hackathon_repo",
            liveLink: "#",
        }
    ];

    return (
        <div className="bg-mainBg min-h-screen w-full flex flex-col">
            <NavBar selected="projects" />

            <div
                className="min-h-screen bg-[hsl(215,26%,7.5%)] py-24 px-6 relative overflow-hidden"
            >
                {/* Background Elements */}
                {/* <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute -top-1/2 -left-1/4 w-1/2 h-1/2 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-3xl" />
                    <div className="absolute -bottom-1/2 -right-1/4 w-1/2 h-1/2 bg-gradient-to-br from-cyan-500/10 to-blue-400/10 rounded-full blur-3xl" />
                </div> */}

                <div className="max-w-7xl mx-auto relative">
                    {/* Section Header */}
                    <div className="text-center mb-10">
                        <h2 className="text-5xl font-bold mb-2 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-lightNeutral">
                            Featured Projects
                        </h2>
                    </div>

                    {/* Projects Grid */}
                    <div className="grid gap-8 md:gap-12 md:grid-cols-2 lg:grid-cols-3">
                        {projects.map((project, index) => (
                            <ProjectCard key={index} project={project} index={index} />
                        ))}
                    </div>
                </div>

                {/* CSS for animations */}
                <style jsx>{`
        @keyframes slide {
          0% { transform: translateX(-100%) }
          100% { transform: translateX(100%) }
        }
      `}</style>
            </div>
        </div>
    );
};

export default ProjectsSection;