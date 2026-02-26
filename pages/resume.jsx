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
          content='Resumo profissional de David Alexandre Fernandes, com foco em desenvolvimento full cycle, DevOps, SRE e cloud computing.'
        />
        <link rel='icon' href='/fav.png' />
      </Head>

      <div className='max-w-[940px] mx-auto px-4 sm:px-6 pt-[110px] pb-10'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 sm:p-5 w-full flex flex-col sm:flex-row gap-4 justify-between sm:items-center'>
          <h2 className='text-center sm:text-left text-2xl sm:text-3xl'>David Alexandre Fernandes</h2>
          <div className='flex justify-center sm:justify-end gap-4'>
            <a href='https://www.linkedin.com/in/david-fernandes-08b005b4/' target='_blank' rel='noreferrer'>
              <FaLinkedinIn size={20} />
            </a>
            <a href='https://github.com/DavidAlexandre93' target='_blank' rel='noreferrer'>
              <FaGithub size={20} />
            </a>
          </div>
        </div>

        <div className='text-center py-4 text-base sm:text-xl font-bold uppercase tracking-wider'>
          <div className='hidden sm:block'>
            <p>
              Software Developer <span className='px-1'>|</span> DevOps <span className='px-1'>|</span> SRE <span className='px-1'>|</span>{' '}
              Cloud Computing
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Software Developer</p>
            <p className='py-2'>DevOps | SRE</p>
            <p>Cloud Computing</p>
          </div>
        </div>

        <p>
          Profissional de tecnologia com base técnica em eletrônica e desenvolvimento de sistemas, atualmente cursando Ciência da
          Computação no UNASP. Possui mais de 5 anos de experiência prévia em engenharia eletrônica e 4+ anos na área de tecnologia,
          com atuação em automação de testes, desenvolvimento full stack e evolução para desenvolvimento full cycle com práticas de
          DevOps e SRE.
        </p>
        <p className='py-3'>
          Perfil orientado à entrega de produto digital com qualidade, observabilidade, performance e confiabilidade, apoiando iniciativas
          em blockchain, metaverso e inteligência artificial.
        </p>

        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2 leading-relaxed'>
            <span className='font-bold'>Stack Principal</span>
            <span className='px-2'>|</span>JavaScript
            <span className='px-2'>|</span>TypeScript
            <span className='px-2'>|</span>React
            <span className='px-2'>|</span>Next.js
            <span className='px-2'>|</span>Node.js
            <span className='px-2'>|</span>Python (FastAPI)
            <span className='px-2'>|</span>Go
          </p>
          <p className='py-2 leading-relaxed'>
            <span className='font-bold'>Cloud & DevOps</span>
            <span className='px-2'>|</span>Docker
            <span className='px-2'>|</span>Kubernetes
            <span className='px-2'>|</span>AWS
            <span className='px-2'>|</span>GCP
            <span className='px-2'>|</span>Terraform
            <span className='px-2'>|</span>CI/CD
            <span className='px-2'>|</span>Observability
          </p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>Professional Experience</h5>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>Desenvolvedor Full Cycle | DevOps | SRE</span>
            <span className='px-2'>|</span>São Paulo, SP
          </p>
          <p className='py-1 italic'>Projetos e serviços em tecnologia (2022 - Atual)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Atuação ponta a ponta em projetos web, APIs e automações, da concepção ao deploy e suporte.</li>
            <li>Implementação de boas práticas de DevOps e SRE: pipelines, monitoramento e melhoria de confiabilidade.</li>
            <li>Suporte técnico a iniciativas ligadas a blockchain (NFT), metaverso e inteligência artificial.</li>
            <li>Foco em entregas contínuas com qualidade, performance e experiência do usuário alinhadas ao negócio.</li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Desenvolvedor Full Stack e Automação de Testes</span>
            <span className='px-2'>|</span>São Paulo, SP
          </p>
          <p className='py-1 italic'>Transição e consolidação na área de tecnologia (2020 - 2022)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Desenvolvimento de funcionalidades web e APIs para produtos digitais.</li>
            <li>Criação e manutenção de automações de testes para melhoria de qualidade e redução de retrabalho.</li>
            <li>Integração entre times técnicos e de produto para priorização e execução de demandas.</li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Engenharia Eletrônica</span>
            <span className='px-2'>|</span>Mato Grosso / São Paulo
          </p>
          <p className='py-1 italic'>Experiência anterior à migração para TI (2015 - 2020)</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Mais de 5 anos de experiência em engenharia eletrônica e rotinas técnicas especializadas.</li>
            <li>Base sólida em análise, diagnóstico e resolução de problemas complexos em ambiente técnico.</li>
            <li>Competências transferidas para TI: disciplina operacional, pensamento sistêmico e melhoria contínua.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default resume;
