"use client";
import * as React from "react";

import {
  House,
  LayoutGrid,
  UserRound,
  FileUser,
  Mail,
  Sun,
  MoonStar,
  MessageSquareMore,
} from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";
import { cn } from "@/lib/utils";

const IconStyle = (onFocus: boolean) =>
  onFocus
    ? "bg-base-opp text-t-opp-bright lg:bg-transparent lg:text-t-bright border-[1px] border-stroke-controls-neutral "
    : "text-t-disabled lg:dark:text-t-bright";

export function Navbar({
  className,
  activeSection,
}: {
  className?: string;
  activeSection: string;
}): React.JSX.Element {
  const { setTheme } = useTheme();
  const [themeColor, setThemeColor] = useState("light");
  return (
    <nav
      className={cn(
        "fixed bottom-5 left-0 z-50 flex h-auto w-full justify-center lg:sticky lg:top-12",
        className,
      )}
    >
      <div className="flex h-fit items-center rounded-full bg-transparent shadow-lg backdrop-blur-md lg:w-full lg:justify-between lg:shadow-none lg:backdrop-blur-none xl:items-start">
        {/* Individual Nav Buttons */}
        <div className="flex xl:space-x-5">
          <Button
            aria-label="Home"
            className={`size-auto rounded-[1.125rem] p-3 shadow-none transition-all duration-300 hover:text-t-bright focus-visible:scale-105 focus-visible:text-t-bright lg:px-5 lg:py-2.5 lg:backdrop-blur-3xl ${IconStyle(activeSection === "home")}`}
          >
            <House className="size-5 xl:hidden" />
            <span hidden className="text-lg font-semibold xl:block">
              Home
            </span>
          </Button>

          <Button
            aria-label="Project"
            className={`peer size-auto rounded-[1.125rem] p-3 shadow-none transition-all duration-300 hover:text-t-bright focus-visible:scale-105 lg:px-5 lg:py-2.5 lg:backdrop-blur-md ${IconStyle(activeSection === "projects")}`}
          >
            <LayoutGrid className="size-5 stroke-[2.5px] xl:hidden" />
            <span hidden className="text-lg font-semibold xl:block">
              Project
            </span>
          </Button>

          <Button
            aria-label="About me"
            className={`peer size-auto rounded-[1.125rem] p-3 shadow-none transition-all duration-300 hover:text-t-bright focus-visible:scale-105 lg:px-5 lg:py-2.5 lg:backdrop-blur-md ${IconStyle(activeSection === "about")}`}
          >
            <UserRound className="size-5 xl:hidden" />
            <span hidden className="text-lg font-semibold xl:block">
              About me
            </span>
          </Button>

          <Button
            aria-label="Resume"
            className={`size-auto rounded-[1.125rem] p-3 shadow-none transition-all duration-300 hover:text-t-bright focus-visible:scale-105 lg:px-5 lg:py-2.5 lg:backdrop-blur-md ${IconStyle(activeSection === "resume")}`}
          >
            <FileUser className="size-5 xl:hidden" />
            <span hidden className="text-lg font-semibold xl:block">
              Resume
            </span>
          </Button>

          <Button
            aria-label="Contact Me"
            className={`size-auto rounded-[1.125rem] p-3 shadow-none transition-all duration-300 hover:text-t-bright focus-visible:scale-105 lg:px-5 lg:py-2.5 lg:backdrop-blur-md ${IconStyle(activeSection === "contact")}`}
          >
            <Mail className="size-5 xl:hidden" />
            <span hidden className="text-lg font-semibold xl:block">
              Contact
            </span>
          </Button>
        </div>
        <div className="lg:flex lg:space-x-4">
          <Button
            aria-label="Theme Toggle"
            className={`size-auto self-center rounded-[1.125rem] p-3 shadow-none transition-all duration-300 hover:text-t-bright focus-visible:scale-110 ${IconStyle}`}
            onClick={() => {
              themeColor == "light" ? setTheme("light") : setTheme("dark");
              themeColor == "light"
                ? setThemeColor("dark")
                : setThemeColor("light");
            }}
          >
            <MoonStar className="size-5 scale-100 dark:scale-0 lg:stroke-[2.5px]" />
            <Sun className="absolute size-5 scale-0 dark:scale-100 lg:stroke-[2.5px]" />
          </Button>

          {/* Highlighted Chat Icon */}
          <Button
            aria-label="Chat"
            className="size-auto rounded-[1.125rem] bg-gradient-to-tl from-accent to-secondary p-2.5 transition-transform duration-300 hover:scale-105 focus-visible:scale-105 lg:rounded-md lg:px-5"
          >
            <span
              hidden
              className="text-lg font-semibold text-t-opp-bright lg:block"
            >
              Let's Talk
            </span>
            <MessageSquareMore className="size-5 text-t-opp-bright lg:stroke-[3px]" />
          </Button>
        </div>
      </div>
    </nav>
  );
}
