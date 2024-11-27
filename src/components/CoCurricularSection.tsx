import { Link as LinkIcon } from "lucide-react";
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { FadeInAnimation } from "./animation/FadeInAnimation";

type Curricular = {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
  urlShow?: string;
};

export function CoCurricularSection(): React.JSX.Element {
  const data: Curricular[] = [
    {
      title: "ESC CU",
      description: "Engineering Student Committee, Chulalongkorn University.",
      imageUrl: "/curricular/esclogo.webp",
      url: "https://www.instagram.com/escchula/",
      urlShow: "instagram.com/escchula",
    },
    {
      title: "Quant CU",
      description:
        "We want this space to be where we learn, research, and share our knowledge to build a foundation in quantitative finance.",
      imageUrl: "/curricular/quantlogo.webp",
      url: "https://www.instagram.com/quantcu/",
      urlShow: "instagram.com/quantcu",
    },
    {
      title: "Thinc",
      description:
        "Thinc. is a student-run community aiming to make impact to society. A student community committed to promoting real-world profession skills with the goal of incubating the leader of tomorrow.",
      imageUrl: "/curricular/thinc.webp",
      url: "https://thinc.in.th/",
      urlShow: "thinc.in.th",
    },
    {
      title: "ICPC Thailand 2024",
      description:
        "The International Collegiate Programming Contest is a prestigious algorithmic competition for college students. solve real-world problems, enhancing collaboration, creativity, and pressure management.",
      imageUrl: "/curricular/icpc.webp",

      url: "https://icpc-2024.cp.eng.chula.ac.th/",
      urlShow: "icpc-2024.cp.eng.chula.ac.th",
    },
    {
      title: "Larngear Camp 2024",
      description:
        "we offers high school students nationwide a chance to explore engineering through hands-on learning and activities, helping them decide on pursuing engineering in higher education.",
      imageUrl: "/curricular/larngear24.webp",
      url: "https://www.instagram.com/larngear_camp/",
      urlShow: "instagram.com/larngear_camp",
    },
  ];
  return (
    <div className="w-full">
      <h3 className="mt-8 text-3xl font-bold text-t-bright lg:text-4xl">
        Co-Curricular Activites
      </h3>
      <div className="mt-4 grid w-full grid-cols-1 gap-4 lg:grid-cols-2">
        {data.map((item, index) => {
          return (
            <FadeInAnimation index={index * 2}>
              <Link
                key={item.title}
                target="_blank"
                href={item.url}
                className="group flex h-full w-full flex-col justify-between gap-2 rounded-sm p-6 outline-none transition-all ease-in hover:cursor-pointer hover:bg-base-tint focus:bg-base-tint"
              >
                <Image
                  src={item.imageUrl}
                  width={100}
                  height={100}
                  alt={item.title + " logo"}
                  className="size-10 rounded-full shadow-md shadow-t-opp-medium"
                />
                <h4 className="text-lg font-semibold">{item.title}</h4>
                <p className="text-t-muted">{item.description}</p>

                <p className="flex items-center gap-4">
                  {" "}
                  <LinkIcon className="transition-colors duration-300 group-hover:stroke-accent" />
                  <span className="transition-all duration-300 group-hover:text-accent group-focus:text-accent">
                    {item.urlShow ? item.urlShow : item.url}
                  </span>
                </p>
              </Link>
            </FadeInAnimation>
          );
        })}
      </div>
    </div>
  );
}
