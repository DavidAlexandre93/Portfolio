import React, { useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/perfil.png';

const About = () => {
  const aboutRef = useRef(null);

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
    <div id='about' ref={aboutRef} className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='about-reveal uppercase text-xl tracking-widest text-[#5651e5]'>Sobre</p>
          <h2 className='about-reveal py-4'>Quem Sou</h2>
          <p className='about-reveal py-2 text-gray-600'>/ / Desenvolvedor focado em entrega de valor real para o negócio.</p>
          <p className='about-reveal py-2 text-gray-600'>
            Natural de Mato Grosso e residente na região metropolitana de São Paulo, com formação técnica em eletrônica e desenvolvimento
            de sistemas. Atualmente cursando Ciência da Computação no UNASP.
          </p>
          <p className='about-reveal py-2 text-gray-600'>
            Experiência prática em desenvolvimento full stack/full cycle, automação de testes, DevOps e SRE, com foco em qualidade,
            observabilidade, performance e experiência do usuário.
          </p>
          <Link href='https://github.com/DavidAlexandre93?tab=repositories'>
            <p className='about-reveal py-2 text-gray-600 underline cursor-pointer'>Veja alguns dos meus projetos mais recentes no GitHub.</p>
          </Link>
        </div>
        <div className='about-reveal about-image-card w-full h-auto m-auto flex items-center justify-center hover:scale-105 ease-in duration-300'>
          <Image
            src={AboutImg}
            className='w-[760px] md:w-[980px] lg:w-[1200px] max-w-none h-auto object-contain'
            priority
            alt='Foto de perfil David Alexandre Fernandes'
          />
        </div>
      </div>
    </div>
  );
};

export default About;
