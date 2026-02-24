import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

import Html from '../public/assets/skills/html.png';
import Css from '../public/assets/skills/css.png';
import Javascript from '../public/assets/skills/javascript.svg';
import ReactImg from '../public/assets/skills/reactjs.svg';
import Tailwind from '../public/assets/skills/tailwind.svg';
import Github from '../public/assets/skills/github1.png';
import Firebase from '../public/assets/skills/firebase.png';
import NextJS from '../public/assets/skills/nextjs.svg';
import AWS from '../public/assets/skills/aws.svg';
import GCP from '../public/assets/skills/gcp.svg';
import Docker from '../public/assets/skills/docker.svg';
import Express from '../public/assets/skills/express.svg';
import FastAPI from '../public/assets/skills/fastapi.svg';
import Go from '../public/assets/skills/go.svg';
import Kubernetes from '../public/assets/skills/kubernetes.svg';
import Typescript from '../public/assets/skills/typescript.svg';
import ProjectsCover from '../public/assets/projects/logoprojects.svg';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Sobre', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projetos', href: '/#projects' },
  { label: 'Currículo', href: '/resume' },
  { label: 'Contato', href: '/#contact' },
];

export const SOCIAL_LINKS = [
  { label: 'LinkedIn', href: 'https://www.linkedin.com/in/david-fernandes-08b005b4/', icon: FaLinkedinIn, external: true },
  { label: 'GitHub', href: 'https://github.com/DavidAlexandre93', icon: FaGithub, external: true },
  { label: 'Calendly', href: 'https://calendly.com/davidalexandrefernandes', icon: AiOutlineMail, external: true },
  { label: 'Currículo', href: '/resume', icon: BsFillPersonLinesFill, external: false },
];

export const SKILLS = [
  { title: 'HTML', icon: Html },
  { title: 'CSS', icon: Css },
  { title: 'JavaScript', icon: Javascript },
  { title: 'React', icon: ReactImg },
  { title: 'Tailwind', icon: Tailwind },
  { title: 'Firebase', icon: Firebase },
  { title: 'GitHub', icon: Github },
  { title: 'Next.js', icon: NextJS },
  { title: 'AWS', icon: AWS },
  { title: 'GCP', icon: GCP },
  { title: 'Docker', icon: Docker },
  { title: 'Express', icon: Express },
  { title: 'FastAPI', icon: FastAPI },
  { title: 'Go', icon: Go },
  { title: 'Kubernetes', icon: Kubernetes },
  { title: 'TypeScript', icon: Typescript },
];

export const PROJECTS = [
  { title: 'Projeto Integrador - Bootcamp Mercado Livre', backgroundImg: ProjectsCover, projectUrl: '/property', tech: 'Spring Boot · Java · MySQL' },
  { title: 'Hortelan (IoT + Web)', backgroundImg: ProjectsCover, projectUrl: '/crypto', tech: 'PHP · MySQL · JavaScript · Arduino' },
  { title: 'API REST com FastAPI', backgroundImg: ProjectsCover, projectUrl: '/netflix', tech: 'FastAPI · Python · MySQL' },
  { title: 'Website Institucional', backgroundImg: ProjectsCover, projectUrl: '/twitch', tech: 'Next.js · Tailwind CSS' },
];
