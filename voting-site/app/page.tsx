"use client";
import React from "react";
import Navbar from "./components/navigation_bar/navbar"
import VotingMenu from "./components/voting_menu/voting_menu"

export default function Home() {
  return (
		<div>
      {/* Creates the title */}
      <header className="header">
        <Navbar />
        <h1 className="header__text">Vietnamese Student Association (VSA)</h1>
      </header>

      <VotingMenu />
    </div>
	);
}
