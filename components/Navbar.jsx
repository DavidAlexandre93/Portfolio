import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { NAV_LINKS, SOCIAL_LINKS } from '../data/siteData';
import NavLogo from '../public/assets/navLogo.svg';
import SocialIconLink from './shared/SocialIconLink';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);

  useEffect(() => {
    const handleShadow = () => setShadow(window.scrollY >= 90);
    window.addEventListener('scroll', handleShadow);
    return () => window.removeEventListener('scroll', handleShadow);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.Motion?.animate) return;
    window.Motion.animate('.desktop-nav li', { opacity: [0, 1], transform: ['translateY(-10px)', 'translateY(0px)'] }, { delay: window.Motion.stagger(0.05), duration: 0.35, easing: 'ease-out' });
  }, []);

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]/90 backdrop-blur-md ease-in-out duration-300' : 'fixed w-full h-20 z-[100] bg-transparent'}>
      <div className='flex justify-between items-center w-full h-full px-2 2xl:px-16'>
        <Link href='/'><a><Image src={NavLogo} alt='Logo' width='125' height='50' className='cursor-pointer' /></a></Link>

        <div>
          <ul className='desktop-nav hidden md:flex text-[#1f2937]'>
            {NAV_LINKS.map((item) => (
              <li key={item.label} className='ml-10 text-sm uppercase hover:border-b'>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <div onClick={() => setNav(!nav)} className='md:hidden'><AiOutlineMenu size={25} /></div>
        </div>
      </div>

      <div className={nav ? 'md:hidden fixed left-0 top-0 w-full h-screen bg-black/70' : ''}>
        <div className={nav ? 'fixed left-0 top-0 w-[75%] sm:w-[60%] h-screen bg-[#ecf0f3] p-10 ease-in duration-500' : 'fixed left-[-100%] top-0 p-10 ease-in duration-500'}>
          <div className='flex w-full items-center justify-between'>
            <Link href='/'><a><Image src={NavLogo} width='87' height='35' alt='Logo' /></a></Link>
            <div onClick={() => setNav(false)} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'><AiOutlineClose /></div>
          </div>
          <div className='border-b border-gray-300 my-4'><p className='w-[85%] py-4'>Let&#39;s build something legendary together</p></div>
          <ul className='uppercase'>
            {NAV_LINKS.map((item) => (
              <Link key={item.label} href={item.href}>
                <li onClick={() => setNav(false)} className='py-4 text-sm'>{item.label}</li>
              </Link>
            ))}
          </ul>
          <div className='pt-12'>
            <p className='uppercase tracking-widest text-[#5651e5]'>Let&#39;s Connect</p>
            <div className='flex items-center justify-between my-4 w-full sm:w-[80%]'>
              {SOCIAL_LINKS.map((link) => (
                <SocialIconLink key={link.label} {...link} onClick={() => setNav(false)} compact />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
