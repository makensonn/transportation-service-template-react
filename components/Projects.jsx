import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

import artImg from '../public/assets/projects/2.png'; //Art
import gymImg from '../public/assets/projects/3.png'; //Gym
import cofImg from '../public/assets/projects/1.png'; //Cof

//Source
const artSource ='https://github.com/makensonn/art'; //Art
const gymSource ='https://github.com/makensonn/gym'; //Gym
const cofSource ='https://github.com/makensonn/cof'; //Cof

import ProjectItem from './ProjectItem';
import ProjectItems from './ProjectItems';

const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const gridOld = 'grid md:grid-cols-2 gap-8'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className = {titleStyle}><br></br><br></br>Projects</p>
        <p className='py-6'></p>

        <div className='grid md:grid-cols-3 gap-8'>

          <ProjectItems
            title='Airport'
            backgroundImg={cofImg}
            projectUrl='/#contact'
            sourceUrl={cofSource}
            tech='Luxury Ride'
          />

          <ProjectItems
            title='Events'
            backgroundImg={artImg}
            projectUrl='/#contact'
            sourceUrl={artSource}
            tech='Luxury Ride'
          /> 

          <ProjectItems
            title='Funerals'
            backgroundImg={gymImg}
            projectUrl='/#contact'
            sourceUrl={gymSource}
            tech='Luxury Ride'
          />

        </div>
      {/*  <br></br><br></br>

        <a href='https://github.com/makensonn' target="_blank" className="flex items-center h-full underline">
          View More
  </a> */}

      </div>
    </div>
  );
};

export default Projects;
