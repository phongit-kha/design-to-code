"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Download, Sparkles } from "lucide-react";
import Link from "next/link";
import { Tag } from "./ProjectCard";
import { FadeInAnimation } from "./animation/FadeInAnimation";
import Image from "next/image";
import AwardSection from "./AwardSection";

export function AboutMe({
  className = "",
  ref,
}: {
  className?: string;
  ref: any;
}): React.JSX.Element {
  return (
    <div id="about" ref={ref} className={cn("w-full pt-24", className)}>
      <FadeInAnimation>
        <p className="flex w-fit items-center gap-2 rounded-sm border border-t-opp-medium bg-base px-4 py-2 text-sm font-bold text-t-medium">
          <Sparkles className="size-4 stroke-2" /> About Me
        </p>
      </FadeInAnimation>
      <FadeInAnimation index={2}>
        <h2 className="mt-3 bg-gradient-to-r from-accent to-secondary bg-clip-text text-3xl font-extrabold leading-tight text-transparent lg:text-[54px]">
          Hi, I am Phongit
          <br />
        </h2>
        <p className="text-2xl font-bold text-t-bright lg:text-4xl">
          Turning complex problems into simple web application
        </p>
      </FadeInAnimation>

      <FadeInAnimation index={3}>
        <p className="mt-8">
          I’m Phongit, a web developer from Thailand.
          <br /> Right now, I’m working on a project to help young people learn
          new things and reach their goals.
          <br />I want to make learning fun and easy for them, especially in the
          world of technology.
          <br />
          <br />
          Stay tuned for more updates on my project!
        </p>
      </FadeInAnimation>
      <FadeInAnimation index={4}>
        <div className="relative mt-8 flex h-64 w-full items-center gap-4 overflow-x-scroll lg:justify-center lg:overflow-visible">
          {[
            { imageUrl: "image1.jpg", left: "-20%", rotate: "4deg", alt: "" },
            { imageUrl: "image2.jpg", left: "8%", rotate: "-3deg", alt: "" },
            { imageUrl: "image4.jpg", left: "36%", rotate: "5deg", alt: "" },
            { imageUrl: "image3.png", left: "64%", rotate: "-2deg", alt: "" },
            { imageUrl: "image5.jpg", left: "92%", rotate: "5deg", alt: "" },
          ].map((item, index) => {
            return (
              <Image
                src={`/aboutme/${item.imageUrl}`}
                alt={`Image`}
                width={500}
                height={500}
                style={{
                  left: `${item.left}`,
                  transform: `rotate(${item.rotate})`,
                }}
                className="-z-10 aspect-square w-52 rounded-sm object-cover object-center lg:absolute"
              />
            );
          })}
        </div>
      </FadeInAnimation>
      <FadeInAnimation index={5}>
        <AwardSection />
      </FadeInAnimation>

      {/* Download CV Button */}

      <FadeInAnimation className="mt-2 text-center">
        <Link
          href="project"
          className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-accent to-secondary px-5 py-2 text-lg font-bold text-t-opp-bright transition-transform duration-300 hover:scale-105 focus-visible:scale-105 lg:w-fit"
        >
          Download Resume <Download className="size-4 stroke-[3px]" />
        </Link>
      </FadeInAnimation>
    </div>
  );
}
