import Image from "next/image";
import * as React from "react";
import { Button } from "./ui/button";

import { cn } from "@/lib/utils";

import { Facebook, FileUser, Github, Linkedin, Mail } from "lucide-react";

export function Profile({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <div
      className={cn(
        "top-12 h-auto w-full min-w-80 max-w-96 space-y-3 rounded-3xl border-[0.5px] border-t-opp-medium bg-base-tint p-8 lg:sticky lg:px-12 lg:pb-8 lg:pt-12",
        className,
      )}
    >
      <div className="flex">
        <Image
          className="w-full min-w-16 max-w-20 rounded-sm"
          src="/profile/profile-icon.jpg"
          width={60}
          height={60}
          alt="fav icon"
        />
        <p className="ml-2 self-center text-2xl font-bold">
          Phongit <br /> Khanthawisood
        </p>
      </div>
      <Image
        className="aspect-square w-full rounded-sm"
        src="/profile/profile-icon.jpg"
        width={280}
        height={280}
        alt="tonnam profile picture"
      />
      <h6 className="text-lg font-bold text-t-bright lg:text-xl">
        <small className="text-t-medium">Specialization:</small>
        <br /> Fullstack Developer
      </h6>
      <h6 className="text-lg font-bold text-t-bright lg:text-xl">
        <small className="text-t-medium">Base in:</small>
        <br /> Bangkok, Thailand
      </h6>
      <div className="flex justify-between">
        <IconButton
          icon="Facebook"
          tooltip="Facebook"
          label="facebook contact"
        />
        <IconButton icon="Mail" tooltip="Gmail" label="Gmail contact" />
        <IconButton
          icon="Linkedin"
          tooltip="LinkedIn"
          label="LinkedIn contact"
        />
        <IconButton icon="Github" tooltip="Github" label="Github Profile" />
        <IconButton icon="FileUser" tooltip="Resume" label="Resume file" />
      </div>
      <Button
        aria-label="go to contact phongit"
        className="h-auto w-full rounded-md bg-gradient-to-r from-accent to-secondary py-2 text-lg font-bold text-base-tint transition-transform duration-300 hover:scale-105 focus:scale-110"
      >
        Let's Work Together!
      </Button>
    </div>
  );
}

const IconButton = ({
  icon,
  tooltip,
  label,
}: {
  icon: "Facebook" | "FileUser" | "Linkedin" | "Mail" | "Github";
  tooltip: string;
  label: string;
}): React.JSX.Element => {
  const buttonStyle: string =
    "border-t-opp-medium size-10 lg:size-12 border-[0.5px] transition-transform duration-300 hover:scale-110 focus:scale-110";
  const Icon = {
    Facebook: <Facebook />,
    FileUser: <FileUser />,
    Linkedin: <Linkedin />,
    Github: <Github />,
    Mail: <Mail />,
  };
  return (
    <Button className={buttonStyle} aria-label="facebook contact">
      {Icon[icon]}
    </Button>
  );
};
