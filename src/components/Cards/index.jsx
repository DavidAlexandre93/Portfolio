import BeTheHeroIMG from '../../../public/img/projects/project.png'
import PokeNextIMG from '../../../public/img/projects/project.png'
import DTMoneyIMG from '../../../public/img/projects/project.png'
import NetflixCloneIMG from '../../../public/img/projects/project.png'
import IGNewsIMG from '../../../public/img/projects/project.png'
import PhotoGalleryIMG from '../../../public/img/projects/project.png'
import FinanceIMG from '../../../public/img/projects/project.png'
import EcommerceIMG from '../../../public/img/projects/project.png'
import github from '../../../public/img/icons/GitHub.svg'


import Image from "next/image"
import Link from 'next/link'
import { Content, Description, ImageStyled } from "./styles"

export const Cards = () => {

  const cards = [

    {img: EcommerceIMG, name: "Ecommerce (Em desenvolvimento)", link: "https://github.com/DavidAlexandre93/Ecommerce", tech: "NextJs, Typescript, Styled-components, ContextAPI, API"},

    {img: PhotoGalleryIMG, name: "Photo-Gallery", link: "https://github.com/DavidAlexandre93/Photo-Gallery", tech: "ReactJs, Typescript, Styled-components, Firebase"},

    {img: FinanceIMG, name: "Finance", link: "https://github.com/DavidAlexandre93/Financas-Pessoais", tech: "ReactJs, Typescript, Styled-components"},

    {img: BeTheHeroIMG, name: "Be The Hero", link: "https://github.com/DavidAlexandre93/Be_The_Hero", tech: "NodeJs, ReactJs, React Native, API, Styled-components, "},

    {img: PokeNextIMG, name: "PokeNext", link: "https://github.com/DavidAlexandre93/PokeNext", tech: "NextJs, API, Styled-components, "},

    {img: DTMoneyIMG, name: "DT-Money", link: "https://github.com/DavidAlexandre93/DTMoney", tech: "ReactJs, Typescript, API, Styled-components, ContexAPI, MirageJs"},

    {img: NetflixCloneIMG, name: "Clone da Netflix", link: "https://github.com/DavidAlexandre93/Clone-Netflix", tech: "ReactJs, API, CSS"},

    {img: IGNewsIMG, name: "Ig-News", link: "https://github.com/DavidAlexandre93/IG-News", tech: "NextJs, Typescript, SCSS, Stripe, FaunaDB, auth"},
  
  ]

  return (
    cards.map((card, key) => (
      <Content key={key}
        initial={{ y: 20, opacity: 0}}
        whileInView={{ y: 0, opacity: 1}}
        transition={{ duration: 1}}
        viewport={{ once: true }} // only one time
        whileHover={{scale: 1.05}}
      >

        <ImageStyled>

          <Image src={card.img}
          alt="projects"
          layout="responsive"
          />

        </ImageStyled>

        <Description>

          <h2>Nome: <span>{card.name}</span></h2>

          <p>
            Tecnologias utilizadas: <span>{card.tech}</span>
          </p>

          <Link href={card.link}>
            <a target="_blank">
              <Image src={github} alt="GitHub icon"/>
              <span>Projeto Completo</span>
            </a>
          </Link>

        </Description>

    </Content>
    ))

  )
}