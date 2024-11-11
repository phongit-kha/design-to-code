import { ModeToggle } from "@/components/ModeToggle";
import { Profile } from "@/components/Profile";
import SvgBackground from "@/components/SvgBackground";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <Profile />
      <ModeToggle />
      <SvgBackground />
    </div>
  );
}
