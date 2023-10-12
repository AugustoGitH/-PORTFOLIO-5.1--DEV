
import { forwardRef, useContext } from "react"





import PercentagesUsedTechs from "./components/PercentagesUsedTechs"
import * as S from "./styles"
import ancors from "../../../../settings/ancors"
import Translate from "../../../../components/Translate"

import { TranslateContext } from "../../../../contexts/TranslateContext"
import translateString from "../../../../settings/translation/utils/translateString"

import useProjectsStore from "../../../../stores/project/public/useProjects"
import { Loader } from "../../../../components/Loader"


interface IHomeAboutProps {
  id: string
}

const HomeAbout = forwardRef<HTMLDivElement, IHomeAboutProps>(({ id }, ref) => {
  const { language } = useContext(TranslateContext)
  const projects = useProjectsStore(state => state.projects)
  return (
    <S.HomeAbout ref={ref} id={id}>
      <S.ImageProfile>
        <img src="/images/profile-01.webp" alt={translateString("Imagem gerada pelo MidJourney de Augusto Westphal", language)} width={190} height={190} />
      </S.ImageProfile>
      <S.HomeAboutDescription>
        <h3><Translate>Sobre mim</Translate></h3>
        <h1>Augusto C. Westphal</h1>
        <p>
          <Translate>
            Eu sou Augusto Caetano Westphal, um <strong>apaixonado por tecnologia</strong>, atuando como <strong>desenvolvedor full-stack</strong> e <strong>web designer</strong>. Minha paixão é criar <strong>soluções digitais impactantes</strong>. Além de projetos como <strong>freelancer</strong>, também me envolvo em <strong>trabalhos voluntários relacionados à tecnologia</strong>. Minha jornada é marcada por habilidades no <strong>desenvolvimento web</strong>, <strong>design de interfaces</strong> e <strong>otimização de desempenho</strong>. Sempre em busca de aprimorar minhas habilidades e conhecimentos, estive envolvido em <strong>diversos projetos</strong>. Meu objetivo é contribuir como <strong>desenvolvedor júnior</strong> em uma <strong>empresa de tecnologia inovadora</strong>, trazendo minha energia para <strong>projetos estimulantes</strong>. Sou movido pela <strong>proatividade</strong>, com uma aptidão natural para <strong>trabalho em equipe</strong> e uma habilidade notável para <strong>me adaptar com fluidez</strong> a uma variedade de desafios.
          </Translate>
        </p>
        <nav>
          <a
            title={translateString("Baixe meu currículo!", language)}
            target="_blank"
            href={ancors.others.CV} rel="noreferrer"
          ><Translate>Meu Currículo</Translate> <i className='bx bxs-receipt' /></a>
        </nav>
      </S.HomeAboutDescription>
      <S.InfoProjectsGit>
        <span><i className='bx bxl-github'></i></span>
        <h2><Translate>São mais de</Translate> {projects?.length || <Loader.Default color="dark" size="sm" />} <Translate>projetos publicados em meu portfólio</Translate></h2>
      </S.InfoProjectsGit>
      <S.InfoPercentTechs>
        <div className="title">
          <span><i className='bx bxs-doughnut-chart'></i></span>
          <h2><Translate>Porcentagem das tecnologias usadas em meus projetos</Translate></h2>
        </div>
        <PercentagesUsedTechs />
      </S.InfoPercentTechs>
      <S.ContactMe id="contact">
        <h3><Translate>Vamos conversar?</Translate></h3>
        <h1><Translate>Contate-me</Translate></h1>
        <p>
          <Translate>
            <i>Olá futuro cliente ou empresa!</i><br />Sou um <strong>desenvolvedor full-stack</strong> experiente e pronto para transformar suas
            ideias em realidade no <strong>mundo digital</strong>. Se você está buscando por alguém que possa ajudar a criar ou dar um upgrade no
            seu site ou aplicativo, você acabou de encontrar. Não hesite em entrar em contato comigo, estou ansioso para discutir como posso
            ajudar a sua empresa a alcançar novos patamares digitais com minhas habilidades e criatividade. Vamos juntos criar algo incrível!
          </Translate>
        </p>
        <ul>
          <li>
            <a title={translateString("Meu Email", language)} href={ancors.networks.EMAIL} target="_blank" rel="noreferrer">
              <span>Email</span>
              <i className='bx bxs-envelope' ></i>
            </a>
          </li>
          <li>
            <a title={translateString("Meu Whatsapp", language)} href={ancors.networks.WHATSAPP} target="_blank" rel="noreferrer">
              <span>Whatsapp</span>
              <i className='bx bxl-whatsapp' ></i>
            </a>
          </li>
          <li>
            <a title={translateString("Meu Linkedin", language)} href={ancors.networks.LINKEDIN} target="_blank" rel="noreferrer">
              <span>Linkedin</span>
              <i className='bx bxl-linkedin-square' ></i>
            </a>
          </li>
        </ul>
      </S.ContactMe>
      <S.TextCopyRigth>© Augusto Caetano Westphal, 2023. <br />All Rights Reserved</S.TextCopyRigth>
    </S.HomeAbout>
  )
})

HomeAbout.displayName = "HomeAboutSection"

export default HomeAbout