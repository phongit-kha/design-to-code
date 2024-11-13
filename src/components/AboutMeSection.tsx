import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowDown, Download, LayoutGrid, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function AboutMe({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <div className={cn("mt-16 w-full", className)}>
      <p className="flex w-fit items-center gap-2 rounded-sm border border-t-opp-medium bg-base px-4 py-2 text-sm font-bold text-t-medium">
        <Sparkles className="size-4 stroke-2" /> About Me
      </p>
      <h2 className="mt-3 bg-gradient-to-r from-accent to-secondary bg-clip-text text-4xl font-extrabold text-transparent">
        Turning complex problems into simple web application
      </h2>
    </div>
  );
}
