"use client";
import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";
import { AwardDetails, AwardsCard } from "./AwardCard";

const international: AwardDetails[] = [
  {
    title: "Gold Medal: The Innovation Week in Africa 2021 (IWA 2021)",
    projectName: "Project: Development of a Facial Computer Control System.",
    shortName: "Gold Medal: IWA 2021",
    date: "8 - 12 September 2021",
    imgUrl: "/awards/Slide1.webp",
    tag: ["OpenCV", "Machine Learning"],
    description: "",
  },
  {
    title: "Bronze Prize: Seoul International Invention Fair 2021 (SIIF 2021)",
    projectName:
      "Project: Sorting Social Media Posts for Help in Disasters With Machine Learning.",
    shortName: "Bronze Prize: SIIF 2021",
    date: "1 -4 December 2021",
    imgUrl: "/awards/Slide2.webp",
    tag: ["NLP", "Machine Learning", "Web Scraping"],
    description: "",
  },
  {
    title:
      "Honorable Mention: World Innovative Science Project Olympiad 2021 (WISPO 2021)",
    projectName:
      "Project: Sorting Social Media Posts for Help in Disasters With Machine Learning.",
    shortName: "Honorable Mention: WISPO 2021",
    date: "11 - 17 December 2021",
    imgUrl: "/awards/Slide3.webp",
    tag: ["NLP", "Machine Learning", "Web Scraping"],
    description: "",
  },
  {
    title: "Bronze Medal: International Youth STEM Tournament 2022 (IYST 2022)",
    projectName:
      "Project: The Development of Web Application for Check Beta-Agonist in Pork using Deep Learning.",
    shortName: "Bronze Medal: IYST 2022",
    date: "28 March 2022",
    imgUrl: "/awards/Slide4.webp",
    tag: ["Deep Learning", "Image Processing"],
    description: "",
  },
];
const national: AwardDetails[] = [
  {
    title: "Bronze Medel: Thailand Olympiad in Informatics 18 (TOI18)",
    projectName:
      "Competed in the 18th Thailand Olympiad in Informatics (TOI18) as a representative.",
    shortName: "Bronze Medel: TOI18",
    date: "1 - 4 June 2022",
    imgUrl: "/awards/Slide5.webp",
    tag: ["Data Structure", "Algorithm"],
    description: "",
  },
  {
    title:
      "Certificate from Internationally Outstanding Inventors Award Ceremony 2022 (IOIAC'22)",
    projectName:
      "Awarded a certificate for outstanding achievements in innovation at an international level.",
    shortName: "Certificate fro Inventors: IOIAC'22",
    date: "15 June 2022",
    imgUrl: "/awards/Slide6.webp",
    tag: ["Inventors", "Certificate"],
    description: "",
  },
  {
    title:
      "Gold Medal in regional & Honorable Mention: Young Scientist Competition 2022",
    projectName:
      "Project: Development of a Model for Predicting Mutation in the COVID-19 using Transformers Model.",
    shortName: "Gold Medal: YSC 2022",
    date: "7 March 2022",
    imgUrl: "/awards/Slide7.webp",
    tag: ["Deep Learning", "LLM", "COVID-19"],
    description: "",
  },
  {
    title:
      "Gold Medal in regional & Honorable Mention: Thailand Young Scientist Festival 18 (TYSF18)",
    projectName:
      "Project: Development of a Model for Predicting Mutation in the COVID-19 using Transformers Model.",
    shortName: "Gold Medel: TYSF18",
    date: "18 August 2022",
    imgUrl: "/awards/Slide8.webp",
    tag: ["Deep Learning", "LLM", "COVID-19"],
    description: "",
  },
];

function AwardSection() {
  const [awardsState, setAwardsState] = useState(true);
  return (
    <>
      <h3 className="mt-8 text-3xl font-bold text-t-bright lg:text-4xl">
        Awards & Achievements
      </h3>

      <div className="my-4 space-x-2">
        <Button
          aria-label="switch to international awards"
          className={
            "rounded-full font-semibold shadow-t-opp-medium transition-transform duration-300 hover:scale-105 " +
            (awardsState
              ? "bg-gradient-to-tl from-accent to-secondary text-t-opp-bright"
              : "text-t-bright")
          }
          onClick={(event) => {
            setAwardsState(true);
          }}
        >
          International
        </Button>
        <Button
          aria-label="switch to national awards"
          className={
            "rounded-full font-semibold shadow-t-opp-medium transition-transform duration-300 hover:scale-105 " +
            (awardsState
              ? "text-t-bright"
              : "bg-gradient-to-tl from-accent to-secondary text-t-opp-bright")
          }
          onClick={(event) => {
            setAwardsState(false);
          }}
        >
          National
        </Button>
        <div className="py-4">
          {awardsState
            ? international.map((item, index) => {
                return (
                  <AwardsCard
                    index={index}
                    length={international.length}
                    awardsDetails={item}
                  />
                );
              })
            : national.map((item, index) => {
                return (
                  <AwardsCard
                    index={index}
                    length={national.length}
                    awardsDetails={item}
                  />
                );
              })}
        </div>
      </div>
    </>
  );
}

export default AwardSection;
