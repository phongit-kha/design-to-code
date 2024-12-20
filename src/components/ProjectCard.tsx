"use client";

import * as React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { Github } from "lucide-react";

export type CardDetails = {
  projectName: string;
  tag: string[];
  tagColor: "white" | "black";
  imgUrl: string;
  description: string;
  githubUrl: string;
  webUrl: string;
};

export function ProjectCard({
  className = "",
  cardDetails,
}: {
  className?: string;
  cardDetails: CardDetails;
}): React.JSX.Element {
  return (
    <Dialog>
      <DialogTrigger className="relative flex aspect-square w-full flex-row items-end rounded-md shadow-lg shadow-t-opp-medium transition-all duration-300 ease-in hover:scale-105">
        <Image
          className="absolute inset-full left-0 top-0 -z-10 rounded-md"
          src={cardDetails.imgUrl}
          alt={cardDetails.projectName + " image"}
          width={500}
          height={500}
        />
        <figcaption className="flex gap-2 px-7 py-5">
          <h5 className="hidden">{cardDetails.projectName}</h5>
          {cardDetails.tag.map((item, index) => (
            <Tag key={index} color={cardDetails.tagColor}>
              {item}
            </Tag>
          ))}
        </figcaption>
      </DialogTrigger>
      <DialogContent className="bg-[#111111]">
        <div className="max-h-xl absolute bottom-[110%] left-[50%] flex w-full max-w-sm -translate-x-1/2 justify-center text-5xl">
          <Image
            src={cardDetails.imgUrl}
            alt={cardDetails.projectName + " image"}
            className="size-full"
            width={500}
            height={500}
          />
        </div>
        <DialogHeader className="space-y-2.5 text-[#ebf0f7]">
          <DialogTitle className="text-left text-2xl font-bold">
            {cardDetails.projectName}
          </DialogTitle>
          <div className="flex gap-2">
            {cardDetails.tag.map((item, index) => (
              <Tag key={index} className="border">
                {item}
              </Tag>
            ))}
          </div>
          <DialogDescription className="text-left text-lg">
            {cardDetails.description}
          </DialogDescription>
        </DialogHeader>
        <div className="flex w-full gap-4">
          <Link
            target="_blank"
            href={cardDetails.githubUrl}
            aria-label="github repo"
            className="flex aspect-square h-auto w-full min-w-10 max-w-12 items-center justify-center rounded-full border-[0.5px] border-[#c7c6d3] bg-[#161616] text-[#c7c6d3] transition-transform duration-300 hover:scale-110 focus:scale-110"
          >
            <Github />
          </Link>
          <Link
            target="_blank"
            href={cardDetails.webUrl}
            aria-label="visit web"
            className="w-full whitespace-nowrap rounded-md bg-gradient-to-tl from-[#e4b8bf] to-[#cec4ef] p-2.5 px-5 text-center text-lg font-semibold text-[#121319] transition-transform duration-300 hover:scale-105 focus-visible:scale-105"
          >
            Visite Web
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export const Tag = ({
  color = "black",
  children,
  className,
}: {
  color?: "white" | "black";
  children: React.ReactNode;
  className?: string;
}): React.JSX.Element => {
  return (
    <span
      className={cn(
        `rounded-sm px-3 py-1.5 text-sm ${color === "black" ? "bg-[#111111] text-[#ebf0f7]" : "bg-[#e6ebf4] text-[#22232c]"}`,
        className,
      )}
    >
      {children}
    </span>
  );
};
