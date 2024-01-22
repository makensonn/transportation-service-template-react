"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { HiOutlineChevronDoubleUp } from "react-icons/hi";

import airportImg from "../assets/projects/2.png";
import funeralImg from "../assets/projects/3.png"; 
import eventsImg from "../assets/projects/1.png";

import ProjectItems from "./ProjectItems";

const titleStyle = "text-4xl font-bold inline border-b-4 border-red-600";

const Projects = () => {
  return (
    <div id="projects" className="w-full">
      <div className="max-w-[1240px] mx-auto px-2 py-16">
        <p className={titleStyle}>
          <br></br>
          <br></br>Services
        </p>
        <p className="py-6"></p>

        <div className="grid md:grid-cols-3 gap-8">
          <ProjectItems
            title="Airport"
            backgroundImg={airportImg}
            projectUrl="/#contact"
            tech="Luxury Ride"
          />

          <ProjectItems
            title="Event"
            backgroundImg={eventsImg}
            projectUrl="/#contact"
            tech="Luxury Ride"
          />

          <ProjectItems
            title="Funeral"
            backgroundImg={funeralImg}
            projectUrl="/#contact"
            tech="Luxury Ride"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
