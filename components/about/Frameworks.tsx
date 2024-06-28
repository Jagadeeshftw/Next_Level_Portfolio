import React from "react";
import { DiReact, DiNodejs } from "react-icons/di";
import { SiWeb3Dotjs, SiBootstrap, SiExpress, SiRedux } from "react-icons/si";
import { FaEthereum } from "react-icons/fa";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { GlareCard } from "../ui/glare-card";

function Frameworks() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      <GlareCard className="flex flex-col items-center justify-center">
        <FaEthereum className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Ethereum</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiWeb3Dotjs className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Web3.js</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <DiReact className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">React</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiRedux className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Redux</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <RiNextjsFill className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Nextjs</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <DiNodejs className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Nodejs</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiExpress className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Express</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <RiTailwindCssFill className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Tailwind</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiBootstrap className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Bootstrap</p>
      </GlareCard>
    </div>
  );
}

export default Frameworks;
