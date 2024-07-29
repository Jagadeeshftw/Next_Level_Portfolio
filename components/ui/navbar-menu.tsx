"use client";
import React, { useRef } from "react";
import {
  motion,
  useAnimationFrame,
  useMotionTemplate,
  useMotionValue,
  useTransform,
} from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { MovingBorder } from "./moving-border";
import { BackgroundGradient } from "./background-gradient";

const transition = {
  type: "spring",
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  icon: Icon,
  noChildren,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  icon: React.ElementType;
  noChildren: boolean;
  children?: React.ReactNode;
}) => {
  return (
    <Link href={item === "Home" ? "/" : item}>
      <div onMouseEnter={() => setActive(item)} className="relative">
        <motion.p
          transition={{ duration: 0.3 }}
          className="cursor-pointer hover:opacity-[0.9] text-white flex justify-around gap-2 align-baseline"
        >
          <Icon className="mt-1 hidden sm:inline" />
          <span className="">{item}</span>
        </motion.p>

        {active !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0.85, y: 10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={transition}
          >
            {active === item && !noChildren && (
              <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
                <motion.div
                  transition={transition}
                  layoutId="active"
                  className="relative bg-[#71717a] backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-800 shadow-xl"
                >
                  <motion.div layout className="w-max h-full p-4 relative z-10">
                    {children}
                  </motion.div>
                </motion.div>
              </div>
            )}
          </motion.div>
        )}
      </div>
    </Link>
  );
};

export const Menu = ({
  setActive,
  children,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
}) => {
  return (
    <BackgroundGradient className="rounded-full bg-gray-1000">
      <nav
        onMouseLeave={() => setActive(null)}
        className="relative rounded-full w-full h-full  border-transparent bg-gray-1000 border-black shadow-input flex justify-center md:space-x-6 space-x-3 px-1 py-4"
      >
        {children}
      </nav>
    </BackgroundGradient>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: any;
}) => {
  return (
    <Link href={href} className="flex space-x-2">
      <Image
        src={src}
        width={140}
        height={70}
        alt={title}
        className="flex-shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-white">{title}</h4>
        <p className=" text-sm max-w-[10rem] text-neutral-300">{description}</p>
      </div>
    </Link>
  );
};

export const HoveredLink = ({ children, ...rest }: any) => {
  return (
    <Link {...rest} className=" text-neutral-200">
      {children}
    </Link>
  );
};
