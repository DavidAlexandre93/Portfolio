import React from 'react';
import { Link } from '../src/router';
import { SOCIAL_LINKS } from '../data/siteData';
import { useI18n } from '../context/I18nContext';
import SocialIconLink from './shared/SocialIconLink';

const Main = () => {
  const { t } = useI18n();

  return (
    <section id='home' className='hero-shell'>
      <div className='hero-grid' />
      <div className='hero-content'>
        <div className='hero-copy'>
          <p className='uppercase text-xs sm:text-sm tracking-[0.22em] text-gray-600'>{t('hero.tagline')}</p>
          <h1 className='py-4 text-gray-700 hero-title text-3xl sm:text-5xl'>
            {t('hero.greeting')} <span className='text-[#5651e5]'> David Alexandre Fernandes</span>
          </h1>
          <h1 className='py-2 text-gray-700 hero-subtitle text-xl sm:text-3xl md:text-4xl'>Software Developer | DevOps | SRE | Cloud | AI | Blockchain</h1>
          <p className='hero-text py-4 text-gray-600 max-w-3xl mx-auto text-sm sm:text-base md:text-lg'>{t('hero.summary')}</p>
          <div className='hero-actions'>
            <Link to='#projects' className='hero-action-chip'>
              {t('projects.title')}
            </Link>
            <Link to='#contact' className='hero-action-chip hero-action-chip--ghost'>
              {t('contact.title')}
            </Link>
          </div>
          <div className='flex flex-wrap gap-4 items-center justify-center max-w-[420px] m-auto py-4'>
            {SOCIAL_LINKS.map((link) => (
              <div key={link.key} className='social-card'>
                <SocialIconLink {...link} label={t(link.key)} />
              </div>
            ))}
          </div>
        </div>
      </div>
      <aside className='hero-signal' aria-label='Resumo profissional'><span>01</span><strong>Full cycle</strong><span>02</span><strong>Cloud & AI</strong><span>03</span><strong>Quality first</strong></aside>
    </section>
  );
};

export default Main;
