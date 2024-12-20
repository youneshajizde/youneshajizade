import {
  ChartNoAxesColumn,
  ClipboardCheck,
  Flag,
  MoveRight,
  Rocket,
  Sparkles,
} from "lucide-react";
import React from "react";

function Experties() {
  return (
    <section className="flex flex-col space-y-5 mt-10">
      <h1 className="text-3xl juniper-bay">How I can help you</h1>
      <p className="text-2xl font-medium">
        I've partnered with indie-makers to design products with intuitive UI/UX
        that truly connect with users.
      </p>

      <h1>I can help you to:</h1>

      <ul className="flex flex-wrap items-center  gap-3">
        <li className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-2">
          <Rocket />
          0 <MoveRight size={14} />
          100
        </li>
        <li className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-2">
          <Flag />
          Launch new features
        </li>
        <li className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-2">
          <ChartNoAxesColumn />
          Improve metrics
        </li>
        <li className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-2">
          <Sparkles />
          Get a design refresh
        </li>
        <li className="flex items-center gap-2 bg-gray-200 rounded-full px-3 py-2">
          <ClipboardCheck />
          Understand UX flaws
        </li>
      </ul>
    </section>
  );
}

export default Experties;
