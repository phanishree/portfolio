"use client"
import React from "react";
import Link from "next/link";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';


export default function Resume() {
    return (<Link href="/resume" className="w-full h-full flex items-center justify-center">
        <div className="w-full h-full text-white  bg-darkNavy rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4 p-4 transform hover:scale-101 hover:shadow-lg transition duration-300 cursor-pointer">
            <p className="text-2xl font-bold">Resume</p>

            {/* Lottie Animation */}
            <DotLottieReact
                src="https://lottie.host/4949dcc7-e282-400e-8203-42f252924e02/IHt7YxhPpI.lottie"
                loop
                autoplay
            />

        </div>
    </Link>)
}
