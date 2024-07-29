"use client";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "@/utils/cn";
import { HiHomeModern } from "react-icons/hi2";
import { GrProjects } from "react-icons/gr";
import { GrUserWorker } from "react-icons/gr";
import { GrDocumentUser } from "react-icons/gr";
import Projects from "@/data/Projects";

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed top-5 inset-x-0 sm:max-w-lg max-w-xs mx-auto z-50",
        className
      )}
    >
      <Menu setActive={setActive}>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Home"
          icon={HiHomeModern}
          noChildren={true}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/intro">Introduction</HoveredLink>
            <HoveredLink href="/Contact">Contact</HoveredLink>
          </div>
        </MenuItem>

        <MenuItem
          setActive={setActive}
          active={active}
          item="About"
          icon={GrUserWorker}
          noChildren={true}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/hobby">Hobby</HoveredLink>
            <HoveredLink href="/skills">Skills</HoveredLink>
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Projects"
          icon={GrProjects}
          noChildren={false}
        >
          <div className="text-sm grid md:grid-cols-2 xl:grid-cols-3 grid-cols-1 gap-10 p-1 h-full object-cover overflow-y-auto max-h-96">
            {Projects.map((project) => (
              <ProductItem
                title={project.Title}
                href={project.DemoLink}
                src={project.Image}
                description={project.oneLineDescription}
                key={project.Id}
              />
            ))}
          </div>
        </MenuItem>
        <MenuItem
          setActive={setActive}
          active={active}
          item="Resume"
          icon={GrDocumentUser}
          noChildren={true}
        >
          <div className="flex flex-col space-y-4 text-sm">
            <HoveredLink href="/resume">Resume</HoveredLink>
          </div>
        </MenuItem>
      </Menu>
    </div>
  );
}

export default Navbar;
