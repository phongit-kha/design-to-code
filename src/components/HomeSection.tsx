import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowDown, Download, LayoutGrid, Sparkles } from "lucide-react";
import Link from "next/link";

export function HomeSection({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <div className={cn("mt-16 w-full", className)}>
      <p className="flex w-fit items-center gap-2 rounded-sm border border-t-opp-medium bg-base px-4 py-2 text-sm font-bold text-t-medium">
        <Sparkles className="size-4 stroke-2" /> Let's meet!
      </p>
      <h1 className="mt-3 bg-gradient-to-r from-accent to-secondary bg-clip-text text-4xl font-extrabold text-transparent">
        I'm Phongit Khanthawisood <br /> Fullstack Developer
      </h1>
      <div className="mt-10 flex flex-col">
        <Link
          href="project"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-accent to-secondary py-2 text-lg font-bold text-t-opp-bright"
        >
          My Works <LayoutGrid className="size-4 stroke-[3px]" />
        </Link>
        <Link
          href="project"
          className="border-stroke-controls-neutral mt-3 flex w-full items-center justify-center gap-2 rounded-md border py-2 text-lg font-bold text-t-bright"
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
