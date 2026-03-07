import { Link } from '../src/router';
import React, { useEffect, useRef } from 'react';
import { useI18n } from '../context/I18nContext';

const ProjectItem = ({ title, backgroundImg, tech, projectUrl }) => {
  const cardRef = useRef(null);
  const { t } = useI18n();

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

  const handleMove = (event) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = event.clientX - rect.left;
    const y = event.clientY - rect.top;
    const rotateY = ((x / rect.width) - 0.5) * 12;
    const rotateX = (0.5 - y / rect.height) * 10;

    card.style.setProperty('--card-rotate-x', `${rotateX.toFixed(2)}deg`);
    card.style.setProperty('--card-rotate-y', `${rotateY.toFixed(2)}deg`);
    card.style.setProperty('--mouse-x', `${(x / rect.width) * 100}%`);
    card.style.setProperty('--mouse-y', `${(y / rect.height) * 100}%`);
  };

  const resetMove = () => {
    const card = cardRef.current;
    if (!card) return;
    card.style.setProperty('--card-rotate-x', '0deg');
    card.style.setProperty('--card-rotate-y', '0deg');
    card.style.setProperty('--mouse-x', '50%');
    card.style.setProperty('--mouse-y', '50%');
  };

  return (
    <div
      ref={cardRef}
      onMouseEnter={() => animateCard(true)}
      onMouseLeave={() => {
        animateCard(false);
        resetMove();
      }}
      onMouseMove={handleMove}
      className='project-card project-card--interactive relative flex items-center justify-center h-auto w-full shadow-xl shadow-gray-400 rounded-xl group hover:bg-gradient-to-r from-[#5651e5] to-[#709dff] transition-colors duration-300 overflow-hidden'
    >
      <img className='rounded-xl group-hover:opacity-10 transition-opacity duration-300' src={backgroundImg} alt={title} />
      <div className='absolute inset-0 flex flex-col items-center justify-center px-4 text-center bg-[#5651e5]/80 opacity-100 md:opacity-0 md:group-hover:opacity-100 md:group-focus-within:opacity-100 transition-opacity duration-300'>
        <h3 className='text-xl sm:text-2xl text-white tracking-wider'>{title}</h3>
        <p className='pb-4 pt-2 text-white text-sm sm:text-base'>{tech}</p>
        <Link to={projectUrl}>
          <p className='text-center py-2 sm:py-3 rounded-lg bg-white text-gray-700 font-bold text-sm sm:text-base cursor-pointer px-4 transition-transform duration-300 hover:scale-105'>
            {t('common.moreInfo')}
          </p>
        </Link>
      </div>
    </div>
  );
};

export default ProjectItem;
