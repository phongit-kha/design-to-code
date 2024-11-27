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

export type AwardDetails = {
  title: string;
  projectName: string;
  shortName: string;
  tag: string[];
  date: string;
  imgUrl: string;
  description: string;
};

export function AwardsCard({
  className = "",
  awardsDetails,
  index,
  length,
}: {
  className?: string;
  awardsDetails: AwardDetails;
  index: number;
  length: number;
}): React.JSX.Element {
  return (
    <Dialog>
      <DialogTrigger className="flex h-52 w-full space-x-8 rounded-sm p-4 outline-none transition-all ease-in hover:cursor-pointer hover:bg-base-tint focus:bg-base-tint md:h-32">
        <div className="h-full self-center">
          <div className="mask mask-circle relative left-[15%] top-[45%] z-10 h-2 w-2 bg-t-muted"></div>
          {index != length - 1 ? (
            <div className="relative left-[50%] top-[60%] z-10 h-[100%] w-[2px] bg-t-medium"></div>
          ) : (
            <></>
          )}
        </div>

        <div className="text-left">
          <h4 className="text-lg font-semibold">{awardsDetails.title}</h4>
          <time className="text-t-muted">{awardsDetails.date}</time>
          <p>{awardsDetails.projectName}</p>
        </div>
      </DialogTrigger>
      <DialogContent className="bg-[#111111]">
        <div className="max-h-xl absolute bottom-[130%] left-[50%] flex w-full max-w-lg -translate-x-1/2 justify-center text-5xl">
          <Image
            src={awardsDetails.imgUrl}
            alt={awardsDetails.title + " image"}
            className="aspect-video w-full"
            width={1600}
            height={900}
          />
        </div>
        <DialogHeader className="space-y-2.5 text-[#ebf0f7]">
          <DialogTitle className="text-left text-2xl font-bold">
            {awardsDetails.shortName}
            <br />
            <small className="text-[#a1a2a3]">
              {awardsDetails.projectName}
            </small>
          </DialogTitle>
          <div className="flex flex-wrap gap-2">
            {awardsDetails.tag.map((item, index) => (
              <Tag key={index} className="border">
                {item}
              </Tag>
            ))}
          </div>
          <DialogDescription className="text-left text-lg">
            <br />
            {awardsDetails.description}
          </DialogDescription>
          <Link
            target="_blank"
            href="https://drive.google.com/drive/folders/1YWO204qa44irlOk0zcotPGLrSZvomt6C?usp=sharing"
            aria-label="certificate"
            className="w-full whitespace-nowrap rounded-md bg-gradient-to-tl from-[#e4b8bf] to-[#cec4ef] p-2.5 px-5 text-center text-lg font-semibold text-[#121319] transition-transform duration-300 hover:scale-105 focus-visible:scale-105"
          >
            Certificate
          </Link>
        </DialogHeader>
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
