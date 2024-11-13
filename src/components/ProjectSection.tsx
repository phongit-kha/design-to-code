import * as React from "react";
import { cn } from "@/lib/utils";
import { ArrowDown, Download, LayoutGrid, Sparkles } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export function ProjectSection({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <div className={cn("mt-16 w-full", className)}>
      <p className="flex w-fit items-center gap-2 rounded-sm border border-t-opp-medium bg-base px-4 py-2 text-sm font-bold text-t-medium">
        <Sparkles className="size-4 stroke-2" /> Project
      </p>
      <h2 className="mt-3 bg-gradient-to-r from-accent to-secondary bg-clip-text text-4xl font-extrabold text-transparent">
        Check out my featured projects
      </h2>
      <div className="mt-10 flex w-full flex-wrap items-center justify-center gap-8">
        <button className="flex size-80 flex-row items-end rounded-md bg-[url('/profile/profile-icon.jpg')] bg-cover">
          <figcaption className="flex gap-2 px-7 py-5">
            <h5 className="hidden">Project name</h5>
            <Tag>Illustration</Tag>
            <Tag>3D Render</Tag>
          </figcaption>
        </button>
        <button className="flex size-80 flex-row items-end rounded-md bg-[url('/profile/profile-icon.jpg')] bg-cover">
          <figcaption className="flex gap-2 px-7 py-5">
            <h5 className="hidden">Project name</h5>
            <Tag color="white">Illustration</Tag>
            <Tag color="white">3D Render</Tag>
          </figcaption>
        </button>
        <button className="flex size-80 flex-row items-end rounded-md bg-[url('/profile/profile-icon.jpg')] bg-cover">
          <figcaption className="flex gap-2 px-7 py-5">
            <h5 className="hidden">Project name</h5>
            <Tag>Illustration</Tag>
            <Tag>3D Render</Tag>
          </figcaption>
        </button>
        <button className="flex size-80 flex-row items-end rounded-md bg-[url('/profile/profile-icon.jpg')] bg-cover">
          <figcaption className="flex gap-2 px-7 py-5">
            <h5 className="hidden">Project name</h5>
            <Tag color="white">Illustration</Tag>
            <Tag color="white">3D Render</Tag>
          </figcaption>
        </button>
        <button className="flex size-80 flex-row items-end rounded-md bg-[url('/profile/profile-icon.jpg')] bg-cover">
          <figcaption className="flex gap-2 px-7 py-5">
            <h5 className="hidden">Project name</h5>
            <Tag>Illustration</Tag>
            <Tag>3D Render</Tag>
          </figcaption>
        </button>
        <button className="flex size-80 flex-row items-end rounded-md bg-[url('/profile/profile-icon.jpg')] bg-cover">
          <figcaption className="flex gap-2 px-7 py-5">
            <h5 className="hidden">Project name</h5>
            <Tag color="white">Illustration</Tag>
            <Tag color="white">3D Render</Tag>
          </figcaption>
        </button>
        <button className="flex size-80 flex-row items-end rounded-md bg-[url('/profile/profile-icon.jpg')] bg-cover">
          <figcaption className="flex gap-2 px-7 py-5">
            <h5 className="hidden">Project name</h5>
            <Tag>Illustration</Tag>
            <Tag>3D Render</Tag>
          </figcaption>
        </button>
        <button className="flex size-80 flex-row items-end rounded-md bg-[url('/profile/profile-icon.jpg')] bg-cover">
          <figcaption className="flex gap-2 px-7 py-5">
            <h5 className="hidden">Project name</h5>
            <Tag color="white">Illustration</Tag>
            <Tag color="white">3D Render</Tag>
          </figcaption>
        </button>
        <button className="flex size-80 flex-row items-end rounded-md bg-[url('/profile/profile-icon.jpg')] bg-cover">
          <figcaption className="flex gap-2 px-7 py-5">
            <h5 className="hidden">Project name</h5>
            <Tag>Illustration</Tag>
            <Tag>3D Render</Tag>
          </figcaption>
        </button>
        <button className="flex size-80 flex-row items-end rounded-md bg-[url('/profile/profile-icon.jpg')] bg-cover">
          <figcaption className="flex gap-2 px-7 py-5">
            <h5 className="hidden">Project name</h5>
            <Tag color="white">Illustration</Tag>
            <Tag color="white">3D Render</Tag>
          </figcaption>
        </button>
      </div>
    </div>
  );
}

const Tag = ({
  color = "black",
  children,
}: {
  color?: "white" | "black";
  children: React.ReactNode;
}): React.JSX.Element => {
  return (
    <span
      className={`rounded-sm px-3 py-1.5 text-sm ${color === "black" ? "bg-base-opp text-t-opp-bright" : "bg-base text-t-bright"}`}
    >
      {children}
    </span>
  );
};
