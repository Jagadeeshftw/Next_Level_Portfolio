import React from "react";
import { SiKubernetes, SiOpenstack, SiVagrant, SiPuppet } from "react-icons/si";
import { FaDocker, FaGitAlt, FaJenkins } from "react-icons/fa";
import { FaAws } from "react-icons/fa";
import { SiAnsible } from "react-icons/si";
import { GlareCard } from "../ui/glare-card";

function DevOps() {
  return (
    <div className="flex flex-wrap justify-center gap-10">
      <GlareCard className="flex flex-col items-center justify-center">
        <FaGitAlt className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Version Control</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <FaDocker className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Docker</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiKubernetes className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Kubernetes</p>
      </GlareCard>

      <GlareCard className="flex flex-col items-center justify-center">
        <SiOpenstack className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Openstack</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <FaAws className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">AWS</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiAnsible className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Ansible</p>
      </GlareCard>

      <GlareCard className="flex flex-col items-center justify-center">
        <FaJenkins className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Jenkins</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiPuppet className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Puppet</p>
      </GlareCard>
      <GlareCard className="flex flex-col items-center justify-center">
        <SiVagrant className="w-2/3 h-2/3 p-8" />
        <p className="text-white font-bold text-xl mt-4">Vagrant</p>
      </GlareCard>
    </div>
  );
}

export default DevOps;
