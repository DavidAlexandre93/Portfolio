import Image from 'next/image';
import React from 'react';
import cryptoImg from '../public/assets/projects/tag.png';
import { RiRadioButtonFill } from 'react-icons/ri';
import Link from 'next/link';

const crypto = () => {
  return (
    <div className='w-full'>
      <div className='w-screen h-[50vh] relative'>
        <div className='absolute top-0 left-0 w-full h-[50vh] bg-black/70 z-10' />
        <Image
          className='absolute z-1'
          layout='fill'
          objectFit='cover'
          src={cryptoImg}
          alt='/'
        />
        <div className='absolute top-[70%] max-w-[1240px] w-full left-[50%] right-[50%] translate-x-[-50%] translate-y-[-50%] text-white z-10 p-2'>
          <h2 className='py-2'>Hortelan</h2>
          <h3>PHP / IOT / MySQL</h3>
        </div>
      </div>

      <div className='max-w-[1240px] mx-auto p-2 grid md:grid-cols-5 gap-8 py-8'>
        <div className='col-span-4'>
          <p>Project</p>
          <h2>Overview</h2>
          <p>
             Hortelan resumo deste nome é justamente de Horta + Lan de rede, onde o intuito é de sua horta ou plantas estarem na rede para acesso via web site, assim podendo ter todos os dados mostrados e status do solo como nível de bateria, nível de água, umidade relativa do ar e temperatura, umidade do solo e ultima rega atualizada. Tendo todo o status de seu sistema e horta bem visíveis em seu site com seu cadastro pessoal e também de sua horta ou planta. Com três tipos de flag para o sistema, ou seja, com rega manual, rega automática e desligamento do sistema, com rega manual podendo clicar no botão de "regar agora" toda a vez que desejar regar sua horta e com rega automática pode ser escolhido o nível de umidade do solo em três níveis com baixo, médio e alto e o próprio sistema ira fazer esta rega automática observando o nível do solo que foi estabelecido. 
          </p>
          <a
            href='https://www.linkedin.com/posts/david-fernandes-08b005b4_hortelan-resumo-deste-nome-%C3%A9-justamente-de-activity-6422814925667737600-BnkD?utm_source=linkedin_share&utm_medium=member_desktop_web'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4 mr-8'>Code</button>
          </a>
          <a
            href='https://www.linkedin.com/posts/david-fernandes-08b005b4_hortelan-resumo-deste-nome-%C3%A9-justamente-de-activity-6422814925667737600-BnkD?utm_source=linkedin_share&utm_medium=member_desktop_web'
            target='_blank'
            rel='noreferrer'
          >
            <button className='px-8 py-2 mt-4'>Demo</button>
          </a>

        </div>
        <div className='col-span-4 md:col-span-1 shadow-xl shadow-gray-400 rounded-xl py-4'>
          <div className='p-2'>
            <p className='text-center font-bold pb-2'>Technologies</p>
            <div className='grid grid-cols-3 md:grid-cols-1 '>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> PHP
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> MySQL
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Arduino
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> IOT
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> c++
              </p>
              <p className='text-gray-600 py-2 flex items-center'>
                <RiRadioButtonFill className='pr-1' /> Javascript
              </p>
            </div>
          </div>
        </div>
        <Link href='/#projects'>
          <p className='underline cursor-pointer'>Back</p>
        </Link>
      </div>
    </div>
  );
};

export default crypto;
