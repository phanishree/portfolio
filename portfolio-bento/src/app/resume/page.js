"use client"
import React, {useState, useEffect} from "react";
import DocViewer, { DocViewerRenderers } from "@cyntler/react-doc-viewer";
import "@cyntler/react-doc-viewer/dist/index.css";
import NavBar from "../components/Navbar";


export default function ResumeViewer() {

    const docs = [
        { uri: "/phani-resume.pdf", fileType: "pdf" },
    ];

    const [defaultZoom, setDefaultZoom] = useState(0.4); // Default for laptop

    useEffect(() => {
        // Media query to detect screen width
        const mediaQuery = window.matchMedia("(max-width: 768px)"); // Mobile breakpoint
        const updateZoom = () => {
            if (mediaQuery.matches) {
                setDefaultZoom(1.3); // Mobile zoom
            } else {
                setDefaultZoom(0.4); // Laptop zoom
            }
        };

        // Initial check and adding event listener
        updateZoom();
        mediaQuery.addEventListener("change", updateZoom);

        // Cleanup event listener
        return () => mediaQuery.removeEventListener("change", updateZoom);
    }, []);

    
    return <>
    <div className="bg-mainBg w-full h-full">
    <NavBar selected="resume"/>
    <DocViewer
            documents={docs}
            pluginRenderers={DocViewerRenderers}
            config={{
                header: {
                    disableHeader: false,
                    disableFileName: true,
                    retainURLParams: false
                },
                pdfZoom: {
                    defaultZoom: defaultZoom, // 1 as default,
                    zoomJump: 0.2, // 0.1 as default,
                },
            }}
            
            style={{ width: "100vw", height: "100vh", backgroundColor: "transparent" }} />
    </div>
            </>;
}