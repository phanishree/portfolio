"use client";
import React, { useState } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import { TouchBackend } from "react-dnd-touch-backend";
import NavBar from "../components/Navbar";
import { technologies } from "@/constants";
import BallCanvas from "../components/canvas/Ball";

const ItemType = "BALL";

function DraggableBall({ item, fromList, onDropBack, type }) {
    const [{ isDragging }, drag] = useDrag({
        type: type,
        item,
        collect: (monitor) => ({
            isDragging: monitor.isDragging(),
        }),
        end: (droppedItem, monitor) => {
            if (!monitor.didDrop() && fromList) {
                onDropBack(droppedItem);
            }
        },
    });

    return (
        <div
            ref={drag}
            className={`w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center ${
                isDragging ? "opacity-50" : "opacity-100"
            }`}
        >
            <BallCanvas icon={item.icon.src} label={item.name} />
            <p className="mt-2 text-center text-sm md:text-base">{item.name}</p>
        </div>
    );
}

function Placeholder({ label, acceptedItem, onDrop }) {
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: label,
        drop: (item) => onDrop(item, label),
        collect: (monitor) => ({
            isOver: monitor.isOver(),
            canDrop: monitor.canDrop(),
        }),
    });

    return (
        <div
            ref={drop}
            className={`w-24 h-24 md:w-32 md:h-32 flex flex-col items-center justify-center border-2 ${
                isOver ? "border-accentColor" : "border-dashed border-cardBorder"
            }`}
        >
            {acceptedItem ? (
                <BallCanvas icon={acceptedItem.icon.src} label={label} />
            ) : (
                <p className="mt-2 text-center text-lightNeutral text-sm md:text-base">{label}</p>
            )}
        </div>
    );
}

export default function Skills() {
    const [selected, setSelected] = useState("everyone");
    const initialPlaceholders = technologies.map((tech) => ({
        label: tech.name,
        item: null,
    }));
    const [placeholders, setPlaceholders] = useState(initialPlaceholders);
    const [availableItems, setAvailableItems] = useState(technologies);

    const handleDrop = (item, label) => {
        setAvailableItems((prev) =>
            prev.filter((availableItem) => availableItem.name !== item.name)
        );
        setPlaceholders((prev) =>
            prev.map((placeholder) =>
                placeholder.label === label
                    ? { ...placeholder, item }
                    : placeholder
            )
        );
    };

    const handleDropBack = (item) => {
        setPlaceholders((prev) =>
            prev.map((placeholder) =>
                placeholder.item?.name === item.name ? { ...placeholder, item: null } : placeholder
            )
        );
        setAvailableItems((prev) => [...prev, item]);
    };

    // Detect touch device
    const isTouchDevice = () => {
        if (typeof window === 'undefined') return false;
        return (('ontouchstart' in window) ||
           (navigator.maxTouchPoints > 0) ||
           (navigator.msMaxTouchPoints > 0));
    };

    return (
        <DndProvider backend={isTouchDevice() ? TouchBackend : HTML5Backend}>
            <div className="bg-mainBg min-h-screen w-full flex flex-col">
                <NavBar selected="skills" />
                <div className="flex items-center justify-center flex-col p-4 mt-[10vh]">
                    {/* Toggle Buttons */}
                    <div className="flex items-center justify-center space-x-2 md:space-x-4 p-2 md:p-4 w-full">
                        <button
                            onClick={() => setSelected("recruiters")}
                            className={`px-3 md:px-6 py-1 md:py-2 rounded-full border-2 text-sm md:text-base ${
                                selected === "recruiters"
                                    ? "border-borderColor text-accentText shadow-md shadow-accentColor/50"
                                    : "border-transparent text-lightNeutral hover:border-accentColor hover:text-accentText opacity-50"
                            }`}
                        >
                            For Recruiters
                        </button>
                        <button
                            onClick={() => setSelected("everyone")}
                            className={`px-3 md:px-6 py-1 md:py-2 rounded-full border-2 text-sm md:text-base ${
                                selected === "everyone"
                                    ? "border-borderColor text-accentText shadow-md shadow-accentColor/50"
                                    : "border-transparent text-lightNeutral hover:border-accentColor hover:text-accentText opacity-50"
                            }`}
                        >
                            For Everyone
                        </button>
                    </div>

                    {/* Recruiters View */}
                    {selected === "recruiters" && (
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 md:gap-10">
                            {technologies.map((technology) => (
                                <div
                                    className="w-24 h-24 md:w-32 md:h-32 flex flex-col justify-center items-center"
                                    key={technology.name}
                                >
                                    <BallCanvas icon={technology.icon.src} label={technology.name} />
                                    <p className="text-sm md:text-base">{technology.name}</p>
                                </div>
                            ))}
                        </div>
                    )}

                    {/* Everyone View */}
                    {selected === "everyone" && (
                        <>
                            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6 mb-6">
                                {placeholders.map(({ label, item }) => (
                                    <Placeholder
                                        key={label}
                                        label={label}
                                        acceptedItem={item}
                                        onDrop={handleDrop}
                                    />
                                ))}
                            </div>
                            <div className="flex flex-wrap justify-center gap-4">
                                {availableItems.map((item) => (
                                    <DraggableBall
                                        key={item.name}
                                        item={item}
                                        fromList
                                        onDropBack={handleDropBack}
                                        type={item.name}
                                    />
                                ))}
                            </div>
                        </>
                    )}
                </div>
            </div>
        </DndProvider>
    );
}