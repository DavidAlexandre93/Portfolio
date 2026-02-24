import Head from 'next/head';
import { About, Contact, Main, Projects, Skills } from '../components';

export default function Home() {
  return (
    <div>
      <Head>
        <title>David Alexandre Fernandes | Software Developer | DevOps | Software Quality | Cloud Computing | Artificial Intelligence (AI) | Blockchain(NFT/Metaverse)</title>
        <meta name='description' content='Portfólio de David Alexandre Fernandes, com projetos e experiências em desenvolvimento full cycle, DevOps, SRE, cloud, IA e blockchain.' />
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
