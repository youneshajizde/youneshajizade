"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import { Badge } from "./ui/badge";
import Tech from "./Tech";
import Link from "next/link";
import { Github, Radio } from "lucide-react";

type ProjectProps = {
  image: string;
  title: string;
  desc: string;
  highlights: string[];
  stacks: string[];
  isLive?: boolean;
};

function Project({
  image,
  title,
  desc,
  highlights,
  stacks,
  isLive,
}: ProjectProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 1 }}
      className="flex flex-col space-y-5"
    >
      <div className="relative img-div rounded-2xl bg-gray-200 min-h-[300px] w-full mt-14 overflow-hidden group cursor-pointer">
        {isLive && (
          <Badge className="absolute top-3 left-3 bg-red-500 z-40">LIVE</Badge>
        )}
        {/* Image */}
        <Image
          alt={title}
          src={image}
          width={1000}
          height={1000}
          className="w-full h-full object-cover rounded-2xl absolute z-10"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20"></div>

        {/* Buttons */}
        <div className="absolute inset-0 flex justify-center items-center gap-3 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-30">
          <Link
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="px-5 py-2 bg-white text-black rounded-full shadow-lg text-sm hover:bg-gray-200 flex items-center gap-2"
          >
            <Github size={17} />
            GitHub
          </Link>

          {isLive && (
            <Link
              href="https://example.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2 bg-white text-black rounded-full shadow-lg text-sm hover:bg-gray-200 flex items-center gap-2"
            >
              <Radio size={17} />
              Demo
            </Link>
          )}
        </div>
      </div>

      <div className="flex flex-col space-y-5">
        <h1 className="text-2xl">{title}</h1>
        <p className="text-xl font-semibold">{desc}</p>
        <span>
          <h6 className="text-gray-400 text-sm">HIGHLIGHT :</h6>
          <ol className="text-base">
            {highlights.map((highlight, idx) => (
              <li key={idx}>{highlight}</li>
            ))}
          </ol>
        </span>
        <hr className="border-dashed border-gray-400" />
        <ul className="flex flex-wrap items-center gap-2">
          {stacks.map((stack, index) => (
            <Tech key={index} tech={stack} />
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

export default Project;
