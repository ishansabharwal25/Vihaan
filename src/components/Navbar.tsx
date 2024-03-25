"use client";

import { Slant } from "hamburger-react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 items-center inset-x-0 bg-black text-white flex justify-between px-3">
      {/* Left */}
      <div className="logo">logo</div>
      {/* Right */}
      <div className="">
        <Slant size={15} />
      </div>
    </nav>
  );
}
