import Image from "next/image";
import React from "react";
import avatar from "@/public/assets/avatarr.jpg";
import { Button } from "./ui/button";
import Link from "next/link";
function Navbar() {
  return (
    <nav className="w-full flex h-[80px] border-b-[1px] border-gray-200">
      <div className="w-[100%] md:w-[70%] lg:w-[55%] xl:w-[40%] mx-auto  flex items-center justify-between px-5">
        <Image
          className="w-10 h-10 rounded-full object-cover"
          alt="avatar"
          src={avatar}
          width={0}
          height={0}
        />
        <div className="flex items-center gap-5">
          <span className="font-bold">Projects</span>
          <Button className="bg-black font-semibold rounded-full">
            <Link href={"https://t.me/LeJonas"}>Let's Talk!</Link>
          </Button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
