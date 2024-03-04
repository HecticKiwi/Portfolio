"use client";

import { useEffect, useState } from "react";
import { cn } from "../utils/cn";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { FaExternalLinkAlt } from "react-icons/fa";
import { useScroll } from "@/hooks/useScroll";
import { Menu, X } from "lucide-react";

const NavBar = () => {
  const [show, setShow] = useState(false);
  const scrollY = useScroll();

  useEffect(() => {
    document.body.style.overflow = show ? "hidden" : "unset";
  }, [show]);

  return (
    <>
      {/* Mobile menu trigger */}
      <button
        onClick={() => setShow((prev) => !prev)}
        className={cn(
          "fixed right-8 top-8 z-50 flex items-center justify-center rounded-full border border-transparent bg-black p-3 transition hover:bg-neutral-500 md:hidden",
          scrollY > 0 && "border-neutral-500",
        )}
      >
        <Menu className={cn("absolute transition", show && "opacity-0")} />
        <X className={cn("opacity-0 transition", show && "opacity-100")} />
      </button>

      <nav
        className={cn(
          // Mobile
          "fixed -right-full z-40 flex h-[100dvh] w-[100dvw] flex-col items-center justify-center gap-4 text-4xl backdrop-blur-md backdrop-brightness-[.15] transition-[right] duration-300",
          show && "right-0",
          // Desktop
          "md:visible md:inset-x-0 md:inset-y-auto md:top-6 md:mx-auto md:h-auto md:w-fit md:flex-row md:gap-2 md:rounded-full md:border md:border-transparent md:p-2 md:text-base md:backdrop-brightness-50 md:transition",
          scrollY > 0 && "md:border-neutral-500",
        )}
      >
        <a
          href="#about"
          className="rounded-full px-4 py-2 transition hover:bg-neutral-600 md:px-3 md:py-1"
          onClick={() => setShow(false)}
        >
          About
        </a>
        <a
          href="#skills"
          className="rounded-full px-4 py-2 transition hover:bg-neutral-600 md:px-3 md:py-1"
          onClick={() => setShow(false)}
        >
          Skills
        </a>
        <a
          href="#projects"
          className="rounded-full px-4 py-2 transition hover:bg-neutral-600 md:px-3 md:py-1"
          onClick={() => setShow(false)}
        >
          Projects
        </a>
        <a
          href="#contact"
          className="rounded-full px-4 py-2 transition hover:bg-neutral-600 md:px-3 md:py-1"
          onClick={() => setShow(false)}
        >
          Contact
        </a>

        <span className="mx-3">&middot;</span>

        <a
          href="/resume.pdf"
          target="_blank"
          className="flex items-center gap-1 rounded-full px-4 py-2 transition hover:bg-neutral-600 md:px-3 md:py-1"
        >
          Resume
          <FaExternalLinkAlt />
        </a>

        <span className="mx-3">&middot;</span>

        <div className="flex gap-8 md:gap-2">
          <a
            href="https://github.com/HecticKiwi"
            target="_blank"
            className="transition hover:scale-110"
          >
            <SiGithub className="h-16 w-16 md:h-6 md:w-6" />
          </a>
          <a
            href="https://linkedin.com/in/danny-duong-"
            target="_blank"
            className="transition hover:scale-110 md:mr-3"
          >
            <SiLinkedin className="h-16 w-16 md:h-6 md:w-6" />
          </a>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
