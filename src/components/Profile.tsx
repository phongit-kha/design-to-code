import Image from "next/image";
import * as React from "react";
import { Button } from "./ui/button";

import { Facebook, FileUser, Github, Linkedin, Mail } from "lucide-react";

const buttonStyle: string =
  "border-t-opp-medium size-10 border-[0.5px] transition-transform duration-300 hover:scale-110 focus:scale-110";

export function Profile() {
  return (
    <div className="bg-base-tint border-t-opp-medium m-4 h-auto w-80 space-y-3 rounded-3xl border-[0.5px] p-8">
      <div className="flex">
        <Image
          className="rounded-sm"
          src="/profile/profile-icon.jpg"
          width={60}
          height={60}
          alt="fav icon"
        />
        <p className="ml-2 text-2xl font-bold">
          Phongit <br /> Khanthawisood
        </p>
      </div>
      <Image
        className="rounded-sm"
        src="/profile/profile-icon.jpg"
        width={280}
        height={280}
        alt="tonnam profile picture"
      />
      <h6 className="text-t-bright text-lg font-bold">
        <small className="text-t-medium">Specialization:</small>
        <br /> Fullstack Developer
      </h6>
      <h6 className="text-t-bright text-lg font-bold">
        <small className="text-t-medium">Base in:</small>
        <br /> Bangkok, Thailand
      </h6>
      <div className="flex justify-between">
        <Button className={buttonStyle} aria-label="facebook contact">
          <Facebook />
        </Button>
        <Button className={buttonStyle} aria-label="Gmail contact">
          <Mail />
        </Button>
        <Button className={buttonStyle} aria-label="Gmail contact">
          <Github />
        </Button>
        <Button className={buttonStyle} aria-label="Linked-in contact">
          <Linkedin />
        </Button>
        <Button className={buttonStyle} aria-label="Resume information">
          <FileUser />
        </Button>
      </div>
      <Button
        aria-label="go to contact phongit"
        className="text-base-tint h-auto w-full rounded-md bg-gradient-to-r from-accent to-secondary py-2 text-lg font-bold transition-transform duration-300 hover:scale-105 focus:scale-110"
      >
        Let's Work Together!
      </Button>
    </div>
  );
}
