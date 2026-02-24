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
      <div className='hero-orb-a absolute -top-20 -left-16 w-72 h-72 bg-violet-300/40 rounded-full blur-3xl' />
      <div className='hero-orb-b absolute top-40 -right-20 w-80 h-80 bg-sky-300/40 rounded-full blur-3xl' />
      <div className='hero-orb-c absolute bottom-10 left-[25%] w-56 h-56 bg-indigo-300/30 rounded-full blur-3xl' />

      <div className='max-w-[1240px] w-full min-h-screen mx-auto p-2 flex justify-center items-center'>
        <div className='backdrop-blur-[2px]'>
          <p className='uppercase text-sm tracking-widest text-gray-600'>LET&#39;S BUILD SOMETHING TOGETHER</p>
          <h1 className='py-4 text-gray-700 hero-title'>
            Hi, I&#39;m <span className='text-[#5651e5]'> David Alexandre Fernandes</span>
          </h1>
          <h1 className='py-2 text-gray-700 hero-subtitle'>Software Developer | DevOps | SRE | Cloud | AI | Blockchain</h1>
          <p className='hero-text py-4 text-gray-600 sm:max-w-[70%] m-auto'>
            Carreira iniciada na engenharia eletrônica e evoluída para tecnologia com atuação full cycle em desenvolvimento, automação,
            DevOps e SRE, apoiando projetos de blockchain, metaverso e inteligência artificial.
          </p>
          <div className='flex items-center justify-between max-w-[330px] m-auto py-4'>
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
