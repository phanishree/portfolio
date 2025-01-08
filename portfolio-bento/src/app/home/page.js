"use client"
import React from "react";
import Portfolio from "../components/PortfolioHome";
import Popup from "../components/Popup";

export default function HomePage() {
    return (
      <main>
        <Popup />
        <Portfolio />
      </main>
    );
  }