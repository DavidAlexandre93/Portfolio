import React from 'react';

import { useI18n } from '../context/I18nContext';

const About = () => {
  const { t } = useI18n();

  return (
    <div id='about' className='w-full p-4 sm:p-6 md:p-8 flex items-center py-16 md:py-24'>
      <div className='max-w-[1240px] w-full m-auto grid md:grid-cols-3 gap-10 md:gap-8 items-center'>
        <div className='col-span-2'>
          <p className='about-reveal uppercase text-lg sm:text-xl tracking-widest text-[#5651e5]'>{t('about.title')}</p>
          <h2 className='about-reveal py-3 sm:py-4'>{t('about.subtitle')}</h2>
          <p className='about-reveal py-2 text-gray-600'>{t('about.highlight')}</p>
          <p className='about-reveal py-2 text-gray-600'>{t('about.p1')}</p>
          <p className='about-reveal py-2 text-gray-600'>{t('about.p2')}</p>
          <a href='https://github.com/DavidAlexandre93?tab=repositories' target='_blank' rel='noreferrer' className='about-reveal py-2 text-gray-600 underline cursor-pointer'>
            {t('about.github')}
          </a>
        </div>
        <div className='about-reveal about-image-card w-full max-w-[420px] md:max-w-full h-auto m-auto flex items-center justify-center hover:scale-105 ease-in duration-300'>
          <img src='/assets/perfil.png' className='w-full h-auto object-contain' alt='Foto de perfil David Alexandre Fernandes' />
        </div>
      </div>
    </div>
  );
};

export default About;
