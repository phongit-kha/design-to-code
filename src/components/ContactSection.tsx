import * as React from "react";
import { cn } from "@/lib/utils";
import {
  ArrowDown,
  Download,
  Facebook,
  FileUser,
  Github,
  LayoutGrid,
  Linkedin,
  Mail,
  Send,
  Sparkles,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { FadeInAnimation } from "./animation/fadeInAnimation";

export function ContactSection({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <div className={cn("mt-16 w-full", className)}>
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
      {/* Contact Form */}
      <form className="space-y-6 py-12">
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          <FadeInAnimation>
            <label className="mb-1 block text-sm font-medium text-t-bright">
              Your Name*
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-400 bg-transparent py-2 text-t-bright focus:border-accent focus:outline-none"
              required
            />
          </FadeInAnimation>
          <FadeInAnimation>
            <label className="mb-1 block text-sm font-medium text-t-bright">
              Company Name
            </label>
            <input
              type="text"
              className="w-full border-b border-gray-400 bg-transparent py-2 text-t-bright focus:border-accent focus:outline-none"
            />
          </FadeInAnimation>
          <FadeInAnimation>
            <label className="mb-1 block text-sm font-medium text-t-bright">
              Email Address*
            </label>
            <input
              type="email"
              className="w-full border-b border-gray-400 bg-transparent py-2 text-t-bright focus:border-accent focus:outline-none"
              required
            />
          </FadeInAnimation>
          <FadeInAnimation>
            <label className="mb-1 block text-sm font-medium text-t-bright">
              Phone Number*
            </label>
            <input
              type="tel"
              placeholder="Phone Number*"
              className="w-full border-b border-gray-400 bg-transparent py-2 text-t-bright focus:border-accent focus:outline-none"
              required
            />
          </FadeInAnimation>
        </div>
        <FadeInAnimation>
          <label className="mb-1 block text-sm font-medium text-t-bright">
            A Few Words*
          </label>
          <textarea
            className="w-full border-b border-gray-400 bg-transparent py-2 text-t-bright focus:border-accent focus:outline-none"
            rows={4}
            required
          ></textarea>
        </FadeInAnimation>
        <FadeInAnimation>
          <button
            type="submit"
            className="flex items-center gap-2 rounded-full bg-gradient-to-tl from-accent to-secondary px-6 py-3 font-semibold text-base-tint"
          >
            Send Message <Send className="size-5" />
          </button>
        </FadeInAnimation>
      </form>

      <div className="space-y-12 text-t-bright lg:py-12">
        {/* Social Media Icons */}
        <div className="grid grid-cols-2 justify-items-center gap-6 sm:grid-cols-3 md:grid-cols-5">
          <FadeInAnimation>
            <button className="flex aspect-[4/3] w-full items-center justify-center rounded-md border border-t-opp-medium text-t-placeholder transition-all duration-300 hover:scale-105 hover:border-base-opp hover:text-base-opp focus-visible:scale-105 focus-visible:border-base-opp focus-visible:text-base-opp">
              <Facebook className="size-12" />
            </button>
          </FadeInAnimation>
          <FadeInAnimation index={3}>
            <button className="flex aspect-[4/3] w-full items-center justify-center rounded-md border border-t-opp-medium text-t-placeholder transition-all duration-300 hover:scale-105 hover:border-base-opp hover:text-base-opp focus-visible:scale-105 focus-visible:border-base-opp focus-visible:text-base-opp">
              <Mail className="size-12" />
            </button>
          </FadeInAnimation>
          <FadeInAnimation index={5}>
            <button className="flex aspect-[4/3] w-full items-center justify-center rounded-md border border-t-opp-medium text-t-placeholder transition-all duration-300 hover:scale-105 hover:border-base-opp hover:text-base-opp focus-visible:scale-105 focus-visible:border-base-opp focus-visible:text-base-opp">
              <Linkedin className="size-12" />
            </button>
          </FadeInAnimation>
          <FadeInAnimation index={7}>
            <button className="flex aspect-[4/3] w-full items-center justify-center rounded-md border border-t-opp-medium text-t-placeholder transition-all duration-300 hover:scale-105 hover:border-base-opp hover:text-base-opp focus-visible:scale-105 focus-visible:border-base-opp focus-visible:text-base-opp">
              <Github className="size-12" />
            </button>
          </FadeInAnimation>
          <FadeInAnimation index={9}>
            <button className="flex aspect-[4/3] w-full items-center justify-center rounded-md border border-t-opp-medium text-t-placeholder transition-all duration-300 hover:scale-105 hover:border-base-opp hover:text-base-opp focus-visible:scale-105 focus-visible:border-base-opp focus-visible:text-base-opp">
              <FileUser className="size-12" />
            </button>
          </FadeInAnimation>
        </div>

        {/* Contact Message */}
        <FadeInAnimation>
          <p className="mt-3 bg-gradient-to-r from-accent to-secondary bg-clip-text text-3xl font-extrabold leading-tight text-transparent">
            Want to know more about me, tell me about your project or just to
            say hello? Drop me a line and I'll get back as soon as possible.
          </p>
        </FadeInAnimation>

        {/* Contact Information */}
        <FadeInAnimation>
          <div className="flex flex-col justify-between space-y-4 border-t-[0.5px] border-t-opp-medium pt-6 text-left sm:flex-row sm:space-y-0">
            <div>
              <p className="text-sm font-semibold text-t-bright">Location</p>
              <p className="text-t-bright">Odesa, Ukraine</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-t-bright">Phone</p>
              <p className="text-t-bright">+1 212-708-9400</p>
            </div>
            <div>
              <p className="text-sm font-semibold text-t-bright">Email</p>
              <p className="text-t-bright">hello@alexwalker.com</p>
            </div>
          </div>
        </FadeInAnimation>
      </div>
    </div>
  );
}
