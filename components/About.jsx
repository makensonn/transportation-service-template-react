import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import ProfileImg from '../public/assets/about.png';
import { HiOutlineChevronDoubleLeft } from 'react-icons/hi';


const titleStyle = 'text-4xl font-bold inline border-b-4 text-[#000000] border-[#000000]'

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className={titleStyle}><br></br><br></br>About</p>
          <p className='py-2'></p>
          <p className='py-2 text-gray-600'>
            Welcome to Guitto Transportation, where luxury car services meet elegance and distinction. 
            We specialize in providing unparalleled transportation experiences for airport transfers, 
            events, and funeral services. 
          <br></br><br></br>
            Our exclusive fleet of meticulously maintained luxury vehicles 
            ensures that every journey is a testament to opulence and sophistication. Whether you&#39;re a 
            discerning traveler seeking a seamless airport transfer, a couple celebrating a milestone event, 
            or a family requiring compassionate support during a funeral, our professional chauffeurs will 
            cater to your every need with utmost care and discretion.
          <br></br><br></br>
            At Guitto Transportation, we take glory in 
            delivering exceptional service, ensuring that each moment is cherished, and every detail is 
            meticulously attended to, leaving you with unforgettable memories of the finest transportation experience.
          </p>
          <br></br>

        </div>
        <div className='w-auto h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={ProfileImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>

    
  );
};

export default About;