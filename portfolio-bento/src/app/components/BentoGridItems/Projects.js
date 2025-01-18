"use client"
import React from "react";
import Link from "next/link";
import { Code } from 'lucide-react';
import RoundedArrow from "../RoundedArrow";

export default function Projects() {
    return (
        <Link href="/projects" scroll={false} className="w-full h-full flex items-center justify-center group">
            <div className="w-full h-full text-white bg-mainBg border-borderColor rounded-lg shadow-lg flex flex-col items-center justify-center relative p-6 transform hover:scale-101 hover:shadow-lg border border-cardBorder hover:border-green-500 transition-all duration-300 cursor-pointer">
                {/* Main Content */}
                <div className="flex flex-col items-center space-y-6">
                    <p className="text-2xl font-bold">Projects</p>

                    {/* Last Project Section */}
                    <div className="flex flex-col items-center space-y-2">
                        <p className="text-gray-400 text-sm">Recent Project</p>
                        <div className="flex items-center space-x-3">
                            <Code className="w-5 h-5 text-green-400" />
                            <p className="text-lg">Code Generator</p>
                        </div>
                    </div>
                    <RoundedArrow />
                </div>
            </div>
        </Link>
    );
}