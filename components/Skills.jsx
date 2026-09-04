
import React from 'react';
import { useI18n } from '../context/I18nContext';
import { SKILLS } from '../data/siteData';

const Skills = () => {
  const { t } = useI18n();

  return (
    <div id='skills' className='w-full p-4 sm:p-6 md:p-8'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-lg sm:text-xl tracking-widest uppercase text-[#5651e5]'>{t('nav.skills')}</p>
        <h2 className='py-4'>{t('skills.subtitle')}</h2>
        <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8'>
          {SKILLS.map(({ title, icon }) => (
            <div key={title} className='skill-card p-4 sm:p-6 shadow-xl rounded-xl transition-transform'>
              <div className='grid grid-cols-[auto,1fr] gap-3 sm:gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <img src={icon} width='48' height='48' alt={title} />
                </div>
                <div className='flex flex-col items-start justify-center'>
                  <h3 className='text-base sm:text-lg'>{title}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
