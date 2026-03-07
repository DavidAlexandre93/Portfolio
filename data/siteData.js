import { AiOutlineMail } from 'react-icons/ai';
import { BsFillPersonLinesFill } from 'react-icons/bs';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';


const Html = '/assets/skills/html.png';
const Css = '/assets/skills/css.png';
const Javascript = '/assets/skills/javascript.svg';
const ReactImg = '/assets/skills/reactjs.svg';
const Tailwind = '/assets/skills/tailwind.svg';
const Github = '/assets/skills/github1.png';
const Firebase = '/assets/skills/firebase.png';
const NextJS = '/assets/skills/nextjs.svg';
const AWS = '/assets/skills/aws.svg';
const GCP = '/assets/skills/gcp.svg';
const Docker = '/assets/skills/docker.svg';
const Express = '/assets/skills/express.svg';
const FastAPI = '/assets/skills/fastapi.svg';
const Go = '/assets/skills/go.svg';
const Kubernetes = '/assets/skills/kubernetes.svg';
const Typescript = '/assets/skills/typescript.svg';
const ProjectsCover = '/assets/projects/logoprojects.svg';


export const NAV_LINKS = [
  { key: 'nav.home', href: '/' },
  { key: 'nav.about', href: '/#about' },
  { key: 'nav.skills', href: '/#skills' },
  { key: 'nav.projects', href: '/#projects' },
  { key: 'nav.resume', href: '/resume' },
  { key: 'nav.contact', href: '/#contact' },
];

export const SOCIAL_LINKS = [
  { key: 'LinkedIn', href: 'https://www.linkedin.com/in/david-fernandes-08b005b4/', icon: FaLinkedinIn, external: true },
  { key: 'GitHub', href: 'https://github.com/DavidAlexandre93', icon: FaGithub, external: true },
  { key: 'Calendly', href: 'https://calendly.com/davidalexandrefernandes', icon: AiOutlineMail, external: true },
  { key: 'nav.resume', href: '/resume', icon: BsFillPersonLinesFill, external: false },
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
