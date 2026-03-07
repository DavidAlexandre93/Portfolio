import { Link } from '../src/router';
import React, { useEffect, useMemo, useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { useI18n } from '../context/I18nContext';
import { NAV_LINKS, SOCIAL_LINKS } from '../data/siteData';
import SocialIconLink from './shared/SocialIconLink';

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [shadow, setShadow] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const { t } = useI18n();

  useEffect(() => {
    const handleScrollSignals = () => {
      const y = window.scrollY;
      const max = Math.max(document.documentElement.scrollHeight - window.innerHeight, 1);
      setShadow(y >= 90);
      setScrollProgress(Math.min((y / max) * 100, 100));
    };

    handleScrollSignals();
    window.addEventListener('scroll', handleScrollSignals, { passive: true });
    window.addEventListener('resize', handleScrollSignals);

    return () => {
      window.removeEventListener('scroll', handleScrollSignals);
      window.removeEventListener('resize', handleScrollSignals);
    };
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.gsap) return;
    window.gsap.fromTo('.desktop-nav li', { opacity: 0, y: -10 }, { opacity: 1, y: 0, stagger: 0.06, duration: 0.35, ease: 'power2.out' });
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.gsap) return;

    const tl = window.gsap.timeline({ defaults: { ease: 'power2.out' } });
    tl.to('.mobile-menu', { x: nav ? 0 : '-100%', duration: 0.35 });

    if (nav) {
      tl.fromTo('.mobile-nav-item', { opacity: 0, x: -12 }, { opacity: 1, x: 0, stagger: 0.05, duration: 0.25 }, '-=0.15');
    }
  }, [nav]);

  const navClassName = useMemo(
    () =>
      shadow
        ? 'fixed w-full h-20 shadow-xl z-[100] bg-[#ecf0f3]/90 backdrop-blur-md ease-in-out duration-300'
        : 'fixed w-full h-20 z-[100] bg-transparent',
    [shadow]
  );

  return (
    <header className={navClassName}>
      <div className='navbar-progress' style={{ transform: `scaleX(${scrollProgress / 100})` }} aria-hidden='true' />
      <div className='flex justify-between items-center w-full h-full px-4 sm:px-6 lg:px-12 2xl:px-16'>
        <Link to='/'>
          <img src='/assets/navLogo.svg' alt='Logo' width='125' height='50' className='cursor-pointer transition-transform duration-300 hover:scale-[1.03]' />
        </Link>

        <div>
          <ul className='desktop-nav hidden lg:flex text-[#1f2937]'>
            {NAV_LINKS.map((item) => (
              <li key={item.key} className='ml-8 text-xs xl:text-sm uppercase nav-link-item'>
                <Link to={item.href}>{t(item.key)}</Link>
              </li>
            ))}
          </ul>
          <button type='button' aria-label={t('menu.open')} onClick={() => setNav(!nav)} className='lg:hidden p-2 rounded-md transition-transform duration-300 hover:scale-105'>
            <AiOutlineMenu size={24} />
          </button>
        </div>
      </div>

      <div className={nav ? 'lg:hidden fixed inset-0 bg-black/70 backdrop-blur-[2px]' : 'pointer-events-none'}>
        <div className={nav ? 'mobile-menu fixed left-0 top-0 w-[84%] max-w-[340px] h-screen bg-[#ecf0f3] p-6 sm:p-8 ease-in duration-500 pointer-events-auto' : 'mobile-menu fixed left-[-100%] top-0 p-8 ease-in duration-500'}>
          <div className='flex w-full items-center justify-between'>
            <Link to='/'>
              <img src='/assets/navLogo.svg' width='87' height='35' alt='Logo' />
            </Link>
            <button type='button' aria-label={t('menu.close')} onClick={() => setNav(false)} className='rounded-full shadow-lg shadow-gray-400 p-3 cursor-pointer transition-transform duration-300 hover:rotate-90'>
              <AiOutlineClose />
            </button>
          </div>
          <div className='border-b border-gray-300 my-4'>
            <p className='w-full py-4 text-sm sm:text-base'>{t('menu.legendary')}</p>
          </div>
          <ul className='uppercase'>
            {NAV_LINKS.map((item) => (
              <li key={item.key} onClick={() => setNav(false)} className='mobile-nav-item py-3 text-sm'>
                <Link to={item.href}>{t(item.key)}</Link>
              </li>
            ))}
          </ul>
          <div className='pt-10'>
            <p className='uppercase tracking-widest text-[#5651e5] text-sm'>{t('common.connect')}</p>
            <div className='flex flex-wrap items-center gap-3 my-4'>
              {SOCIAL_LINKS.map((link) => (
                <SocialIconLink key={link.key} {...link} label={t(link.key)} onClick={() => setNav(false)} compact />
              ))}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
