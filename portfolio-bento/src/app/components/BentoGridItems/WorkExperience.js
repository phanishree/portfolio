"use client"
import React from "react";
import { DotLottieReact } from '@lottiefiles/dotlottie-react';

export default function WorkExperience() {
    return (
      <div className="w-full h-full text-white  bg-darkNavy rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4 p-4 transform hover:scale-101 hover:shadow-lg transition duration-300 cursor-pointer">
        {/* Title */}
        <p className="text-2xl font-bold">Work Experience</p>
  
        {/* Lottie Animation */}
        <DotLottieReact
          src="https://lottie.host/78245a4d-470a-4f52-b055-23ea3330bad2/D4PrnIXrbg.lottie"
          loop
          autoplay
          className="w-48 h-48"
        />
  
        {/* Work Info */}
        <section className="text-center">
          <p className="text-lg font-medium">Currently working at:</p>
          <p className="text-xl font-semibold">Synamedia</p>
        </section>
      </div>
    );
  }