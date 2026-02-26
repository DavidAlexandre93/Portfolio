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
    if (typeof window === 'undefined' || !window.gsap) return;
    window.gsap.fromTo('.desktop-nav li', { opacity: 0, y: -10 }, { opacity: 1, y: 0, stagger: 0.06, duration: 0.35, ease: 'power2.out' });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.gsap) return;
    window.gsap.to('.mobile-menu', { x: nav ? 0 : '-100%', duration: 0.35, ease: 'power2.out' });
  }, [nav]);

  return (
    <div className={shadow ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]/90 backdrop-blur-md ease-in-out duration-300' : 'fixed w-full h-20 z-[100] bg-transparent'}>
      <div className='flex justify-between items-center w-full h-full px-4 sm:px-6 lg:px-12 2xl:px-16'>
        <Link href='/'>
          <a>
            <Image src={NavLogo} alt='Logo' width='125' height='50' className='cursor-pointer' />
          </a>
        </Link>

        <div>
          <ul className='desktop-nav hidden lg:flex text-[#1f2937]'>
            {NAV_LINKS.map((item) => (
              <li key={item.label} className='ml-8 text-xs xl:text-sm uppercase hover:border-b'>
                <Link href={item.href}>{item.label}</Link>
              </li>
            ))}
          </ul>
          <button type='button' aria-label='Abrir menu' onClick={() => setNav(!nav)} className='lg:hidden p-2 rounded-md'>
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </div>

      <div className={nav ? 'lg:hidden fixed inset-0 bg-black/70' : 'pointer-events-none'}>
        <div className={nav ? 'mobile-menu fixed left-0 top-0 w-[84%] max-w-[340px] h-screen bg-[#ecf0f3] p-6 sm:p-8 ease-in duration-500 pointer-events-auto' : 'mobile-menu fixed left-[-100%] top-0 p-8 ease-in duration-500'}>
          <div className='flex w-full items-center justify-between'>
            <Link href='/'>
              <a>
                <Image src={NavLogo} width='87' height='35' alt='Logo' />
              </a>
            </Link>
            <button type='button' aria-label='Fechar menu' onClick={() => setNav(false)} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer'>
              <AiOutlineClose />
            </button>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-full py-4 text-sm sm:text-base'>Let&#39;s build something legendary together</p>
          </div>
          <ul className='uppercase'>
            {NAV_LINKS.map((item) => (
              <Link key={item.label} href={item.href}>
                <li onClick={() => setNav(false)} className='py-3 text-sm'>
                  {item.label}
                </li>
              </Link>
            ))}
          </ul>
          <div className='pt-10'>
            <p className='uppercase tracking-widest text-[#5651e5] text-sm'>Let&#39;s Connect</p>
            <div className='flex flex-wrap items-center gap-3 my-4'>
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
