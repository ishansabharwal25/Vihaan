"use client";

import { cn } from "@/lib/utils";
import { Slant } from "hamburger-react";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isAtTop, setIsAtTop] = useState<boolean>(true);
  function getScrollTop() {
    return (
      window.pageYOffset || //most browsers
      (document.documentElement && document.documentElement.scrollTop) || //
      document.body.scrollTop
    );
  }
  useEffect(() => {
    function scroll_event() {
      let scroll = getScrollTop();
      if (scroll == 0) {
        setIsAtTop(true);
      } else {
        setIsAtTop(false);
      }
    }
    document.addEventListener("scroll", scroll_event);
    return () => document.removeEventListener("scroll", scroll_event);
  }, []);
  return (
    <nav
      className={cn(
        "fixed z-[100] items-center h-16 left-1/2 -translate-x-1/2 bg-black/90 text-white flex px-3 transition-all duration-300 justify-center",
        isAtTop
          ? "w-[100vw] top-0"
          : "sm:w-[50vw] sm:rounded-lg sm:top-2 w-[100vw] top-0",
      )}
    >
      {/* Left */}
      <div className="logo">logo or name</div>
      {/* Right */}
      <div className="fixed top-2 right-5">
        <Slant size={15} />
      </div>
    </nav>
  );
}
