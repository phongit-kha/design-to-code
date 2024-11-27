import Image from "next/image";
import * as React from "react";
import { cn } from "@/lib/utils";
import { Facebook, FileUser, Github, Linkedin, Mail } from "lucide-react";
import Link from "next/link";

export function Profile({
  className = "",
}: {
  className?: string;
}): React.JSX.Element {
  return (
    <div
      className={cn(
        "top-12 z-10 flex h-auto w-full min-w-80 max-w-96 flex-col space-y-3 rounded-3xl border-[0.5px] border-t-opp-medium bg-base-tint p-8 lg:sticky lg:px-12 lg:pb-8 lg:pt-12",
        className,
      )}
    >
      <div className="flex">
        <Image
          className="w-full min-w-16 max-w-20 rounded-sm"
          src="/profile/profile-icon.webp"
          width={60}
          height={60}
          alt="fav icon"
          loading="eager"
        />
        <p className="ml-2 self-center text-2xl font-bold">
          Phongit <br /> Khanthawisood
        </p>
      </div>
      <Image
        className="aspect-square w-full rounded-sm"
        src="/profile/profile.webp"
        width={280}
        height={280}
        alt="tonnam profile picture"
        loading="eager"
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
        <IconButton icon="FileUser" tooltip="CV" label="CV file" />
      </div>
      <Link
        href="#contact"
        aria-label="go to contact phongit"
        className="h-auto w-full rounded-md bg-gradient-to-r from-accent to-secondary py-2 text-center text-lg font-bold text-base-tint transition-transform duration-300 hover:scale-105 focus:scale-110"
      >
        Let's Work Together!
      </Link>
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
  const Icon = {
    Facebook: {
      icon: <Facebook className="size-5" />,
      url: "https://www.facebook.com/pongaid.khathawisood.7",
    },
    FileUser: { icon: <FileUser className="size-5" />, url: "/cv/CV.pdf" },
    Linkedin: {
      icon: <Linkedin className="size-5" />,
      url: "https://www.linkedin.com/in/phongit-khanthawisood-24931b236/",
    },
    Github: {
      icon: <Github className="size-5" />,
      url: "https://github.com/phongit-kha",
    },
    Mail: { icon: <Mail className="size-5" />, url: "#contact" },
  };

  if (icon === "FileUser") {
    return (
      <Link
        download
        target="_blank"
        href={Icon[icon].url}
        className="flex aspect-square h-auto w-1/6 min-w-10 max-w-12 items-center justify-center rounded-full border-[0.5px] border-t-opp-medium transition-transform duration-300 hover:scale-110 focus:scale-110"
        aria-label={icon}
      >
        {Icon[icon].icon}
      </Link>
    );
  } else if (icon === "Mail") {
    return (
      <Link
        href={Icon[icon].url}
        className="flex aspect-square h-auto w-1/6 min-w-10 max-w-12 items-center justify-center rounded-full border-[0.5px] border-t-opp-medium transition-transform duration-300 hover:scale-110 focus:scale-110"
        aria-label={icon}
      >
        {Icon[icon].icon}
      </Link>
    );
  }
  return (
    <Link
      target="_blank"
      href={Icon[icon].url}
      className="flex aspect-square h-auto w-1/6 min-w-10 max-w-12 items-center justify-center rounded-full border-[0.5px] border-t-opp-medium transition-transform duration-300 hover:scale-110 focus:scale-110"
      aria-label={icon}
    >
      {Icon[icon].icon}
    </Link>
  );
};
