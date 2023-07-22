import Link from 'next/link';
import Image from 'next/image';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn, FaYoutube} from 'react-icons/fa';
import { HiOutlineChevronDoubleDown } from 'react-icons/hi';
import ProfileImg from '../public/assets/main.png';
const phone='561-541-9740'

const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#0a192f] border-zinc-500'

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
          <Image src={ProfileImg} className='rounded-xl' alt='/' />
           <p>{phone}</p>
          <div className='flex items-center justify-center max-w-[330px] m-auto py-4'>
            <a
              href={`tel:${phone}`}
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                Call Now
              </div>
            </a>
         {/* <p className='uppercase text-sm tracking-widest text-gray-600'><br></br><br></br></p>
          <h1 className='py-4 text-gray-700'>
            <span className='text-[#0a192f]'> Makenson Noel</span>
          </h1>
         <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            Front-End Software Engineer
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href='https://www.linkedin.com/in/makensonnoel/'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/makensonn'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <a href='/about'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
  </a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;