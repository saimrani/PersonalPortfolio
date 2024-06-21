"use client"

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from './../../public/assets/projects/property.jpg';
import cryptoImg from './../../public/assets/projects/crypto.jpg'
import netflixImg from './../../public/assets/projects/netflix.jpg'
import twitchImg from './../../public/assets/projects/twitch.jpg'
import ProjectItem from './ProjectItem';
import Booking from './../../public/assets/projects/Booking.png'
import Ebay from './../../public/assets/projects/Ebay.png'
import Recipes from './../../public/assets/projects/Recipes.png'
import Pino from './../../public/assets/projects/Pino.png'
import FoodShare from './../../public/assets/projects/FoodShare.png'
const Projects = () => {
  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>
          Projects
        </p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
            <ProjectItem
            title='PinoPizza'
            backgroundImg={Pino}
            projectUrl='https://github.com/Haseebzz/PinoPizza'
            tech='Next.js, MongoDB, Stripe, Amazon S3, Google Cloud'
            live="https://pino-pizza.vercel.app/"
            target='_blank' 
          />
          <ProjectItem
            title='FoodShare'
            backgroundImg={FoodShare}
            projectUrl='https://github.com/Haseebzz/FoodShare'
            live="https://web103-finalproject-t6zq.vercel.app/"
            tech='Reactjs tailwind nodejs express Postgresql'

          />
          <ProjectItem
            title='Ecommerce Store'
            backgroundImg={Ebay}
            projectUrl='https://github.com/Haseebzz/Ecommerce'
            tech='Nextjs Tailwind PostgreSQL prisma supabase stripe'
            live="https://github.com/Haseebzz/Ecommerce"
            target='_blank' 
               />
          <ProjectItem
            title='Netflix App'
            backgroundImg={netflixImg}
            projectUrl='https://github.com/Haseebzz/Netflix-Clone'
            tech='Reactjs tailwind firebase'
            live="https://netflix-react-app-e1b74.web.app/"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
