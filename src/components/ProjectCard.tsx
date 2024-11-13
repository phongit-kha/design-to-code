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

export type CardDetails = {
  projectName: string;
  tag: string[];
  tagColor: "white" | "black";
  imgUrl: string;
  description: string;
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
      <DialogTrigger className="flex aspect-square w-full flex-row items-end rounded-md bg-[url('/profile/profile-icon.jpg')] bg-cover transition-all duration-300 ease-in hover:scale-105">
        <figcaption className="flex gap-2 px-7 py-5">
          <h5 className="hidden">{cardDetails.projectName}</h5>
          {cardDetails.tag.map((index, item) => (
            <Tag key={index} color={cardDetails.tagColor}>
              item
            </Tag>
          ))}
        </figcaption>
      </DialogTrigger>
      <DialogContent className="bg-[#111111]">
        <div className="max-h-xl absolute bottom-[110%] left-[50%] flex w-full max-w-sm -translate-x-1/2 justify-center text-5xl">
          <Image
            src="/profile/profile-icon.jpg"
            alt="project image"
            className="size-full"
            width={250}
            height={250}
          />
        </div>
        <DialogHeader className="space-y-2.5 text-[#ebf0f7]">
          <DialogTitle className="text-left text-2xl font-bold">
            {cardDetails.projectName}
          </DialogTitle>
          <div className="flex gap-2">
            {cardDetails.tag.map((index, item) => (
              <Tag key={index} className="border">
                item
              </Tag>
            ))}
          </div>
          <DialogDescription className="text-left text-lg">
            {cardDetails.description}
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

const Tag = ({
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
