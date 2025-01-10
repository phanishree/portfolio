import React, { useState } from "react";
import Link from "next/link";
import { HiMenu, HiX } from "react-icons/hi";

export default function NavBar() {

    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };


    return (
        <div className="navBarContainer fixed w-[100vw] lg:w-[60vw] lg:top-[1vh] lg:left-[20vw] right-0 bg-gradient-to-r from-[#333333] via-[#444444] to-[#333333] p-4 lg:rounded-2xl shadow-lg flex items-center justify-center z-50 backdrop-blur-md bg-opacity-80 border border-gray-700">

            <div className="flex items-center justify-center">
                {/* <div className="lg:hidden text-black font-bold text-lg">Phanishree</div> */}
                {/* Navigation Links for desktop*/}
                <div className="hidden lg:flex space-x-6">
                    <Link href="/home">
                        <div className="text-white font-medium hover:underline">Home</div>
                    </Link>
                    <Link href="/work">
                        <div className="text-white font-medium hover:underline">Work</div>
                    </Link>
                    <Link href="/skills">
                        <div className="text-white font-medium hover:underline">Skills</div>
                    </Link>
                    <Link href="/projects">
                        <div className="text-white font-medium hover:underline">Projects</div>
                    </Link>
                    <Link href="/resume">
                        <div className="text-white font-medium hover:underline">Resume</div>
                    </Link>
                    <Link href="/contact">
                        <div className="text-white font-medium hover:underline">Contact</div>
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
                <div className="lg:hidden mt-4 bg-white rounded-lg shadow-lg p-4 absolute m-4 top-4 right-0"> 

                {/* Hamburger Menu for Mobile */}
                    <Link href="/home">
                        <div className="text-black font-medium py-2 hover:underline">Home</div>
                    </Link>
                    <Link href="/work">
                        <div className="text-black font-medium py-2 hover:underline">Work</div>
                    </Link>
                    <Link href="/skills">
                        <div className="text-black font-medium py-2 hover:underline">Skills</div>
                    </Link>
                    <Link href="/projects">
                        <div className="text-black font-medium py-2 hover:underline">Projects</div>
                    </Link>
                    <Link href="/resume">
                        <div className="text-black font-medium py-2 hover:underline">Resume</div>
                    </Link>
                    <Link href="/contact">
                        <div className="text-black font-medium py-2 hover:underline">Contact</div>
                    </Link>
                </div>
            )}
        </div>
    );
}
