import React, { useEffect } from 'react';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Resume = () => {
  useEffect(() => {
    document.title = 'David Alexandre | Resume';
  }, []);
  return (
    <>

      <div className='max-w-[940px] mx-auto px-4 sm:px-6 pt-[110px] pb-10'>
        <h2 className='text-center'>Resume</h2>
        <div className='bg-[#d0d4d6] my-4 p-4 sm:p-5 w-full flex flex-col sm:flex-row gap-4 justify-between sm:items-center'>
          <h2 className='text-center sm:text-left text-2xl sm:text-3xl'>David Alexandre Fernandes</h2>
          <div className='flex justify-center sm:justify-end gap-4'>
            <a href='https://www.linkedin.com/in/david-alexandre-fernandes-08b005b4/' target='_blank' rel='noreferrer'>
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
              Senior Software Engineer <span className='px-1'>|</span> Software Architecture <span className='px-1'>|</span> Cloud & AI
            </p>
          </div>
          <div className='block sm:hidden'>
            <p>Senior Software Engineer</p>
            <p className='py-2'>Architecture | Cloud</p>
            <p>Applied AI</p>
          </div>
        </div>

        <p>
          Engenheiro de Software Sênior com 10 anos de experiência em tecnologia, atuando no desenvolvimento FullStack, APIs,
          microsserviços e soluções distribuídas com Java, Spring Boot, Python, Node.js, ReactJS, Kafka e Redis. Experiência em
          arquitetura de software, cloud computing, Kubernetes, Terraform, observabilidade e IA aplicada com LLMs, RAG, MCP e APIs de IA.
        </p>
        <p className='py-3'>
          Objetivo: atuar em Engenharia de Software, Arquitetura de Software ou soluções com Inteligência Artificial, contribuindo para
          APIs, microsserviços, plataformas cloud, integrações corporativas e aplicações baseadas em LLMs, RAG e MCP.
        </p>

        <div className='text-center py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Skills</h5>
          <p className='py-2 leading-relaxed'>
            <span className='font-bold'>Stack Principal</span>
            <span className='px-2'>|</span>Java
            <span className='px-2'>|</span>Spring Boot
            <span className='px-2'>|</span>JavaScript
            <span className='px-2'>|</span>TypeScript
            <span className='px-2'>|</span>ReactJS
            <span className='px-2'>|</span>Node.js
            <span className='px-2'>|</span>Python
            <span className='px-2'>|</span>Kafka
            <span className='px-2'>|</span>Redis
          </p>
          <p className='py-2 leading-relaxed'>
            <span className='font-bold'>Cloud & DevOps</span>
            <span className='px-2'>|</span>Docker
            <span className='px-2'>|</span>Kubernetes
            <span className='px-2'>|</span>AWS
            <span className='px-2'>|</span>GCP
            <span className='px-2'>|</span>Terraform
            <span className='px-2'>|</span>CI/CD
            <span className='px-2'>|</span>Azure
            <span className='px-2'>|</span>Observability
          </p>
        </div>

        <div className='py-4'>
          <h5 className='text-center underline text-[18px] py-2'>Formação acadêmica e certificados</h5>
          <p className='py-1'>Bacharelado em Ciência da Computação - Universidade São Judas Tadeu (conclusão em 2023)</p>
          <p className='py-1'>MBA em Arquitetura de Software - FullCycle (conclusão em 2025)</p>
          <p className='py-1'>Pós-graduação em FullStack Development - FIAP (conclusão em 2026)</p>
          <p className='py-1'>MBA em Engenharia de Software - USP/Esalq (cursando)</p>
          <p className='py-1'>Pós-graduação em Engenharia de IA - Faculdade Impacta Digital (cursando)</p>
        </div>

        <h5 className='text-center underline text-[18px] py-4'>Experiência profissional</h5>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold italic'>Dock - Spread Financial Power | Engenheiro de Software Sênior</span>
            <span className='px-2'>|</span>São Paulo, SP
          </p>
          <p className='py-1 italic'>2026 - Atual</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Atuação no time do Pix, com MED, DICT, SPI, Pix Agendado, Pix Automático, MIP, Cobrança QRCode, Cash-in e Cash-out.</li>
            <li>Desenvolvimento de features com TypeScript, Clean Architecture e práticas de SDD usando OpenSpec e GitHub Spec Kit.</li>
            <li>Desenho de soluções para pagamentos com AWS, SQS, DLQ, Kubernetes, CloudFormation e Lambdas.</li>
            <li>Observabilidade com Datadog e trabalho com bancos relacionais e não relacionais em fluxos transacionais.</li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Banco Bradesco S.A. | Engenheiro de Software Sênior</span>
            <span className='px-2'>|</span>São Paulo, SP
          </p>
          <p className='py-1 italic'>2025 - 2026</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Desenvolvimento de APIs e microsserviços com Java, Spring Boot e arquitetura hexagonal para sistemas bancários críticos.</li>
            <li>Cloudificação para Microsoft Azure, incluindo Azure Functions com JavaScript e Node.js.</li>
            <li>Observabilidade com Dynatrace, OpenTelemetry, Kibana, Grafana e Prometheus, além de interfaces frontend com Angular.</li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'>
            <span className='font-bold'>Mercado Livre | Software Developer</span>
            <span className='px-2'>|</span>Mato Grosso / São Paulo
          </p>
          <p className='py-1 italic'>2022 - 2024</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Desenvolvimento backend com Java e Python, interfaces responsivas com ReactJS e APIs escaláveis.</li>
            <li>Atuação com Kubernetes, SRE, troubleshooting, AWS, GCP e Terraform em ambientes cloud.</li>
            <li>Monitoramento, logs e performance com Kibana, Datadog e New Relic, além de modelagem e migrations de bancos.</li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'><span className='font-bold'>Banco Itaú Unibanco | Technology Engineer</span><span className='px-2'>|</span>São Paulo, SP</p>
          <p className='py-1 italic'>2020 - 2021</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Administração das plataformas Silk Central e Mobile Center, com desenvolvimento de customizações e plugins Java.</li>
            <li>Atuação com AWS, Docker, servidores, aplicações e bancos Oracle em suporte a ambientes críticos.</li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'><span className='font-bold'>Cognizant Technology Solutions | Test Automation Engineer</span><span className='px-2'>|</span>São Paulo, SP</p>
          <p className='py-1 italic'>2018 - 2019</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Automação de testes web e mobile com Java, JavaScript, Selenium WebDriver, Appium, JUnit e Cucumber.</li>
            <li>Testes end-to-end com Node.js, Postman e Cypress, aplicando práticas BDD e TDD.</li>
          </ul>
        </div>

        <div className='py-6'>
          <p className='italic'><span className='font-bold'>Tech Mahindra IT Services | Software Quality Assurance Tester</span><span className='px-2'>|</span>São Paulo, SP</p>
          <p className='py-1 italic'>Fev/2018 - Nov/2018</p>
          <ul className='list-disc list-outside px-7 py-1 leading-relaxed'>
            <li>Execução de testes end-to-end, integrados e massivos, validação de APIs com SOAPUI e JMeter e gestão de defeitos.</li>
            <li>Validação de integrações XML em ambientes Unix com SQL, Shell Script e ALM.</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Resume;
