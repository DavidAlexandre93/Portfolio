import React, { useEffect } from 'react';
import { About, Contact, Main, Projects, Skills } from '../components';
import { useI18n } from '../context/I18nContext';

export default function Home() {
  const { t } = useI18n();

  useEffect(() => {
    document.title = 'David Alexandre Fernandes | Software Developer | DevOps | Software Quality | Cloud Computing | Artificial Intelligence (AI) | Blockchain(NFT/Metaverse)';

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }
    description.setAttribute('content', t('meta.homeDescription'));
  }, [t]);

  return (
    <div>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
