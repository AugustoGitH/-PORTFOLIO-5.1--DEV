
import * as S from "./styles"

import Translate from "@/components/Translate"
import AccordionsProfessionalExperiences from "./components/AccordionsProfessionalExperiences"



const ProfessionalExperiences = () => {
  return (
    <S.ProfessionalExperiences>
      <h1><Translate>Minhas Experiências</Translate></h1>
      <AccordionsProfessionalExperiences
        accordions={[
          {
            title: "Desenvolvedor Junior Front-End",
            technologiesUsed: ["Next.js", "React.js", "MUI Components"],
            companyName: "DRT Sistemas - Tempo Integral",
            durationOfWork: {
              current: true,
              startDate: "08/2023"
            },
            localeOfWork: "Vila Velha, Espírito Santo, Brasil - Presencial",
            companyImage: "/images/drt-logo.jpg",
            description: "Como Desenvolvedor Front-End em Next.js e React.js, crio interfaces de usuário responsivas e atraentes, mantendo altos padrões de qualidade e colaborando em equipes multidisciplinares para projetos impactantes. Comprometido com a excelência na entrega de código de qualidade, participo de revisões de código e acompanho as tendências do desenvolvimento Front-End."
          },
          {
            title: "Desenvolvedor Web Full-Stack | Community Manager Voluntário",
            companyName: "Tech Legion - Tempo Parcial",
            technologiesUsed: ["Next.js", "React.js", "Typescript", "Node.js"],
            durationOfWork: {
              current: true,
              startDate: "05/2023"
            },
            localeOfWork: "Rio Grande do Sul, Brasil - Remotamente",
            companyImage: "/images/tech_legion_logo_lion_azul_escuro.png",
            description: "Como Desenvolvedor Front-End em Next.js e React.js, crio interfaces de usuário responsivas e atraentes, mantendo altos padrões de qualidade e colaborando em equipes multidisciplinares para projetos impactantes. Comprometido com a excelência na entrega de código de qualidade, participo de revisões de código e acompanho as tendências do desenvolvimento Front-End."
          },
          {
            title: "Desenvolvedor Web Full-Stack Freelancer",
            companyName: "Workana - Tempo Parcial",
            technologiesUsed: ["Next.js", "React.js", "Typescript", "Node.js"],
            durationOfWork: {
              current: true,
              startDate: "10/2022"
            },
            localeOfWork: "Guarapari, Espírito Santo, Brasil - Remotamente",
            companyImage: "/images/isotipo_Workana_trans.png",
            description: `Atividades-chave incluem o desenvolvimento de sistemas web com JavaScript e seus frameworks, colaboração no planejamento de design de projetos, além do gerenciamento de servidores e bancos de dados de clientes. Como parte da equipe, contribuo para a criação de soluções web de alto desempenho, mantendo o foco na excelência e seguindo as melhores práticas do setor. `
          },
          {
            title: "Desenvolvedor Web Full-Stack Freelancer",
            companyName: "GetNinjas - Tempo Parcial",
            technologiesUsed: ["Next.js", "React.js", "Typescript", "Node.js"],
            durationOfWork: {
              current: false,
              startDate: "04/2022",
              endDate: "05/2022"
            },
            localeOfWork: "Guarapari, Espírito Santo, Brasil - Remotamente",
            companyImage: "/images/getninjas_logo.jpg",
            description: `Atividades-chave incluem o desenvolvimento de sistemas web com JavaScript e seus frameworks, colaboração no planejamento de design de projetos, além do gerenciamento de servidores e bancos de dados de clientes. Como parte da equipe, contribuo para a criação de soluções web de alto desempenho, mantendo o foco na excelência e seguindo as melhores práticas do setor. `
          },
        ]}
      />
    </S.ProfessionalExperiences>
  )
}

export default ProfessionalExperiences