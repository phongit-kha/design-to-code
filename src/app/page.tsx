import { AboutMe } from "@/components/AboutMeSection";
import { ContactSection } from "@/components/ContactSection";
import { HomeSection } from "@/components/HomeSection";
import { ModeToggle } from "@/components/ModeToggle";
import { Navbar } from "@/components/Navbar";
import { Profile } from "@/components/Profile";
import { ProjectSection } from "@/components/ProjectSection";
import { ResumeSection } from "@/components/ResumeSection";
import SvgBackground from "@/components/SvgBackground";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center p-4 lg:px-12 lg:py-6">
      <div className="flex w-full flex-col items-center lg:flex-row lg:items-start lg:justify-evenly">
        <Navbar className="order-1 lg:order-2" />
        <Profile className="order-2 lg:order-1" />
      </div>
      <HomeSection />
      <ProjectSection />
      <AboutMe />
      <ResumeSection />
      <ContactSection />
      <section></section>
      <SvgBackground />
    </div>
  );
}
