import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import propertyImg from '../public/assets/projects/logoprojects.svg';
import cryptoImg from '../public/assets/projects/logoprojects.svg'
import netflixImg from '../public/assets/projects/logoprojects.svg'
import twitchImg from '../public/assets/projects/logoprojects.svg'
import ProjectItem from './ProjectItem';

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
            title='Projeto integrador Bootcamp - Mercado Livre'
            backgroundImg={propertyImg}
            projectUrl='/property'
            tech='SpringBoot - Java'
          />
          <ProjectItem
            title='Hortelan'
            backgroundImg={cryptoImg}
            projectUrl='/crypto'
            tech='PHP, MySQL, Javascript, Bootstrap4 e Arduino(IOT)'

          />
          <ProjectItem
            title='API'
            backgroundImg={netflixImg}
            projectUrl='/netflix'
            tech='FastAPI - Python'

          />
          <ProjectItem
            title='Website'
            backgroundImg={twitchImg}
            projectUrl='/twitch'
            tech='Next JS'

          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
