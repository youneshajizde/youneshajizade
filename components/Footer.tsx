"use client";

import React from "react";
import { Button } from "./ui/button";
import { toast } from "sonner";
import Link from "next/link";

function Footer() {
  const handleGmail = () => {
    const gmail = "jonaselemented@gmail.com";
    navigator.clipboard.writeText(gmail).then(
      () => {
        toast.success("Gmail is copied on your clipboard!");
      },
      () => {
        toast.error("Failed to copy Gmail!");
      }
    );
  };

  return (
    <section className="mt-16 flex flex-col space-y-7 mb-5">
      <div>
        <h1 className="text-2xl font-medium text-gray-400">
          Ready to take the next step?
        </h1>
        <p className="text-2xl font-medium">
          Let's make something amazing, together.
        </p>
      </div>

      <p>
        Let’s connect if you’re looking to build an MVP, improve your product,
        or need ongoing design support.
      </p>

      <span className="flex items-center gap-5">
        <Button className="bg-black rounded-full">
          <Link href={"https://www.linkedin.com/in/youneshajizade/"}>
            Open for Work - Linkedin
          </Link>
        </Button>

        <Button
          onClick={handleGmail}
          className="bg-transparent border-[1px] border-gray-400 rounded-full text-black hover:border-gray-500 hover:bg-transparent"
        >
          Copy Gmail
        </Button>
      </span>

      <p className="text-sm text-gray-400">
        Built by Younes | ©2025 to ∞ Younes Hajizadeh
      </p>
    </section>
  );
}

export default Footer;
