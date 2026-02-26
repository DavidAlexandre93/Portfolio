import Head from 'next/head';
import { About, Contact, Main, Projects, Skills } from '../components';
import { useI18n } from '../context/I18nContext';

export default function Home() {
  const { t } = useI18n();

  return (
    <div>
      <Head>
        <title>David Alexandre Fernandes | Software Developer | DevOps | Software Quality | Cloud Computing | Artificial Intelligence (AI) | Blockchain(NFT/Metaverse)</title>
        <meta name='description' content={t('meta.homeDescription')} />
        <link rel='icon' href='/fav.png' />
      </Head>
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
