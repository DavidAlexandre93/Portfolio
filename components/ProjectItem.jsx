import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef } from 'react';

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  const cardRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current || !window.gsap) return;
    window.gsap.fromTo(cardRef.current, { rotateX: 8, transformPerspective: 1000 }, { rotateX: 0, duration: 0.8, ease: 'power2.out' });
  }, []);

  const animateCard = (active) => {
    if (!cardRef.current || !window.Motion?.animate) return;
    window.Motion.animate(
      cardRef.current,
      { transform: [active ? 'perspective(1000px) rotateX(0deg) scale(1)' : 'perspective(1000px) rotateX(4deg) scale(1.02)'] },
      { duration: 0.25, fill: 'forwards', easing: 'ease-out' }
    );
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => animateCard(true)}
      onMouseLeave={() => animateCard(false)}
      className='project-card relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] transition-colors duration-300 overflow-hidden'
    >
      <Image className='rounded-xl group-hover:opacity-10 transition-opacity duration-300' src={backgroundImg} alt={title} />
      <div className='absolute inset-0 flex flex-col items-center justify-center px-4 text-center bg-[#5651e5]/80 opacity-0 group-hover:opacity-100 group-focus-within:opacity-100 transition-opacity duration-300'>
        <h3 className='text-xl sm:text-2xl text-white tracking-wider'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-sm sm:text-base'>{tech}</p>
        <Link href={projectUrl}>
          <p className='text-center py-2 sm:py-3 rounded-lg bg-white text-gray-700 font-bold text-sm sm:text-base cursor-pointer px-4'>More Info</p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
