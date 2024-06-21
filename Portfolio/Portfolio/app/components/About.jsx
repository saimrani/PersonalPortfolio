"use client"
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from "./../../public/assets/about.jpg"

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
         {`My name is Haseeb Chaudhury, and I am currently a computer science student at the City College of New York in my senior year. During my second year of college, I embarked on a journey into web development, and that's when I discovered my true passion. I thoroughly enjoyed crafting websites and exploring various technologies to develop software solutions`} 
          </p>
          <p className='py-2 text-gray-600'>
            {`  I am passionate about learning new technologies and believe in the importance of understanding multiple approaches to problem-solving. While I am most proficient in building front-end applications using HTML, CSS, JavaScript, and React, I approach new tech stacks with a quick learning curve, allowing me to adapt to the demands of diverse projects. I believe that being a great developer is not using one specific language, but choosing the best tool for the job.
          When I am not coding, I find enjoyment in playing video games, engaging in chess matches, and immersing myself with mangas.`}
        
          </p>
          <Link href='/#projects'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
