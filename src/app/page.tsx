import { ModeToggle } from "@/components/ModeToggle";
import { Navbar } from "@/components/Navbar";
import { Profile } from "@/components/Profile";
import SvgBackground from "@/components/SvgBackground";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center lg:px-12 lg:py-6">
      <div className="flex w-full flex-col items-center lg:flex-row lg:items-start lg:justify-evenly">
        <Navbar className="order-1 lg:order-2" />
        <Profile className="order-2 lg:order-1" />
      </div>
      <SvgBackground />
    </div>
  );
}
