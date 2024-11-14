import * as React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { CardDetails, ProjectCard } from "./ProjectCard";
import { FadeInAnimation } from "./animation/FadeInAnimation";

const temp: CardDetails = {
  projectName: "Project name",
  tag: ["Illustration", "3D Render"],
  tagColor: "white",
  imgUrl: "/profile/profile-icon.jpg",
  description:
    "This action cannot be undone. This will permanently delete youraccount and remove your data from our servers.",
};

export function ProjectSection({
  className = "",
  ref,
}: {
  className?: string;
  ref: any;
}): React.JSX.Element {
  return (
    <div ref={ref} className={cn("mt-16 w-full", className)}>
      <FadeInAnimation>
        <p className="flex w-fit items-center gap-2 rounded-sm border border-t-opp-medium bg-base px-4 py-2 text-sm font-bold text-t-medium">
          <Sparkles className="size-4 stroke-2" /> Project
        </p>
      </FadeInAnimation>
      <FadeInAnimation index={2}>
        <h2 className="mt-3 bg-gradient-to-r from-accent to-secondary bg-clip-text text-4xl font-extrabold leading-tight text-transparent lg:text-[54px]">
          Check out my featured <br hidden className="lg:block" /> projects
        </h2>
      </FadeInAnimation>
      <div className="mt-10 grid w-full grid-cols-1 gap-8 sm:grid-cols-2 lg:gap-12 2xl:grid-cols-4">
        {[1, 4, 1, 4].map((index, item) => {
          return (
            <FadeInAnimation index={index}>
              <ProjectCard cardDetails={temp} />
            </FadeInAnimation>
          );
        })}
      </div>
    </div>
  );
}
