"use client"
import React, {useEffect, useState} from "react";
import { Github, Mail, Phone, Printer } from 'lucide-react';
import "./Socials.css";

export default function Socials() {

    const SOCIAL_MEDIA_DATA = [
        { name: 'LinkedIn', icon: () => <span className="font-bold text-xl">in</span>, href: 'https://www.linkedin.com/in/phanishree-kommalapati/' },
        { name: 'Github', icon: Github, href: 'https://github.com/phanishree' },
        { name: 'Mail', icon: Mail, href: 'mailto:phanis18191@gmail.com' },
        { name: 'Phone', icon: Phone, href: '#' },
        { name: 'Fax', icon: Printer, href: '#' },

    ];

    const [showToast, setShowToast] = useState(false);
    const [toastMessage, setToastMessage] = useState("");

    useEffect(()=>{

        if(showToast){
            setTimeout(()=>{
                setShowToast(false);
            }, 2000);
        }
    },[showToast]);





    async function handleClick(content) {
        console.log(content);
        setShowToast(true);
        try {
            if (content === "Phone") {
                await navigator.clipboard.writeText("9380794535");
                setToastMessage("Phone number copied to clipboard");
            }else if(content === "Fax"){
                setToastMessage("Just kidding !");
            }
        } catch (err) {
            console.error("Failed to copy: ", err);
        }
    }

    //No need to scale up or add border on hover for this item
    return (<div className=" relative w-full h-full text-white  bg-mainBg border-borderColor rounded-lg shadow-lg flex flex-col items-center justify-center space-y-4 p-4 border border-cardBorder">
        <p className="text-2xl font-bold">Socials</p>
        <div className="flex items-start text-center max-xs:flex-col">
            <div className="board flex items-center justify-center mb-4">
                {SOCIAL_MEDIA_DATA.map(({ name, href, icon: Icon }) => (
                    <div
                        key={name}
                        className="key-position"
                        style={{ transform: 'rotateZ(0turn) rotateY(0.05turn) rotateX(-0.1turn)' }}
                    >
                        {href !== "#" ? <a
                            href={href}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={name}
                            className={name === "Github" ? "spaceBar key" : "key"}
                        >
                            <Icon className="icon" />
                        </a> :
                            <button className="key"
                                onClick={() => handleClick(name)}
                                aria-label={name}
                            >
                                <Icon className="icon" />
                            </button>}
                    </div>
                ))}
            </div>

        </div>
        {showToast && <div className="toast absolute bottom-1 opacity-50 transition-opacity transition-transform transform duration-300 ease-in-out">{toastMessage}</div>}
    </div>);
}