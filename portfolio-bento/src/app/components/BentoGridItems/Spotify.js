import React from "react";
import { RecentlyPlayed } from "../RecentlyPlayed";


export default function Spotify() {
    return (<div className=" relative w-full h-full text-white  bg-mainBg border-borderColor rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4 p-4 border border-cardBorder">
    <RecentlyPlayed/>
    </div>);
}