import React from "react";

export default function RoundedArrow() {

    return (<div className="hidden lg:flex absolute bottom-2 right-2 sm:bottom-4 sm:right-4 w-8 h-8 sm:w-10 sm:h-10 bg-black text-lightNeutral rounded-full items-center justify-center transition-transform duration-300 group-hover:rotate-[-45deg]">
        <span className="text-lg sm:text-xl">→</span>
        <div className="absolute inset-0 border-2 border-white rounded-full scale-0 group-hover:scale-100 transition-transform duration-300 opacity-100"></div>
    </div>)
}