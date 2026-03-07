
import { Link } from '../src/router';
import React, { useEffect, useRef, useState } from 'react';
import { HiOutlineChevronDoubleUp } from 'react-icons/hi';
import { useI18n } from '../context/I18nContext';
import { SOCIAL_LINKS } from '../data/siteData';
import SocialIconLink from './shared/SocialIconLink';

const Contact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [feedback, setFeedback] = useState('');
  const contactRef = useRef(null);
  const { t } = useI18n();

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

  useEffect(() => {
    if (!feedback || !window.gsap) return undefined;
    const toast = contactRef.current?.querySelector('.contact-feedback');
    if (!toast) return undefined;
    const tl = window.gsap.timeline();
    tl.fromTo(toast, { opacity: 0, y: 12 }, { opacity: 1, y: 0, duration: 0.25 })
      .to(toast, { opacity: 1, duration: 1.5 })
      .to(toast, {
        opacity: 0,
        y: -8,
        duration: 0.25,
        onComplete: () => setFeedback(''),
      });

    return () => tl.kill();
  }, [feedback]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (sending) return;

    setSending(true);

    window.setTimeout(() => {
      setName('');
      setPhone('');
      setEmail('');
      setSubject('');
      setMessage('');
      setSending(false);
      setFeedback('Mensagem enviada com sucesso. Obrigado pelo contato!');
    }, 1050);
  };

  return (
    <div id='contact' ref={contactRef} className='w-full'>
      <div className='max-w-[1240px] m-auto px-4 sm:px-6 md:px-8 py-16 w-full'>
        <p className='text-lg sm:text-xl tracking-widest uppercase text-[#5651e5]'>{t('contact.title')}</p>
        <h2 className='py-4'>{t('contact.subtitle')}</h2>
        <div className='grid lg:grid-cols-5 gap-6 sm:gap-8'>
          <div className='contact-panel lg:col-span-2 w-full h-full shadow-xl shadow-gray-400 rounded-xl p-4 sm:p-6'>
            <div className='h-full'>
              <img className='rounded-xl' src='/assets/navLogo.svg' alt='Contact logo' />
              <h2 className='py-2 text-2xl sm:text-3xl'>David Alexandre Fernandes</h2>
              <p>Software Developer | DevOps | SRE</p>
              <p className='py-4'>{t('contact.available')}</p>
              <p className='uppercase pt-8'>{t('contact.connectMe')}</p>
              <div className='flex flex-wrap items-center gap-3 py-4'>
                {SOCIAL_LINKS.map((link) => (
                  <SocialIconLink key={link.key} {...link} label={t(link.key)} />
                ))}
              </div>
            </div>
          </div>

          <div className='contact-form lg:col-span-3 w-full h-auto shadow-xl shadow-gray-400 rounded-xl lg:p-4'>
            <div className='p-4 sm:p-6'>
              <form onSubmit={handleSubmit}>
                <div className='grid md:grid-cols-2 gap-4 w-full py-2'>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>{t('contact.name')}</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                  <div className='flex flex-col'>
                    <label className='uppercase text-sm py-2'>{t('contact.phone')}</label>
                    <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' value={phone} onChange={(e) => setPhone(e.target.value)} />
                  </div>
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>{t('contact.email')}</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type='email' value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>{t('contact.subject')}</label>
                  <input className='border-2 rounded-lg p-3 flex border-gray-300' type='text' value={subject} onChange={(e) => setSubject(e.target.value)} />
                </div>
                <div className='flex flex-col py-2'>
                  <label className='uppercase text-sm py-2'>{t('contact.message')}</label>
                  <textarea className='border-2 rounded-lg p-3 border-gray-300 min-h-[170px]' rows='8' value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button type='submit' disabled={sending} className={`w-full p-4 text-gray-100 mt-4 flex items-center justify-center gap-2 ${sending ? 'opacity-80 cursor-not-allowed' : ''}`}>
                  {sending ? (
                    <>
                      <span className='loader-dot' />
                      <span>Enviando...</span>
                    </>
                  ) : (
                    t('contact.send')
                  )}
                </button>
              </form>
              {feedback && <p className='contact-feedback mt-4 rounded-lg bg-green-100 text-green-700 px-3 py-2 text-sm'>{feedback}</p>}
            </div>
          </div>
        </div>
        <div className='flex justify-center py-12'>
          <Link to='/' className='rounded-full shadow-lg shadow-gray-400 p-4 cursor-pointer hover:scale-110 ease-in duration-300'>
            <HiOutlineChevronDoubleUp className='text-[#5651e5]' size={30} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Contact;
