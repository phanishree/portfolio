// Skills.jsx
"use client";
import React, { useState, useRef, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import { Canvas } from "@react-three/fiber";
import { View } from "@react-three/drei";
import NavBar from "../components/Navbar";
import { technologies } from "@/constants";
import BallCanvas from "../components/canvas/Ball";

function DraggableBall({ item, onDropBack }) {
    const [{ isDragging }, drag] = useDrag({
        type: item.name,
        item: { ...item },
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (droppedItem, monitor) => {
            if (!monitor.didDrop()) {
                onDropBack(droppedItem);
            }
        },
    });

    return (
        <div
            ref={drag}
            className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col items-center justify-center ${
                isDragging ? "opacity-50" : "opacity-100"
            }`}
        >
            <div className="w-full h-full">
                <BallCanvas icon={item.icon.src} />
            </div>
            {/* <p className="mt-2 text-center text-sm md:text-base">{item.name}</p> */}
        </div>
    );
}

function Placeholder({ expectedType, item, onDrop }) {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: expectedType,
        drop: (draggedItem) => onDrop(draggedItem, expectedType),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    return (
        <div
            ref={drop}
            className={`w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col items-center justify-center 
                rounded-full border-2 transition-all duration-200`}
        >
            {item ? (
                <div className="w-full h-full">
                    <BallCanvas icon={item.icon.src} />
                    {/* <p className="mt-2 text-center text-sm md:text-base">{item.name}</p> */}
                </div>
            ) : (
                <p className="text-center text-lightNeutral text-sm md:text-base">{expectedType}</p>
            )}
        </div>
    );
}

export default function Skills() {
    const containerRef = useRef();
    const [selected, setSelected] = useState("recruiters");
    
    const initialPlaceholders = technologies.map(tech => ({
        expectedType: tech.name,
        item: null,
    }));

    //Shuffer the balls to make it more fun for developers
    const shuffleArray = (array) => {
        let shuffledArray = [...array];
        for (let i = shuffledArray.length - 1; i > 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
        }
        return shuffledArray;
      };
    
    const [placeholders, setPlaceholders] = useState(initialPlaceholders);
    const [availableItems, setAvailableItems] = useState(technologies);

    useEffect(() => {
        setAvailableItems(shuffleArray(availableItems));
      }, [placeholders]);

    const handleDrop = (draggedItem, expectedType) => {
        if (draggedItem.name !== expectedType) return;

        setAvailableItems((prev) =>
            prev.filter((item) => item.name !== draggedItem.name)
        );

        setPlaceholders((prev) =>
            prev.map((p) =>
                p.expectedType === expectedType ? { ...p, item: draggedItem } : p
            )
        );
    };

    const handleDropBack = (item) => {
        setPlaceholders((prev) =>
            prev.map((p) =>
                p.item && p.item.name === item.name ? { ...p, item: null } : p
            )
        );

        setAvailableItems((prev) => {
            if (!prev.some((existingItem) => existingItem.name === item.name)) {
                return [...prev, item];
            }
            return prev;
        });
    };

    const isTouchDevice = () => {
        // console.log(TouchBackend);
        // console.log(HTML5Backend);
        if (typeof window === "undefined") return false;
        return (
            "ontouchstart" in window ||
            navigator.maxTouchPoints > 0 ||
            navigator.msMaxTouchPoints > 0
        );
    };

    return (
        <DndProvider
            backend={isTouchDevice()
                ? TouchBackend
                : HTML5Backend}

            options={ {enableTouchEvents: true}}
        >
            <div className="bg-mainBg min-h-screen w-full flex flex-col" ref={containerRef}>
                <NavBar selected="skills" />
                <div className="flex items-center justify-center flex-col p-4 lg:mt-[15dvh] mt-[5dvh]">
                    <Canvas
                        className="canvas"
                        style={{ position: "fixed", top: 0, left: 0, pointerEvents: "none" }}
                        eventSource={containerRef}
                        eventPrefix="client"
                    >
                        <View.Port />
                    </Canvas>

                    <p className="text-lightNeutral text-base text-center mb-[10px]">Tech stacks i have worked with</p>


                    <div className="hidden lg:flex items-center justify-center space-x-4 p-4 w-full">
                        <button
                            onClick={() => setSelected("recruiters")}
                            className={`px-4 py-2 rounded-full border-2 text-base ${
                                selected === "recruiters"
                                    ? "border-borderColor text-lightNeutral shadow-md shadow-accentColor/50"
                                    : "border-transparent text-lightNeutral hover:border-accentColor hover:text-grey opacity-50"
                            }`}
                        >
                            For Recruiters
                        </button>
                        <button
                            onClick={() => setSelected("everyone")}
                            className={`px-4 py-2 rounded-full border-2 text-base ${
                                selected === "everyone"
                                    ? "border-borderColor text-lightNeutral shadow-md shadow-accentColor/50"
                                    : "border-transparent text-lightNeutral hover:border-accentColor hover:text-grey opacity-50"
                            }`}
                        >
                            For Developers
                        </button>
                    </div>

                    {selected === "recruiters" && (
                        <div className="flex flex-wrap justify-center gap-6">
                            {technologies.map((technology) => (
                                <div
                                    className="w-28 h-28 sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32 flex flex-col justify-center items-center"
                                    key={technology.name}
                                >
                                    <div className="w-full h-full">
                                        <BallCanvas icon={technology.icon.src} />
                                    </div>
                                    <p className="text-sm md:text-base text-lightNeutral">{technology.name}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {selected === "everyone" && (
                        <div className="w-full max-w-7xl mx-auto">
                            <div className="flex flex-wrap justify-center gap-6">
                                {placeholders.map((placeholder) => (
                                    <Placeholder
                                        key={placeholder.expectedType}
                                        expectedType={placeholder.expectedType}
                                        item={placeholder.item}
                                        onDrop={handleDrop}
                                    />
                                ))}
                            </div>

                            <div className="mt-8 border-t border-cardBorder pt-6">
                                <h3 className="text-base text-lightNeutral mb-4 text-center">
                                    Drag and drop the icons to the respective placeholders. That is, if you can!
                                </h3>
                                <div className="overflow-y-none max-h-[80vh] px-4 py-4 rounded-lg bg-cardBg/30">
                                    {availableItems.length > 0 ? <div className="flex flex-wrap justify-center gap-6">
                                        {availableItems.map((item) => (
                                            <DraggableBall
                                                key={item.name}
                                                item={item}
                                                onDropBack={handleDropBack}
                                            />
                                        ))}
                                    </div>
                                    : <p className="text-center text-lightNeutral text-base">Yay ! 10 points to you 🎉</p>}
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </DndProvider>
    );
}
