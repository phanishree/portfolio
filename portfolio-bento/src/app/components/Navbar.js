import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar({ selected }) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const getLinkClass = (linkName) =>
        selected === linkName
            ? "text-white font-bold underline"
            : "text-white font-medium hover:underline";

    return (
        <div className="navBarContainer fixed w-[100vw] lg:w-[60vw] lg:top-[1vh] lg:left-[20vw] right-0 bg-gradient-to-r from-[#333333] via-[#444444] to-[#333333] p-4 lg:rounded-2xl shadow-lg flex items-center justify-center z-50 backdrop-blur-md bg-opacity-80 border border-gray-700">
            <div className="flex items-center justify-center">
                {/* Navigation Links for desktop */}
                <div className="hidden lg:flex space-x-6">
                    <Link href="/home">
                        <div className={getLinkClass("home")}>Home</div>
                    </Link>
                    <Link href="/work">
                        <div className={getLinkClass("work")}>Work</div>
                    </Link>
                    <Link href="/skills">
                        <div className={getLinkClass("skills")}>Skills</div>
                    </Link>
                    <Link href="/projects">
                        <div className={getLinkClass("projects")}>Projects</div>
                    </Link>
                    <Link href="/resume">
                        <div className={getLinkClass("resume")}>Resume</div>
                    </Link>
                    <Link href="/contact">
                        <div className={getLinkClass("contact")}>Contact</div>
                    </Link>
                </div>
            </div>

            {/* Hamburger Menu for Mobile */}
            <div className="flex justify-end absolute right-[2vw]">
                <button
                    onClick={toggleMenu}
                    className="lg:hidden right-0 text-black text-3xl focus:outline-none"
                >
                    {isMenuOpen ? <HiX /> : <HiMenu />}
                </button>
            </div>
            {/* Dropdown Menu (Mobile View) */}
            {isMenuOpen && (
                <div className="lg:hidden mt-4 bg-black rounded-lg shadow-lg p-4 absolute m-4 top-4 right-0">
                    <Link href="/home">
                        <div className={getLinkClass("home")}>Home</div>
                    </Link>
                    <Link href="/work">
                        <div className={getLinkClass("work")}>Work</div>
                    </Link>
                    <Link href="/skills">
                        <div className={getLinkClass("skills")}>Skills</div>
                    </Link>
                    <Link href="/projects">
                        <div className={getLinkClass("projects")}>Projects</div>
                    </Link>
                    <Link href="/resume">
                        <div className={getLinkClass("resume")}>Resume</div>
                    </Link>
                    <Link href="/contact">
                        <div className={getLinkClass("contact")}>Contact</div>
                    </Link>
                </div>
            )}
        </div>
    );
}
