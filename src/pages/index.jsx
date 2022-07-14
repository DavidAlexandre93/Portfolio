import Head from "next/head";
import { About } from "../components/About";
import { Header } from "../components/Header";
import { Hero } from "../components/Hero";
import { Experiences } from "../components/Experiences";
import { Projects } from "../components/Projects";
import { Contact } from "../components/Contact";

export default function Home() {
  return (
    <>
      <Head>
        
        <meta charset="utf-8" />
        <meta
        name="Portfolio"
        content="Portfolio de projetos de David Alexandre, Software Developer | DevOps | Software Quality | Cloud Computing | Artificial Intelligence (AI) | Blockchain(NFT/Metaverse)"
        />
        <link rel="icon" href="/favicon.png" />
        <title>David Alexandre - Portfolio</title>

      </Head>

      <Header />

      <Hero />

      <About />

      <Experiences />

      <Projects />

      <Contact />
    
    </>
  )
}
