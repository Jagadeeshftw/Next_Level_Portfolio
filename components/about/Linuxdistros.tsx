import React from "react";
import { FaUbuntu, FaDebian } from "react-icons/fa6";
import { SiRockylinux } from "react-icons/si";
import { FaCentos, FaFedora } from "react-icons/fa";
import { SiAlpinelinux } from "react-icons/si";
import { GlareCard } from "../ui/glare-card";

function Linuxdistros() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      <GlareCard className="flex flex-col items-center justify-center">
        <FaCentos className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">CentOS</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiRockylinux className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Rocky Linux</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <FaUbuntu className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Ubuntu</p>
      </GlareCard>

      <GlareCard className="flex flex-col items-center justify-center">
        <SiAlpinelinux className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Alpine</p>
      </GlareCard>
    </div>
  );
}

export default Linuxdistros;
