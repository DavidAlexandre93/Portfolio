
import { Link } from '../src/router';
import React from 'react';
import { RiRadioButtonFill } from 'react-icons/ri';

const ProjectDetailPage = ({ heroAlt, heroImage, title, stack, overview, links, technologies, backLink }) => {
  return (
    <div className='w-full'>
      <div className='w-full h-[42vh] sm:h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-full bg-black/70 z-10' />
        <img className='absolute z-1 w-full h-full object-cover' src={heroImage} alt={heroAlt} />
        <div className='absolute top-[72%] max-w-[1240px] w-full left-1/2 -translate-x-1/2 -translate-y-1/2 text-white z-10 px-4 sm:px-6'>
          <h2 className='py-2 text-2xl sm:text-4xl'>{title}</h2>
          <h3 className='text-sm sm:text-lg'>{stack}</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto px-4 sm:px-6 py-8 grid md:grid-cols-5 gap-8'>
        <div className='md:col-span-4'>
          <p>Projeto</p>
          <h2>Visão geral</h2>
          <p>{overview}</p>
          <div className='flex flex-wrap gap-3 sm:gap-4'>
            {links.map((link) => (
              <a key={link.label} href={link.href} target='_blank' rel='noreferrer'>
                <button className='px-6 sm:px-8 py-2 mt-4'>{link.label}</button>
              </a>
            ))}
          </div>
        </div>

        <div className='md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4 h-fit'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Tecnologias</p>
            <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-1'>
              {technologies.map((tech) => (
                <p key={tech} className='text-gray-600 py-2 flex items-center'>
                  <RiRadioButtonFill className='pr-1' /> {tech}
                </p>
              ))}
            </div>
          </div>
        </div>

        <Link to={backLink}>
          <p className='underline cursor-pointer md:col-span-5'>Voltar</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
