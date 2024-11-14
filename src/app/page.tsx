"use client";
import { AboutMe } from "@/components/AboutMeSection";
import { ContactSection } from "@/components/ContactSection";
import { HomeSection } from "@/components/HomeSection";
import { Navbar } from "@/components/Navbar";
import { Profile } from "@/components/Profile";
import { ProjectSection } from "@/components/ProjectSection";
import { ResumeSection } from "@/components/ResumeSection";
import SvgBackground from "@/components/SvgBackground";
import { useInView } from "framer-motion";
import { useEffect, useRef, useState } from "react";

export default function Home() {
  const [activeSection, setActiveSection] = useState("");

  const homeRef = useRef(null);
  const projectsRef = useRef(null);
  const aboutRef = useRef(null);
  const resumeRef = useRef(null);
  const contactRef = useRef(null);

  // Check if each section is in view
  const homeInview = useInView(homeRef, { margin: "-50% 0px -50% 0px" });
  const projectsInView = useInView(projectsRef, {
    margin: "-50% 0px -50% 0px",
  });
  const aboutInView = useInView(aboutRef, { margin: "-50% 0px -50% 0px" });
  const resumeInView = useInView(resumeRef, { margin: "-50% 0px -50% 0px" });
  const contactInView = useInView(contactRef, { margin: "-50% 0px -50% 0px" });

  useEffect(() => {
    if (aboutInView) setActiveSection("about");
    else if (projectsInView) setActiveSection("projects");
    else if (contactInView) setActiveSection("contact");
    else if (homeInview) setActiveSection("home");
    else if (resumeInView) setActiveSection("resume");
    else setActiveSection("");
  }, [aboutInView, projectsInView, contactInView, homeInview, resumeInView]);

  return (
    <div id="home" className="flex flex-col items-center p-4 lg:px-20 lg:pt-6">
      <div className="flex w-full flex-col items-center gap-20 lg:flex-row lg:items-start 2xl:justify-center">
        <Profile />
        <div className="w-full pb-20">
          <Navbar activeSection={activeSection} />
          <section>
            <HomeSection ref={homeRef} />
            <ProjectSection ref={projectsRef} className="mt-12" />
            <AboutMe ref={aboutRef} className="mt-12" />
            <ResumeSection ref={resumeRef} className="mt-12" />
            <ContactSection ref={contactRef} className="mt-12" />
          </section>
        </div>
      </div>

      <SvgBackground />
    </div>
  );
}
