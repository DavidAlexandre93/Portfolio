import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useI18n } from '../context/I18nContext';
import AboutImg from '../public/assets/perfil.png';

const About = () => {
  const aboutRef = useRef(null);
  const { t } = useI18n();

  useEffect(() => {
    if (typeof window === 'undefined' || !aboutRef.current || !window.gsap) return;
    const { gsap, ScrollTrigger } = window;
    if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.about-reveal',
        { y: 40, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.15,
          duration: 0.9,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: aboutRef.current,
            start: 'top 75%',
          },
        }
      );
    }, aboutRef);

    const imageCard = aboutRef.current.querySelector('.about-image-card');
    if (imageCard && window.Motion?.hover) {
      const stop = window.Motion.hover(imageCard, () => {
        window.Motion.animate(imageCard, { transform: ['scale(1) rotate(0deg)', 'scale(1.04) rotate(-1deg)'] }, { duration: 0.3, fill: 'forwards' });
        return () => window.Motion.animate(imageCard, { transform: ['scale(1.04) rotate(-1deg)', 'scale(1) rotate(0deg)'] }, { duration: 0.3, fill: 'forwards' });
      });
      return () => {
        stop();
        ctx.revert();
      };
    }

    return () => ctx.revert();
  }, []);

  return (
    <div id='about' ref={aboutRef} className='w-full p-4 sm:p-6 md:p-8 flex items-center py-16 md:py-24'>
      <div className='max-w-[1240px] w-full m-auto grid md:grid-cols-3 gap-10 md:gap-8 items-center'>
        <div className='col-span-2'>
          <p className='about-reveal uppercase text-lg sm:text-xl tracking-widest text-[#5651e5]'>{t('about.title')}</p>
          <h2 className='about-reveal py-3 sm:py-4'>{t('about.subtitle')}</h2>
          <p className='about-reveal py-2 text-gray-600'>{t('about.highlight')}</p>
          <p className='about-reveal py-2 text-gray-600'>{t('about.p1')}</p>
          <p className='about-reveal py-2 text-gray-600'>{t('about.p2')}</p>
          <Link href='https://github.com/DavidAlexandre93?tab=repositories'>
            <p className='about-reveal py-2 text-gray-600 underline cursor-pointer'>{t('about.github')}</p>
          </Link>
        </div>
        <div className='about-reveal about-image-card w-full max-w-[420px] md:max-w-full h-auto m-auto flex items-center justify-center hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='w-full h-auto object-contain' priority alt='Foto de perfil David Alexandre Fernandes' />
        </div>
      </div>
    </div>
  );
};

export default About;
