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
  MessageSquareText,
} from "lucide-react";
import { Button } from "./ui/button";
import { useTheme } from "next-themes";
import { useState } from "react";

const onFocus = false;
const IconStyle = onFocus ? "bg-base-opp text-t-opp-bright" : "text-t-disabled";

export function Navbar(): React.JSX.Element {
  const { setTheme } = useTheme();
  const [themeColor, setThemeColor] = useState("light");
  return (
    <nav className="fixed bottom-5 z-50 flex w-full justify-center">
      <div className="flex items-center rounded-full bg-transparent shadow-lg backdrop-blur-md">
        {/* Individual Nav Buttons */}
        <Button
          aria-label="Home"
          className={`size-auto rounded-[1.125rem] p-3 shadow-none transition-transform duration-300 focus-visible:scale-105 ${IconStyle}`}
        >
          <House className="size-5" />
        </Button>

        <Button
          aria-label="Project"
          className={`size-auto rounded-[1.125rem] p-3 shadow-none transition-transform duration-300 focus-visible:scale-105 ${IconStyle}`}
        >
          <LayoutGrid className="size-5" />
        </Button>

        <Button
          aria-label="About me"
          className={`size-auto rounded-[1.125rem] p-3 shadow-none transition-transform duration-300 focus-visible:scale-105 ${IconStyle}`}
        >
          <UserRound className="size-5" />
        </Button>

        <Button
          aria-label="Resume"
          className={`size-auto rounded-[1.125rem] p-3 shadow-none transition-transform duration-300 focus-visible:scale-105 ${IconStyle}`}
        >
          <FileUser className="size-5" />
        </Button>

        <Button
          aria-label="Contact Me"
          className={`size-auto rounded-[1.125rem] p-3 shadow-none transition-transform duration-300 focus-visible:scale-105 ${IconStyle}`}
        >
          <Mail className="size-5" />
        </Button>

        <Button
          aria-label="Theme Toggle"
          className={`size-auto rounded-[1.125rem] p-3 shadow-none transition-transform duration-300 focus-visible:scale-105 ${IconStyle}`}
          onClick={() => {
            themeColor == "light" ? setTheme("light") : setTheme("dark");
            themeColor == "light"
              ? setThemeColor("dark")
              : setThemeColor("light");
          }}
        >
          <MoonStar className="size-5 scale-100 dark:scale-0" />
          <Sun className="absolute size-5 scale-0 dark:scale-100" />
        </Button>

        {/* Highlighted Chat Icon */}
        <Button
          aria-label="Chat"
          className="size-auto rounded-[1.125rem] bg-gradient-to-tl from-accent to-secondary p-3"
        >
          <MessageSquareText className="size-5 text-t-opp-bright" />
        </Button>
      </div>
    </nav>
  );
}
