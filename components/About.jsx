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

    return () => ctx.revert();
  }, []);

  return (
    <div id='about' ref={aboutRef} className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='about-reveal uppercase text-xl tracking-widest text-[#5651e5]'>About</p>
          <h2 className='about-reveal py-4'>Who I Am</h2>
          <p className='about-reveal py-2 text-gray-600'>/ / I am not your average developer</p>
          <p className='about-reveal py-2 text-gray-600'>
            28 anos, natural do estado do Mato Grosso e residindo na região metropolitana de São Paulo, com formação técnica em eletrônica
            e desenvolvimento de sistemas, atualmente cursando Ciência da Computação.
          </p>
          <p className='about-reveal py-2 text-gray-600'>
            Perfil focado em entrega realista de produto digital: qualidade, observabilidade, performance e experiência de usuário alinhadas
            ao negócio.
          </p>
          <Link href='https://github.com/DavidAlexandre93?tab=repositories'>
            <p className='about-reveal py-2 text-gray-600 underline cursor-pointer'>Check out some of my latest projects.</p>
          </Link>
        </div>
        <div className='about-reveal w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='Perfil de David Alexandre Fernandes' />
        </div>
      </div>
    </div>
  );
};

export default About;
