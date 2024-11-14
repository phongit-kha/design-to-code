"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Download, Sparkles } from "lucide-react";
import Link from "next/link";
import { Tag } from "./ProjectCard";
import { FadeInAnimation } from "./animation/FadeInAnimation";

export function AboutMe({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <div className={cn("mt-16 w-full", className)}>
      <FadeInAnimation>
        <p className="flex w-fit items-center gap-2 rounded-sm border border-t-opp-medium bg-base px-4 py-2 text-sm font-bold text-t-medium">
          <Sparkles className="size-4 stroke-2" /> About Me
        </p>
      </FadeInAnimation>
      <FadeInAnimation index={2}>
        <h2 className="mt-3 bg-gradient-to-r from-accent to-secondary bg-clip-text text-3xl font-extrabold leading-tight text-transparent lg:text-[54px]">
          Turning complex problems into simple web application
        </h2>
      </FadeInAnimation>
      <div className="py-12">
        {/* Stats Section */}
        <div className="mb-10 flex flex-col items-center justify-around gap-8 lg:flex-row">
          <FadeInAnimation>
            <div className="w-full rounded-md border-[0.5px] border-t-opp-medium p-6 text-center lg:w-1/3">
              <p className="bg-gradient-to-r from-t-accent to-t-secondary bg-clip-text text-5xl font-bold text-transparent">
                40+
              </p>
              <p className="text-lg font-semibold text-t-bright">
                Happy clients
              </p>
            </div>
          </FadeInAnimation>
          <FadeInAnimation index={2}>
            <div className="w-full rounded-md border-[0.5px] border-t-opp-medium p-6 text-center lg:w-1/3">
              <p className="bg-gradient-to-r from-t-accent to-t-secondary bg-clip-text text-5xl font-bold text-transparent">
                2+
              </p>
              <p className="text-lg font-semibold text-t-bright">
                Years of experience
              </p>
            </div>
          </FadeInAnimation>
          <FadeInAnimation index={3}>
            <div className="w-full rounded-md border-[0.5px] border-t-opp-medium p-6 text-center lg:w-1/3">
              <p className="bg-gradient-to-r from-t-accent to-t-secondary bg-clip-text text-5xl font-bold text-transparent">
                50+
              </p>
              <p className="text-lg font-semibold text-t-bright">
                Projects done
              </p>
            </div>
          </FadeInAnimation>
        </div>

        {/* Bio Section */}
        <div className="flex flex-col items-start gap-10 lg:flex-row">
          {/* Text Section */}
          <div className="text- lg:w-2/3">
            <FadeInAnimation>
              <p className="mb-4 text-t-bright">
                I wonder if I've been changed in the night? Let me think. Was I
                the same when I got up this morning? I almost think I can
                remember feeling a little different. But if I'm not the same,
                the next question is 'Who in the world am I?' Ah, that's the
                great puzzle!
              </p>
            </FadeInAnimation>
            <FadeInAnimation index={3}>
              <p>
                Be what you would seem to be - or, if you'd like it put more
                simply - never imagine yourself not to be otherwise than what it
                might appear to others that what you were or{" "}
                <u>might have been</u> was not otherwise than what you had been
                would have appeared to them to be otherwise.
              </p>
            </FadeInAnimation>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 lg:w-1/3">
            <FadeInAnimation>
              <h6>
                <small className="text-sm text-t-bright">Name</small>
                <p className="text-lg font-semibold text-t-bright">
                  Alex Walker
                </p>
              </h6>
            </FadeInAnimation>
            <FadeInAnimation index={3}>
              <h6>
                <small className="text-sm text-t-bright">Phone</small>
                <p className="text-lg font-semibold text-t-bright">
                  +1 212-708-9400
                </p>
              </h6>
            </FadeInAnimation>
            <FadeInAnimation index={5}>
              <h6>
                <small className="text-sm text-t-bright">Email</small>
                <p className="text-lg font-semibold text-t-bright">
                  hello@yourdomain.com
                </p>
              </h6>
              <h6>
                <small className="text-sm text-t-bright">Location</small>
                <p className="text-lg font-semibold text-t-bright">
                  Odesa, Ukraine
                </p>
              </h6>
            </FadeInAnimation>
          </div>
        </div>

        {/* Download CV Button */}
        <FadeInAnimation>
          <div className="mt-10 text-center">
            <Link
              href="project"
              className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-accent to-secondary px-5 py-2 text-lg font-bold text-t-opp-bright transition-transform duration-300 hover:scale-105 focus-visible:scale-105 lg:w-fit"
            >
              Download Resume <Download className="size-4 stroke-[3px]" />
            </Link>
          </div>
        </FadeInAnimation>
      </div>
      <div className="grid grid-cols-1 gap-8 text-t-bright lg:grid-cols-2 lg:py-12">
        {/* Frontend Development Card */}
        <FadeInAnimation index={1}>
          <div className="h-[620px] space-y-4 rounded-2xl border border-t-opp-medium p-6">
            <h4 className="text-2xl font-semibold text-t-bright">
              Frontend development
            </h4>
            <div className="flex space-x-2">
              <Tag
                color="white"
                className="border border-t-opp-medium bg-transparent text-t-bright"
              >
                UX/UI Design
              </Tag>
              <Tag
                color="white"
                className="border border-t-opp-medium bg-transparent text-t-bright"
              >
                Design to Code
              </Tag>
            </div>
            <p className="text-t-bright">
              I work with HTML/CSS, Framer and WordPress.
            </p>
            <img
              src="/path/to/frontend-image.png"
              alt="Frontend Development"
              className="w-full rounded-md"
            />
          </div>
        </FadeInAnimation>

        {/* Digital Art and Graphic Design Card */}
        <FadeInAnimation index={3}>
          <div className="h-[620px] space-y-4 rounded-2xl border border-t-opp-medium p-6">
            <h4 className="text-2xl font-semibold text-t-bright">
              Digital art and graphic design
            </h4>
            <div className="flex space-x-2">
              <Tag
                color="white"
                className="border border-t-opp-medium bg-transparent text-t-bright"
              >
                Illustrations
              </Tag>
              <Tag
                color="white"
                className="border border-t-opp-medium bg-transparent text-t-bright"
              >
                AI Experiments
              </Tag>
            </div>
            <p className="text-t-bright">
              I use Adobe Photoshop, Fresco and Blender to create illustrations
              and 3D renders for my clients and stocks.
            </p>
            <img
              src="/path/to/design-image.png"
              alt="Graphic Design"
              className="w-full rounded-md"
            />
          </div>
        </FadeInAnimation>

        {/* SEO/Digital Marketing Solutions Card */}
        <FadeInAnimation index={5}>
          <div className="h-[620px] space-y-4 rounded-2xl border border-t-opp-medium p-6">
            <h4 className="text-2xl font-semibold text-t-bright">
              SEO/Digital marketing solutions
            </h4>
            <div className="flex space-x-2">
              <Tag
                color="white"
                className="border border-t-opp-medium bg-transparent text-t-bright"
              >
                Social Media
              </Tag>
              <Tag
                color="white"
                className="border border-t-opp-medium bg-transparent text-t-bright"
              >
                Analytics
              </Tag>
            </div>
            <p className="text-t-bright">
              Social media content plans, media monitoring, email and text
              messaging and search engine optimization.
            </p>
            <img
              src="/path/to/marketing-image.png"
              alt="Marketing Solutions"
              className="w-full rounded-md"
            />
          </div>
        </FadeInAnimation>

        {/* Brand Identity Card */}
        <FadeInAnimation index={7}>
          <div className="h-[620px] space-y-4 rounded-2xl border border-t-opp-medium p-6">
            <h4 className="text-2xl font-semibold text-t-bright">
              Brand identity
            </h4>
            <div className="flex space-x-2">
              <Tag
                color="white"
                className="border border-t-opp-medium bg-transparent text-t-bright"
              >
                Logo Designs
              </Tag>
              <Tag
                color="white"
                className="border border-t-opp-medium bg-transparent text-t-bright"
              >
                Style Guides
              </Tag>
            </div>
            <p className="text-t-bright">
              I help my clients to develop a personality and brand voice, design
              the brand look and logo.
            </p>
            <img
              src="/path/to/brand-image.png"
              alt="Brand Identity"
              className="w-full rounded-md"
            />
          </div>
        </FadeInAnimation>
      </div>
    </div>
  );
}
