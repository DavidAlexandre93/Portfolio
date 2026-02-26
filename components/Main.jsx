import React, { useEffect, useRef } from 'react';
import { SOCIAL_LINKS } from '../data/siteData';
import SocialIconLink from './shared/SocialIconLink';

const Main = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !heroRef.current || !window.gsap) return;

    const hero = heroRef.current;
    const cards = hero.querySelectorAll('.social-card');
    const title = hero.querySelector('.hero-title');
    const subtitle = hero.querySelector('.hero-subtitle');
    const text = hero.querySelector('.hero-text');

    const tl = window.gsap.timeline({ defaults: { ease: 'power3.out' } });
    tl.fromTo(title, { y: 30, opacity: 0 }, { y: 0, opacity: 1, duration: 0.9 })
      .fromTo(subtitle, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.6')
      .fromTo(text, { y: 24, opacity: 0 }, { y: 0, opacity: 1, duration: 0.8 }, '-=0.5')
      .fromTo(cards, { y: 18, opacity: 0, scale: 0.92 }, { y: 0, opacity: 1, scale: 1, duration: 0.45, stagger: 0.12 }, '-=0.4');

    window.gsap.to('.hero-orb-a', { x: 35, y: -16, scale: 1.07, duration: 5, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    window.gsap.to('.hero-orb-b', { x: -28, y: 22, scale: 1.08, duration: 6, repeat: -1, yoyo: true, ease: 'sine.inOut' });
    window.gsap.to('.hero-orb-c', { x: 18, y: -22, scale: 1.1, duration: 7, repeat: -1, yoyo: true, ease: 'sine.inOut' });
  }, []);

  return (
    <div id='home' ref={heroRef} className='w-full min-h-screen text-center relative overflow-hidden'>
      <div className='hero-orb-a absolute -top-28 -left-24 w-56 h-56 sm:w-72 sm:h-72 bg-violet-300/40 rounded-full blur-3xl' />
      <div className='hero-orb-b absolute top-36 -right-24 w-64 h-64 sm:w-80 sm:h-80 bg-sky-300/40 rounded-full blur-3xl' />
      <div className='hero-orb-c absolute bottom-8 left-[10%] sm:left-[25%] w-40 h-40 sm:w-56 sm:h-56 bg-indigo-300/30 rounded-full blur-3xl' />

      <div className='max-w-[1240px] w-full min-h-screen mx-auto px-4 sm:px-6 md:px-10 flex justify-center items-center pt-20 sm:pt-24'>
        <div className='backdrop-blur-[2px]'>
          <p className='uppercase text-xs sm:text-sm tracking-[0.22em] text-gray-600'>DESENVOLVENDO SOLUÇÕES DIGITAIS COM FOCO EM RESULTADO</p>
          <h1 className='py-4 text-gray-700 hero-title text-3xl sm:text-5xl'>
            Olá, eu sou <span className='text-[#5651e5]'> David Alexandre Fernandes</span>
          </h1>
          <h1 className='py-2 text-gray-700 hero-subtitle text-xl sm:text-3xl md:text-4xl'>Software Developer | DevOps | SRE | Cloud | AI | Blockchain</h1>
          <p className='hero-text py-4 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg'>
            Profissional com trajetória iniciada na engenharia eletrônica e consolidada em tecnologia, atuando em desenvolvimento full
            cycle, automação, DevOps e SRE para produtos web, APIs e projetos inovadores.
          </p>
          <div className='flex flex-wrap gap-4 items-center justify-center max-w-[420px] m-auto py-4'>
            {SOCIAL_LINKS.map((link) => (
              <div key={link.label} className='social-card'>
                <SocialIconLink {...link} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
