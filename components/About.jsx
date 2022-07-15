import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import AboutImg from '../public/assets/tag.png';

const About = () => {
  return (
    <div id='about' className='w-full md:h-screen p-2 flex items-center py-16'>
      <div className='max-w-[1240px] m-auto md:grid grid-cols-3 gap-8'>
        <div className='col-span-2'>
          <p className='uppercase text-xl tracking-widest text-[#5651e5]'>
            About
          </p>
          <h2 className='py-4'>Who I Am</h2>
          <p className='py-2 text-gray-600'>
            / / I am not your average developer
          </p>
          <p className='py-2 text-gray-600'>
            28 anos, natural do estado do Mato Grosso e atualmente residindo na região metropolitana de São Paulo, formado em técnico eletrônico e técnico em desenvolvimento de sistemas pela instituição ETEC, atualmente cursando Ciência da Computação no Centro Universitário UNASP, realizando inúmeros cursos de especialização relacionados a diversas tecnologias; entusiasta da tecnologia da informação, focado e detalhista. 
          </p>
          <p className='py-2 text-gray-600'>
          Carreira iniciada na área da engenharia eletrônica com mais de 5 anos de experiência, migrando para área de tecnologia já com 4 anos de experiência, iniciando na função de automação de testes e também desenvolvimento full stack, atualmente atuando como desenvolvedor full cycle, envolvendo DevOps e SRE, prestando suporte e serviços para o mundo do blockchain(NFT) metaverso e Inteligência Artificial.
          </p>
          <Link href='https://github.com/DavidAlexandre93?tab=repositories'>
            <p className='py-2 text-gray-600 underline cursor-pointer'>
              Check out some of my latest projects.
            </p>
          </Link>
        </div>
        <div className='w-full h-auto m-auto shadow-xl shadow-gray-400 rounded-xl flex items-center justify-center p-4 hover:scale-105 ease-in duration-300'>
          <Image src={AboutImg} className='rounded-xl' alt='/' />
        </div>
      </div>
    </div>
  );
};

export default About;
