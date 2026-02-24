import Image from 'next/image';
import React, { useEffect, useRef } from 'react';
import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.svg';
import ReactImg from '../public/assets/skills/reactjs.svg';
import Tailwind from '../public/assets/skills/tailwind.svg';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.svg';
import AWS from '../public/assets/skills/aws.svg';
import GCP from '../public/assets/skills/gcp.svg';
import Docker from '../public/assets/skills/docker.svg';
import Express from '../public/assets/skills/express.svg';
import FastAPI from '../public/assets/skills/fastapi.svg';
import Go from '../public/assets/skills/go.svg';
import Kubernetes from '../public/assets/skills/kubernetes.svg';
import Typescript from '../public/assets/skills/typescript.svg';

const skills = [
  ['HTML', Html], ['CSS', Css], ['JavaScript', Javascript], ['React', ReactImg], ['Tailwind', Tailwind], ['Firebase', Firebase],
  ['Github', Github], ['NextJS', NextJS], ['AWS', AWS], ['GCP', GCP], ['Docker', Docker], ['Express', Express],
  ['FastAPI', FastAPI], ['Go', Go], ['Kubernetes', Kubernetes], ['TypeScript', Typescript],
];

const Skills = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !sectionRef.current || !window.gsap) return;
    const { gsap, ScrollTrigger } = window;
    if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      gsap.fromTo('.skill-card', { y: 35, opacity: 0 }, {
        y: 0, opacity: 1, stagger: 0.06, duration: 0.55, ease: 'power2.out',
        scrollTrigger: { trigger: sectionRef.current, start: 'top 72%' }
      });
    }, sectionRef);

    const cards = sectionRef.current.querySelectorAll('.skill-card');
    cards.forEach((card) => {
      card.addEventListener('mouseenter', () => {
        if (!window.Motion?.animate) return;
        window.Motion.animate(card, { transform: ['translateY(0px)', 'translateY(-6px) scale(1.02)'] }, { duration: 0.22, fill: 'forwards' });
      });
      card.addEventListener('mouseleave', () => {
        if (!window.Motion?.animate) return;
        window.Motion.animate(card, { transform: ['translateY(-6px) scale(1.02)', 'translateY(0px) scale(1)'] }, { duration: 0.22, fill: 'forwards' });
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div id='skills' ref={sectionRef} className='w-full lg:h-screen p-2'>
      <div className='max-w-[1240px] mx-auto flex flex-col justify-center h-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Skills</p>
        <h2 className='py-4'>What I Can Do</h2>
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-8'>
          {skills.map(([title, icon]) => (
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
