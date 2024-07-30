"use client";
import React from "react";
import { CgCPlusPlus } from "react-icons/cg";
import { DiJavascript1, DiPython } from "react-icons/di";
import { SiSolidity, SiTypescript } from "react-icons/si";
import { GlareCard } from "../ui/glare-card";
import { FaRust } from "react-icons/fa";
function ProgrammingLanguages() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      <GlareCard className="flex flex-col items-center justify-center">
        <SiSolidity className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Solidity</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <FaRust className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Rust</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiTypescript className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Typescript</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <DiJavascript1 className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Javascript</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <CgCPlusPlus className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">C++</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <DiPython className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Python</p>
      </GlareCard>
    </div>
  );
}

export default ProgrammingLanguages;
