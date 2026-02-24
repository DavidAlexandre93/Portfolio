import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { SOCIAL_LINKS } from '../data/siteData';
import ContactImg from '../public/assets/navLogo.svg';
import SocialIconLink from './shared/SocialIconLink';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const contactRef = useRef(null);

  useEffect(() => {
    if (typeof window === 'undefined' || !contactRef.current || !window.gsap) return;
    const { gsap, ScrollTrigger } = window;
    if (ScrollTrigger) gsap.registerPlugin(ScrollTrigger);
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-panel', { x: -30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, scrollTrigger: { trigger: contactRef.current, start: 'top 72%' } });
      gsap.fromTo('.contact-form', { x: 30, opacity: 0 }, { x: 0, opacity: 1, duration: 0.7, scrollTrigger: { trigger: contactRef.current, start: 'top 72%' } });
    }, contactRef);

    const form = contactRef.current.querySelector('.contact-form');
    if (form && window.Motion?.hover) {
      const stop = window.Motion.hover(form, () => {
        window.Motion.animate(form, { transform: ['translateY(0px)', 'translateY(-4px)'] }, { duration: 0.2, fill: 'forwards' });
        return () => window.Motion.animate(form, { transform: ['translateY(-4px)', 'translateY(0px)'] }, { duration: 0.2, fill: 'forwards' });
      });
      return () => {
        stop();
        ctx.revert();
      };
    }

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setName('');
    setPhone('');
    setEmail('');
    setSubject('');
    setMessage('');
  };

  return (
    <div id='contact' ref={contactRef} className='w-full lg:h-screen'>
      <div className='max-w-[1240px] m-auto px-2 py-16 w-full'>
        <p className='text-xl tracking-widest uppercase text-[#5651e5]'>Contact</p>
        <h2 className='py-4'>Get In Touch</h2>
        <div className='grid lg:grid-cols-5 gap-8'>
          <div className='contact-panel col-span-3 lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4'>
            <div className='lg:p-4 h-full'>
              <Image className='rounded-xl' src={ContactImg} alt='Contact logo' />
              <h2 className='py-2'>David Alexandre Fernandes</h2>
              <p>Software Developer</p>
              <p className='py-4'>I am available for freelance. Contact me and let&apos;s talk.</p>
              <p className='uppercase pt-8'>Connect With Me</p>
              <div className='flex items-center justify-between py-4'>
                {SOCIAL_LINKS.map((link) => (
                  <SocialIconLink key={link.label} {...link} />
                ))}
              </div>
            </div>
          </div>

          <div className='contact-form col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4'>
              <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Name</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>Phone Number</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Email</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Subject</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>Message</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300' rows='10' value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button className='w-full p-4 text-gray-100 mt-4'>Send Message</button>
              </form>
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link href='/'>
            <a className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'><HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} /></a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
