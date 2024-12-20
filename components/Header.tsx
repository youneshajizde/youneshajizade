"use client";

import React from "react";
import { Button } from "./ui/button";
import { motion } from "framer-motion";
import Link from "next/link";

const typingEffect = {
  hidden: { opacity: 1 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05, // Delay between letters
    },
  },
};

const letter = {
  hidden: { opacity: 0, transform: "translateY(0)" },
  visible: { opacity: 1, transform: "translateY(0)" },
};

function Header() {
  const headingText =
    "A developer focused on crafting intuitive, user-centric apps, software, and websites.";

  return (
    <header className="mt-8 flex flex-col space-y-8">
      <div className="flex flex-col space-y-6">
        <div className="animated-div flex flex-wrap overflow-hidden">
          <motion.h1
            className="font-normal text-[1.50rem] max-w-full w-full"
            variants={typingEffect}
            initial="hidden"
            animate="visible"
          >
            {headingText.split("").map((char, index) => (
              <motion.span key={index} variants={letter}>
                {char === " " ? "\u00A0" : char}
              </motion.span>
            ))}
          </motion.h1>
        </div>

        <p className="text-sm font-medium">
          I collaborate with SaaS founders, indie-makers, and startups to design
          digital interfaces that help them achieve their goals.
        </p>
      </div>

      <div className="flex items-center gap-5">
        <Button className="bg-black rounded-full">
          <Link href={"https://www.linkedin.com/in/youneshajizade/"}>
            Open for Work - Linkedin
          </Link>
        </Button>

        <span className="underline font-bold cursor-pointer">Download CV</span>
      </div>

      <ul className="flex items-center gap-6 text-2xl text-gray-200 font-semibold">
        <li className="hover:text-gray-400 transition-all cursor-pointer">
          Shelterkoooni
        </li>
        <li className="hover:text-gray-400 transition-all cursor-pointer">
          EvCon
        </li>
        <li className="hover:text-gray-400 transition-all cursor-pointer">
          Guardian
        </li>
        <li className="hover:text-gray-400 transition-all cursor-pointer">
          CareSync
        </li>
      </ul>
    </header>
  );
}

export default Header;
