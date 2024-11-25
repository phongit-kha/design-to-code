"use client";
import React from "react";
import { useState } from "react";
import { Button } from "./ui/button";

const international = [
  {
    title: "Gold Medal: The Innovation Week in Africa 2021 (IWA 2021)",
    describe: "Project: Development of a Facial Computer Control System.",
    date: "8 - 12 September 2021",
  },
  {
    title: "Bronze Prize: Seoul International Invention Fair 2021 (SIIF 2021)",
    describe:
      "Project: Sorting Social Media Posts for Help in Disasters With Machine Learning.",
    date: "1 -4 December 2021",
  },
  {
    title:
      "Honorable Mention: World Innovative Science Project Olympiad 2021 (WISPO 2021)",
    describe:
      "Project: Sorting Social Media Posts for Help in Disasters With Machine Learning.",
    date: "11 - 17 December 2021",
  },
  {
    title: "Bronze Medal: International Youth STEM Tournament 2022 (IYST 2022)",
    describe:
      "Project: The Development of Web Application for Check Beta-Agonist in Pork using Deep Learning.",
    date: "28 March 2022",
  },
];
const national = [
  {
    title: "Bronze Medel: Thailand Olympiad in Informatics 18 (TOI18)",
    describe:
      "Competed in the 18th Thailand Olympiad in Informatics (TOI18) as a representative.",
    date: "1 - 4 June 2022",
  },
  {
    title:
      "Certificate from Internationally Outstanding Inventors Award Ceremony 2022 (IOIAC'22)",
    describe:
      "Awarded a certificate for outstanding achievements in innovation at an international level.",
    date: "15 June 2022",
  },
  {
    title:
      "Gold Medal in regional & Honorable Mention: Young Scientist Competition 2022",
    describe:
      "Project: Development of a Model for Predicting Mutation in the COVID-19 using Transformers Model.",
    date: "7 March 2022",
  },
  {
    title:
      "Gold Medal in regional & Honorable Mention: Thailand Young Scientist Festival 18 (TYSF18)",
    describe:
      "Project: Development of a Model for Predicting Mutation in the COVID-19 using Transformers Model.",
    date: "18 August 2022",
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
                  <div
                    key={item.title}
                    className="flex h-52 space-x-8 rounded-sm p-4 transition-all ease-in hover:cursor-pointer hover:bg-base-tint md:h-32"
                    style={{ animation: `fadeInAnimation 2s` }}
                  >
                    <div className="h-full self-center">
                      <div className="mask mask-circle relative left-[15%] top-[45%] z-10 h-2 w-2 bg-t-muted"></div>
                      {index != international.length - 1 ? (
                        <div className="relative left-[50%] top-[60%] z-10 h-[100%] w-[2px] bg-t-medium"></div>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <time className="text-t-muted">{item.date}</time>
                      <p>{item.describe}</p>
                    </div>
                  </div>
                );
              })
            : national.map((item, index) => {
                return (
                  <div
                    key={item.title}
                    className="flex h-52 space-x-8 rounded-sm p-4 transition-all ease-in hover:cursor-pointer hover:bg-base-tint active:bg-base-tint md:h-32"
                    style={{ animation: `fadeInAnimation 2s` }}
                  >
                    <div className="h-full self-center">
                      <div className="mask mask-circle relative left-[15%] top-[45%] h-2 w-2 bg-t-muted"></div>
                      {index != national.length - 1 ? (
                        <div className="relative left-[50%] top-[60%] h-[100%] w-[2px] bg-t-medium"></div>
                      ) : (
                        <></>
                      )}
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold">{item.title}</h4>
                      <time className="text-t-muted">{item.date}</time>
                      <p>{item.describe}</p>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
    </>
  );
}

export default AwardSection;
