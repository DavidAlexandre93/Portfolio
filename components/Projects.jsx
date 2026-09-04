import React from 'react';
import { useI18n } from '../context/I18nContext';
import { PROJECTS } from '../data/siteData';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const { t } = useI18n();

  return (
    <div id='projects' className='w-full'>
      <div className='max-w-[1240px] mx-auto px-4 sm:px-6 md:px-8 py-16'>
        <p className='text-lg sm:text-xl tracking-widest uppercase text-[#5651e5]'>{t('projects.title')}</p>
        <h2 className='py-4'>{t('projects.subtitle')}</h2>
        <div className='grid sm:grid-cols-2 gap-6 sm:gap-8'>
          {PROJECTS.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
