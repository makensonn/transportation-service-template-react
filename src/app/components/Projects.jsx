'use client'

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';

import artImg from '../assets/projects/2.png'; //Art
import gymImg from '../assets/projects/3.png'; //Gym
import cofImg from '../assets/projects/1.png'; //Cof

//Source
const artSource ='https://github.com/makensonn/art'; //Art
const gymSource ='https://github.com/makensonn/gym'; //Gym
const cofSource ='https://github.com/makensonn/cof'; //Cof

import ProjectItems from './ProjectItems';

const titleStyle = 'text-4xl font-bold inline border-b-4 border-red-600'

const gridOld = 'grid md:grid-cols-2 gap-8'

const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className = {titleStyle}><br></br><br></br>Services</p>
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
            title='Event'
            backgroundImg={artImg}
            projectUrl='/#contact'
            sourceUrl={artSource}
            tech='Luxury Ride'
          /> 

          <ProjectItems
            title='Funeral'
            backgroundImg={gymImg}
            projectUrl='/#contact'
            sourceUrl={gymSource}
            tech='Luxury Ride'
          />

        </div>
      </div>
    </div>
  );
};

export default Projects;
