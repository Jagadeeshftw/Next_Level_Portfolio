"use client";
import React from "react";
import Typewriter from "typewriter-effect";

function Type() {
  return (
    <Typewriter
      options={{
        strings: [
          "Blockchain Developer",
          "Decentralized Application (DApp) Developer",
          "Smart Contract Developer",
          "Blockchain Solutions Architect",
        ],
        autoStart: true,
        loop: true,
        deleteSpeed: 50,
      }}
    />
  );
}

export default Type;
