import React from 'react';
import Head from 'next/head';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const resume = () => {
  return (
    <>
      <Head>
        <title>David Alexandre | Resume</title>
        <meta
          name='description'
          content='I’m a front-end web developer specializing in building (and occasionally designing) exceptional digital experiences.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto p-2 pt-[120px]'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 w-full flex justify-between items-center'>
          <h2 className='text-center'>David Alexandre Fernandes</h2>
          <div className='flex'>
            <a
              href='https://www.linkedin.com/in/david-fernandes-08b005b4/'
              target='_blank'
              rel='noreferrer'
            >
              <FaLinkedinIn size={20} style={{ marginRight: '1rem' }} />
            </a>
            <a
              href='https://github.com/DavidAlexandre93'
              target='_blank'
              rel='noreferrer'
            >
              <FaGithub size={20} style={{ marginRight: '1rem' }} />
            </a>
          </div>
        </div>
        <div className='text-center py-4 text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Software Developer <span className='px-1'>|</span> Devops{' '}
              <span className='px-1'>|</span> Cloud Computing
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Software Developer</p>
            <p className='py-2'>DevOps</p>
            <p>Cloud Computing</p>
          </div>
        </div>
        <p>
        28 anos, natural do estado do Mato Grosso e atualmente residindo na região metropolitana de São Paulo, formado em técnico eletrônico e técnico em desenvolvimento de sistemas pela instituição ETEC, atualmente cursando Ciência da Computação no Centro Universitário UNASP, realizando inúmeros cursos de especialização relacionados a diversas tecnologias; entusiasta da tecnologia da informação, focado e detalhista. 
        Carreira iniciada na área da engenharia eletrônica com mais de 5 anos de experiência, migrando para área de tecnologia já com 4 anos de experiência, iniciando na função de automação de testes e também desenvolvimento full stack, atualmente atuando como desenvolvedor full cycle, envolvendo DevOps e SRE, prestando suporte e serviços para o mundo do blockchain(NFT) metaverso e Inteligência Artificial.
        </p>

        {/* Skills */}
        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2'>
            <span className='font-bold'>Technical Skills</span>
            <span className='px-2'>|</span>Fullstack developer
            <span className='px-2'>|</span> HTML <span className='px-2'>|</span>
            CSS <span className='px-2'>|</span>Devops
            <span className='px-2'>|</span>Cloud Computing
            <span className='px-2'>|</span> SRE
          </p>
          <p className='py-2'>
            <span className='font-bold'>Hashicorp Inc</span>
            <span className='px-2'>|</span>Terraform
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>
          Professional Experience
        </h5>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>
              Company name
            </span>
            <span className='px-2'>|</span>São Paulo, SP
          </p>
          <p className='py-1 italic'>Freelance Work (2022 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Details Experience....
            </li>
            <li>
            Details Experience....
            </li>
            <li>
            Details Experience....
            </li>
            <li>
            Details Experience....
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Company name</span>
            <span className='px-2'>|</span>São Paulo, SP
          </p>
          <p className='py-1 italic'>Freelance Work (2022 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Details Experience....
            </li>
            <li>
            Details Experience....
            </li>
            <li>
            Details Experience....
            </li>
            <li>
            Details Experience....
            </li>
          </ul>
        </div>
        {/* Experience */}
        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Company name</span>
            <span className='px-2'>|</span>São Paulo, SP
          </p>
          <p className='py-1 italic'>Freelance Work (2022 - Current)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>
            Details Experience....
            </li>
            <li>
            Details Experience....
            </li>
            <li>
            Details Experience....
            </li>
            <li>
            Details Experience....
            </li>
            <li>
            Details Experience....
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
