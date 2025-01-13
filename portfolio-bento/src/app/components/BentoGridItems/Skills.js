import React from "react";
import Link from "next/link";
import RoundedArrow from "../RoundedArrow";

export default function Skills() {
    return (
        <Link href="/skills" scroll={false} className="w-full h-full flex items-center justify-center group">
            <div className="w-full h-full text-white  bg-slateBlue rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4 p-4 transform hover:scale-101 hover:shadow-lg transition duration-300 cursor-pointer">
                <p className="text-2xl font-bold">Skills</p>
                <video src="./skills.mp4" autoPlay loop muted className="w-[175px] h-[100px] object-cover" />
                
                <RoundedArrow />
            </div>

        </Link>
    )
}