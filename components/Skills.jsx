import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import { SKILLS } from '../data/siteData';

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current || !window.gsap) return;
    const { gsap, ScrollTrigger } = window;
    if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.skill-card',
        { y: 35, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.06,
          duration: 0.55,
          ease: 'power2.out',
          scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' },
        }
      );
    }, sectionRef);

    const cards = sectionRef.current.querySelectorAll('.skill-card');
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        if (!window.Motion?.animate) return;
        window.Motion.animate(card, { transform: ['translateY(0px)', 'translateY(-8px) scale(1.03)'] }, { duration: 0.22, fill: 'forwards' });
      });
      card.addEventListener('mouseleave', () => {
        if (!window.Motion?.animate) return;
        window.Motion.animate(card, { transform: ['translateY(-8px) scale(1.03)', 'translateY(0px) scale(1)'] }, { duration: 0.22, fill: 'forwards' });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id='skills' ref={sectionRef} className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>Tecnologias e competências</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {SKILLS.map(({ title, icon }) => (
            <div key={title} className='skill-card p-6 shadow-xl rounded-xl transition-transform'>
              <div className='grid grid-cols-2 gap-4 justify-center items-center'>
                <div className='m-auto'>
                  <Image src={icon} width='64px' height='64px' alt={title} />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h3>{title}</h3>
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
