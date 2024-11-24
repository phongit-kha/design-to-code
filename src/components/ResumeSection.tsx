import * as React from "react";
import { cn } from "@/lib/utils";
import { Sparkles } from "lucide-react";
import { FadeInAnimation } from "./animation/FadeInAnimation";

export function ResumeSection({
  className = "",
  ref,
}: {
  className?: string;
  ref: any;
}): React.JSX.Element {
  return (
    <div id="resume" ref={ref} className={cn("w-full pt-24", className)}>
      <FadeInAnimation>
        <p className="flex w-fit items-center gap-2 rounded-sm border border-t-opp-medium bg-base px-4 py-2 text-sm font-bold text-t-medium">
          <Sparkles className="size-4 stroke-2" /> Resume
        </p>
      </FadeInAnimation>
      <FadeInAnimation index={2}>
        <h2 className="mt-3 bg-gradient-to-r from-accent to-secondary bg-clip-text text-4xl font-extrabold leading-tight text-transparent lg:text-[54px]">
          Education and Volunteer experience
        </h2>
      </FadeInAnimation>
      <div className="space-y-12 lg:py-12">
        {/* Education Section */}
        <div>
          <FadeInAnimation>
            <h3 className="mb-8 text-3xl font-semibold text-t-bright">
              My education
            </h3>
          </FadeInAnimation>
          <div className="space-y-6">
            {/* Education Item */}
            <FadeInAnimation index={1}>
              <hr className="mb-8 border-t-[1px] border-t-opp-medium" />
              <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                <div className="text-sm text-t-bright lg:w-1/4">
                  2015 - 2016
                </div>
                <div className="lg:w-1/2">
                  <h4 className="text-lg font-semibold text-t-bright">
                    Drawing Concentration
                  </h4>
                  <p className="text-sm text-t-bright">
                    Course by{" "}
                    <span className="font-semibold">
                      New York Academy of Art
                    </span>
                  </p>
                </div>
                <p className="text-t-bright lg:w-1/3">
                  Intensive drawing courses that present the fundamental
                  principles of drawing.
                </p>
              </div>
            </FadeInAnimation>

            <FadeInAnimation index={2}>
              <hr className="mb-8 border-t-[1px] border-t-opp-medium" />
              <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                <div className="text-sm text-t-bright lg:w-1/4">
                  2019 - 2021
                </div>
                <div className="lg:w-1/2">
                  <h4 className="text-lg font-semibold text-t-bright">
                    UI/UX Design Specialization
                  </h4>
                  <p className="text-sm text-t-bright">
                    Course by{" "}
                    <span className="font-semibold">
                      California Institute of Arts
                    </span>
                  </p>
                </div>
                <p className="text-t-bright lg:w-1/3">
                  Research, design, and prototype effective, visually-driven
                  websites and apps.
                </p>
              </div>
            </FadeInAnimation>
            <FadeInAnimation index={3}>
              <hr className="mb-8 border-t-[1px] border-t-opp-medium" />
              <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                <div className="text-sm text-t-bright lg:w-1/4">2022</div>
                <div className="lg:w-1/2">
                  <h4 className="text-lg font-semibold text-t-bright">
                    UI/UX Designer
                  </h4>
                  <p className="text-sm text-t-bright">
                    Course by <span className="font-semibold">Coursera</span>
                  </p>
                </div>
                <p className="text-t-bright lg:w-1/3">
                  This course is about how to complete the design process from
                  beginning to end.
                </p>
              </div>
            </FadeInAnimation>
          </div>
        </div>

        {/* Work Experience Section */}
        <div>
          <FadeInAnimation>
            <h3 className="mb-8 text-3xl font-semibold text-t-bright">
              Work experience
            </h3>
          </FadeInAnimation>
          <div className="space-y-6">
            {/* Experience Item */}
            <FadeInAnimation index={1}>
              <hr className="mb-8 border-t-[1px] border-t-opp-medium" />
              <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                <div className="text-sm text-t-bright lg:w-1/4">
                  2018 - 2019
                </div>
                <div className="lg:w-1/2">
                  <h4 className="text-lg font-semibold text-t-bright">
                    Illustrator
                  </h4>
                  <p className="text-sm text-t-bright">
                    in the <span className="font-semibold">Creative Mind</span>{" "}
                    agency
                  </p>
                </div>
                <p className="text-t-bright lg:w-1/3">
                  I created original images for a range of digital and printed
                  products.
                </p>
              </div>
            </FadeInAnimation>

            <FadeInAnimation index={2}>
              <hr className="mb-8 border-t-[1px] border-t-opp-medium" />
              <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                <div className="text-sm text-t-bright lg:w-1/4">
                  2019 - 2021
                </div>
                <div className="lg:w-1/2">
                  <h4 className="text-lg font-semibold text-t-bright">
                    Graphic Designer
                  </h4>
                  <p className="text-sm text-t-bright">
                    in the <span className="font-semibold">Moon Light</span>{" "}
                    agency
                  </p>
                </div>
                <p className="text-t-bright lg:w-1/3">
                  My job was to create adverts, branding, signage, and other
                  media products.
                </p>
              </div>
            </FadeInAnimation>

            <FadeInAnimation index={3}>
              <hr className="mb-8 border-t-[1px] border-t-opp-medium" />
              <div className="flex flex-col items-start justify-between gap-4 lg:flex-row lg:items-center">
                <div className="text-sm text-t-bright lg:w-1/4">2021 - now</div>
                <div className="lg:w-1/2">
                  <h4 className="text-lg font-semibold text-t-bright">
                    UI/UX Designer
                  </h4>
                  <p className="text-sm text-t-bright">
                    in the <span className="font-semibold">Moon Light</span>{" "}
                    agency
                  </p>
                </div>
                <p className="text-t-bright lg:w-1/3">
                  I am actively involved in creating user interfaces for mobile
                  apps and websites.
                </p>
              </div>
            </FadeInAnimation>
            <FadeInAnimation>
              <hr className="mb-8 border-t-[1px] border-t-opp-medium" />
            </FadeInAnimation>
          </div>
        </div>
        <FavoriteTools />
      </div>
    </div>
  );
}

const FavoriteTools = (): React.JSX.Element => {
  const tools = [
    { name: "Photoshop", icon: "/path/to/photoshop-icon.png" },
    { name: "Figma", icon: "/path/to/figma-icon.png" },
    { name: "Illustrator", icon: "/path/to/illustrator-icon.png" },
    { name: "Sketch", icon: "/path/to/sketch-icon.png" },
    { name: "Blender", icon: "/path/to/blender-icon.png" },
    { name: "HTML5", icon: "/path/to/html5-icon.png" },
    { name: "CSS3", icon: "/path/to/css3-icon.png" },
    { name: "Notion", icon: "/path/to/notion-icon.png" },
  ];

  return (
    <div className="font-sans lg:py-12">
      <FadeInAnimation>
        <h3 className="mb-8 text-3xl font-semibold text-t-bright">
          My favourite tools
        </h3>
      </FadeInAnimation>
      <div className="grid grid-cols-2 gap-6 sm:grid-cols-4 xl:grid-cols-5">
        {tools.map((tool, index) => (
          <FadeInAnimation
            index={index}
            key={index}
            className="flex flex-col items-center space-y-4 rounded-lg border border-t-opp-medium p-4"
          >
            <img
              src={tool.icon}
              alt={`${tool.name} icon`}
              className="h-12 w-12"
            />
            <h4 className="font-semibold text-t-bright">{tool.name}</h4>
          </FadeInAnimation>
        ))}
      </div>
    </div>
  );
};
