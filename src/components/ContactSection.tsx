import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Facebook,
  FileUser,
  Github,
  Linkedin,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";
import { FadeInAnimation } from "./animation/FadeInAnimation";
import Link from "next/link";

export function ContactSection({
  className = "",
  ref,
}: {
  className?: string;
  ref: any;
}): React.JSX.Element {
  return (
    <div id="contact" ref={ref} className={cn("w-full pt-24", className)}>
      <FadeInAnimation>
        <p className="flex w-fit items-center gap-2 rounded-sm border border-t-opp-medium bg-base px-4 py-2 text-sm font-bold text-t-medium">
          <Sparkles className="size-4 stroke-2" /> Contact
        </p>
      </FadeInAnimation>
      <FadeInAnimation index={2}>
        <h2 className="mt-3 bg-gradient-to-r from-accent to-secondary bg-clip-text text-4xl font-extrabold leading-tight text-transparent lg:text-[54px]">
          Let's make something awesome together!
        </h2>
      </FadeInAnimation>

      <div className="space-y-12 text-t-bright lg:py-12">
        {/* Social Media Icons */}
        <div className="grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
          <FadeInAnimation className="w-full">
            <Link
              target="_blank"
              href={"https://www.facebook.com/pongaid.khathawisood.7"}
              className="flex aspect-[4/3] w-full items-center justify-center rounded-md border border-t-opp-medium text-t-placeholder transition-all duration-300 hover:scale-105 hover:border-base-opp hover:text-base-opp focus-visible:scale-105 focus-visible:border-base-opp focus-visible:text-base-opp"
            >
              <Facebook aria-label="facebook" className="size-12" />
            </Link>
          </FadeInAnimation>
          <FadeInAnimation index={3} className="w-full">
            <button className="flex aspect-[4/3] w-full items-center justify-center rounded-md border border-t-opp-medium text-t-placeholder transition-all duration-300 hover:scale-105 hover:border-base-opp hover:text-base-opp focus-visible:scale-105 focus-visible:border-base-opp focus-visible:text-base-opp">
              <Mail aria-label="email" className="size-12" />
            </button>
          </FadeInAnimation>
          <FadeInAnimation index={5} className="w-full">
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/phongit-khanthawisood-24931b236/"
              }
              aria-label="linkedin"
              className="flex aspect-[4/3] w-full items-center justify-center rounded-md border border-t-opp-medium text-t-placeholder transition-all duration-300 hover:scale-105 hover:border-base-opp hover:text-base-opp focus-visible:scale-105 focus-visible:border-base-opp focus-visible:text-base-opp"
            >
              <Linkedin className="size-12" />
            </Link>
          </FadeInAnimation>
          <FadeInAnimation index={7} className="w-full">
            <Link
              target="_blank"
              href={"https://github.com/phongit-kha"}
              aria-label="github"
              className="flex aspect-[4/3] w-full items-center justify-center rounded-md border border-t-opp-medium text-t-placeholder transition-all duration-300 hover:scale-105 hover:border-base-opp hover:text-base-opp focus-visible:scale-105 focus-visible:border-base-opp focus-visible:text-base-opp"
            >
              <Github className="size-12" />
            </Link>
          </FadeInAnimation>
          <FadeInAnimation index={9} className="w-full">
            <Link
              download
              target="_blank"
              href={"/cv/CV.pdf"}
              aria-label="CV"
              className="flex aspect-[4/3] w-full items-center justify-center rounded-md border border-t-opp-medium text-t-placeholder transition-all duration-300 hover:scale-105 hover:border-base-opp hover:text-base-opp focus-visible:scale-105 focus-visible:border-base-opp focus-visible:text-base-opp"
            >
              <FileUser className="size-12" />
            </Link>
          </FadeInAnimation>
        </div>

        {/* Contact Message */}
        <FadeInAnimation>
          <p className="mt-3 bg-gradient-to-r from-accent to-secondary bg-clip-text text-3xl font-extrabold leading-tight text-transparent">
            Want to know more about me, just to say hello?
            <br />
            Drop me a line and I'll get back as soon as possible.
          </p>
        </FadeInAnimation>

        {/* Contact Information */}
        <FadeInAnimation className="flex flex-col justify-between space-y-4 border-t-[0.5px] border-t-opp-medium pt-6 text-left sm:flex-row sm:space-y-0">
          <div>
            <p className="text-sm font-semibold text-t-bright">Location</p>
            <p className="text-t-bright">Bangkok, Thailand</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-t-bright">Phone</p>
            <p className="text-t-bright">+66 989-414-552</p>
          </div>
          <div>
            <p className="text-sm font-semibold text-t-bright">Email</p>
            <p className="text-t-bright">phongit.kha@gmail.com</p>
          </div>
        </FadeInAnimation>
      </div>
    </div>
  );
}
