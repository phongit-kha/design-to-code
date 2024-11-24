import * as React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { CardDetails, ProjectCard } from "./ProjectCard";
import { FadeInAnimation } from "./animation/FadeInAnimation";

const data: CardDetails[] = [
  {
    projectName: "Gem of Your Soul",
    tag: ["Frontend", "Interactive Web"],
    tagColor: "white",
    imgUrl: "/project/project1.jpg",
    description:
      "•	Implemented an interactive event registration UI, handling over 68,000 users and increasing registration conversions by 30.6%.",
  },
  {
    projectName: "Wiki Speed Race",
    tag: ["Backend", "Node.JS"],
    tagColor: "black",
    imgUrl: "/project/project2.png",
    description:
      "•	Designed and developed Wiki Speed Race, a game that enhances critical thinking and strategic problem-solving skills through rapid Wikipedia navigation.",
  },
  {
    projectName: "Cu Get Reg",
    tag: ["Frontend", "Svelte Kit"],
    tagColor: "black",
    imgUrl: "/project/project3.png",
    description:
      "•	Have no idea what courses to take? Don't know what this course is about? We got it covered. With CU Get Reg, we put all kinds of course data together so that you don't have to.",
  },
  {
    projectName: "Merge CP50",
    tag: ["Full Stack", "Next.js"],
    tagColor: "white",
    imgUrl: "/project/project4.png",
    description:
      "•	Led a team of 6-person to create a web platform for student networking, achieving 86.7% participation from new students.",
  },
];

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
    <div id="project" ref={ref} className={cn("w-full pt-24", className)}>
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
        {data.map((item, index) => {
          return (
            <FadeInAnimation index={index}>
              <ProjectCard cardDetails={item} />
            </FadeInAnimation>
          );
        })}
      </div>
    </div>
  );
}
