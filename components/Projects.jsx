import React, { useEffect, useRef } from 'react';
import { PROJECTS } from '../data/siteData';
import ProjectItem from './ProjectItem';

const Projects = () => {
  const projectsRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !projectsRef.current || !window.gsap) return;
    const { gsap, ScrollTrigger } = window;
    if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo(
        '.project-card',
        { opacity: 0, y: 45 },
        {
          opacity: 1,
          y: 0,
          stagger: 0.15,
          duration: 0.7,
          ease: 'power3.out',
          scrollTrigger: { trigger: projectsRef.current, start: 'top 74%' },
        }
      );
    }, projectsRef);

    return () => ctx.revert();
  }, []);

  return (
    <div id='projects' ref={projectsRef} className='w-full'>
      <div className='max-w-[1240px] mx-auto px-2 py-16'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Projects</p>
        <h2 className='py-4'>What I&apos;ve Built</h2>
        <div className='grid md:grid-cols-2 gap-8'>
          {PROJECTS.map((project) => (
            <ProjectItem key={project.title} {...project} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
