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
      <h2 className="mt-3 bg-gradient-to-r from-accent to-secondary bg-clip-text text-3xl font-extrabold leading-tight text-transparent lg:text-[54px]">
        Turning complex problems into simple web application
      </h2>
      <div className="py-12 text-[#4b4b4b]">
        {/* Stats Section */}
        <div className="mb-10 flex flex-col items-center justify-around gap-8 lg:flex-row">
          <div className="w-full rounded-md border-[0.5px] border-t-opp-medium p-6 text-center lg:w-1/3">
            <p className="bg-gradient-to-r from-t-accent to-t-secondary bg-clip-text text-5xl font-bold text-transparent">
              40+
            </p>
            <p className="text-lg font-semibold text-t-bright">Happy clients</p>
          </div>
          <div className="w-full rounded-md border-[0.5px] border-t-opp-medium p-6 text-center lg:w-1/3">
            <p className="bg-gradient-to-r from-t-accent to-t-secondary bg-clip-text text-5xl font-bold text-transparent">
              2+
            </p>
            <p className="text-lg font-semibold text-t-bright">
              Years of experience
            </p>
          </div>
          <div className="w-full rounded-md border-[0.5px] border-t-opp-medium p-6 text-center lg:w-1/3">
            <p className="bg-gradient-to-r from-t-accent to-t-secondary bg-clip-text text-5xl font-bold text-transparent">
              50+
            </p>
            <p className="text-lg font-semibold text-t-bright">Projects done</p>
          </div>
        </div>

        {/* Bio Section */}
        <div className="flex flex-col items-start gap-10 lg:flex-row">
          {/* Text Section */}
          <div className="text- lg:w-2/3">
            <p className="mb-4 text-t-bright">
              I wonder if I've been changed in the night? Let me think. Was I
              the same when I got up this morning? I almost think I can remember
              feeling a little different. But if I'm not the same, the next
              question is 'Who in the world am I?' Ah, that's the great puzzle!
            </p>
            <p>
              Be what you would seem to be - or, if you'd like it put more
              simply - never imagine yourself not to be otherwise than what it
              might appear to others that what you were or{" "}
              <u>might have been</u> was not otherwise than what you had been
              would have appeared to them to be otherwise.
            </p>
          </div>

          {/* Contact Section */}
          <div className="space-y-4 lg:w-1/3">
            <div>
              <h3 className="text-sm text-t-bright">Name</h3>
              <p className="text-lg font-semibold text-t-bright">Alex Walker</p>
            </div>
            <div>
              <h3 className="text-sm text-t-bright">Phone</h3>
              <p className="text-lg font-semibold text-t-bright">
                +1 212-708-9400
              </p>
            </div>
            <div>
              <h3 className="text-sm text-t-bright">Email</h3>
              <p className="text-lg font-semibold text-t-bright">
                hello@yourdomain.com
              </p>
            </div>
            <div>
              <h3 className="text-sm text-t-bright">Location</h3>
              <p className="text-lg font-semibold text-t-bright">
                Odesa, Ukraine
              </p>
            </div>
          </div>
        </div>

        {/* Download CV Button */}
        <div className="mt-10 text-center">
          <Link
            href="project"
            className="flex w-full items-center justify-center gap-2 rounded-md bg-gradient-to-r from-accent to-secondary px-5 py-2 text-lg font-bold text-t-opp-bright transition-transform duration-300 hover:scale-105 focus-visible:scale-105 lg:w-fit"
          >
            Download Resume <Download className="size-4 stroke-[3px]" />
          </Link>
        </div>
      </div>
    </div>
  );
}
