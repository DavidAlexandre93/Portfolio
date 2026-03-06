import Head from 'next/head';
import dynamic from 'next/dynamic';
import Script from 'next/script';
import { Main } from '../components';
import { useI18n } from '../context/I18nContext';

const About = dynamic(() => import('../components/About'));
const Skills = dynamic(() => import('../components/Skills'));
const Projects = dynamic(() => import('../components/Projects'));
const Contact = dynamic(() => import('../components/Contact'));

export default function Home() {
  const { t } = useI18n();

  return (
    <div>
      <Head>
        <title>David Alexandre Fernandes | Software Developer | DevOps | Software Quality | Cloud Computing | Artificial Intelligence (AI) | Blockchain(NFT/Metaverse)</title>
        <meta name='description' content={t('meta.homeDescription')} />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/fav.png' />
      </Head>
      <Script src='https://unpkg.com/gsap@3.12.5/dist/gsap.min.js' strategy='afterInteractive' />
      <Script src='https://unpkg.com/gsap@3.12.5/dist/ScrollTrigger.min.js' strategy='afterInteractive' />
      <Script src='https://unpkg.com/@motionone/dom@10.18.0/dist/motion-one.umd.js' strategy='afterInteractive' />
      <Main />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  );
}
