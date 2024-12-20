"use client";

import React from "react";
type techProps = {
  tech: string;
};
function Tech({ tech }: techProps) {
  return (
    <li className="bg-slate-400 text-white rounded-xl px-3 py-1">{tech}</li>
  );
}

export default Tech;
