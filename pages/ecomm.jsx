import Image from 'next/image';
import React from 'react';
import ecommImg from '../public/assets/projects/ecomm.png'; //Tic Tac Toe
import Countdown from '../components/Countdown';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';

const EcommercePage = () => {
  return (
    <div className='w-full h-screen'>

      {/*Header*/}
      <div className='w-full h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute' 
          layout='fill'
          objectFit='cover'
          src={ecommImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Ecommerce Website</h2>
          <h3>JavaScript / TailwindCSS </h3>
        </div>
      </div>
      {/*Header*/}
    
      {/* Project Overview */}
      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>
            Ecommerce Website
          </h2>
          <br></br>
          <Countdown /> 

          <br></br><br></br>
          <h2>Overview</h2>
          <p>
            This Ecommerce Website is being developed with JavaScript and TailwindCSS. It's coming soon, please visit other projects. 
          </p>
          
          <a
            href='https://makenson.com/ecomm'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Source Code</button>
          </a>
        </div>
        {/*Project Overview*/}

        {/*Technologies*/}
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1'>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> JavaScript
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> TailwindCSS
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* Technologies */}
      
      {/* Back Button */}
      <div className='flex justify-center py-12'>
          <Link href='/#projects'>
            <a>
              <div className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
                <HiOutlineChevronDoubleLeft
                  className='text-[#0a192f]'
                  size={30}
                />
              </div>
            </a>
          </Link>
        </div>
      {/* Back Button */}

    </div>
  );
};

export default EcommercePage;