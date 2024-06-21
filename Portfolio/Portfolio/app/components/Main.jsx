"use client"
import Link from 'next/link';
import React from 'react';
import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Main = () => {
  return (
    <div id='home' className='w-full h-screen text-center'>
      <div className='max-w-[1240px] w-full h-full mx-auto p-2 flex justify-center items-center'>
        <div>
        
          <h1 className='py-4 text-gray-700'>
            Hi, I&#39;m <span className='text-[#5651e5]'>{`Haseeb`}</span>
          </h1>
          <h1 className='py-2 text-gray-700'>{`A Full Stack Developer`}</h1>
          <p className='py-4 text-gray-600 sm:max-w-[70%] m-auto'>
                {`     I specialize in creating responsive front-end web applications that incorporates back-end technologies. 
          I'm driven by a strong curiosity and a desire to continually expand my knowledge within the field of web development`}
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
            <a
              href="https://www.linkedin.com/in/haseebchaudhury"
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href='https://github.com/Haseebzz'
              target='_blank'
              rel='noreferrer'
            >
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <FaGithub />
              </div>
            </a>
            <Link href='/#contact'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <AiOutlineMail />
              </div>
            </Link>
            <Link href='https://app.luminpdf.com/viewer/64e9717671e1c71aba6b83b0' target='_blank'>
              <div className='rounded-full shadow-lg shadow-gray-400 p-6 cursor-pointer hover:scale-110 ease-in duration-300'>
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
