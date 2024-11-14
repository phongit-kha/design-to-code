import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowDown, Download, LayoutGrid, Sparkles } from "lucide-react";
import Link from "next/link";

export function HomeSection({
  className = "",
  ref,
}: {
  className?: string;
  ref: any;
}): React.JSX.Element {
  return (
    <div ref={ref} className={cn("mt-16 w-full lg:mt-64", className)}>
      <p className="flex w-fit items-center gap-2 rounded-sm border border-t-opp-medium bg-base px-4 py-2 text-sm font-bold text-t-medium">
        <Sparkles className="size-4 stroke-2" /> Let's meet!
      </p>
      <h1 className="mt-3 bg-gradient-to-r from-accent to-secondary bg-clip-text text-4xl font-extrabold text-transparent lg:text-6xl">
        I'm Phongit Khanthawisood, <br /> Full Stack Developer <br />
        <span hidden className="text-3xl lg:block">
          and Computer Engineering Student
        </span>
      </h1>
      <div className="mt-10 flex flex-col lg:mt-20 lg:flex-row lg:gap-3">
        <Link
          href="project"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-accent to-secondary px-5 py-2 text-lg font-bold text-t-opp-bright transition-transform duration-300 hover:scale-105 focus-visible:scale-105 lg:w-fit lg:border lg:border-stroke-controls-neutral lg:bg-none lg:text-t-bright"
        >
          My Works <LayoutGrid className="size-4 stroke-[3px]" />
        </Link>
        <Link
          href="project"
          className="mt-3 flex w-full items-center justify-center gap-2 rounded-md border border-stroke-controls-neutral px-5 py-2 text-lg font-bold text-t-bright transition-transform duration-300 hover:scale-105 focus-visible:scale-105 lg:mt-0 lg:w-fit lg:border-none"
        >
          Download Resume <Download className="size-4 stroke-[3px]" />
        </Link>
      </div>
      <p className="mt-12 flex w-full items-center justify-center gap-2 text-t-opp-medium">
        Scroll for more ! <ArrowDown className="size-4 stroke-2" />
      </p>
    </div>
  );
}
