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
    <div className="flex flex-col items-center p-4 lg:px-20 lg:py-6">
      <div className="flex w-full flex-col items-center gap-20 lg:flex-row lg:items-start 2xl:justify-center">
        <Profile />
        <div className="w-full">
          <Navbar />
          <section>
            <HomeSection />
            <ProjectSection />
            <AboutMe />
            <ResumeSection />
            <ContactSection />
          </section>
        </div>
      </div>

      <SvgBackground />
    </div>
  );
}
