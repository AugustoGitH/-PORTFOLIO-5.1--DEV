

import { Link } from "react-router-dom"
import ancors from "../../../settings/ancors"
import * as S from "./styles"
import { type IHeaderProps } from "./types"
import { useContext } from "react"
import { TranslateContext } from "../../../contexts/TranslateContext"
import TitleItem from "../../../components/TitleItem"

import DropDownLangs from "./components/DropDownLangs"
import translateString from "../../../settings/translation/utils/translateString"



const LayoutHeader = ({ mode = "home" }: IHeaderProps): JSX.Element => {
  const { language } = useContext(TranslateContext)
  return (
    <S.LayoutHeader>
      <div className="content">
        <Link to="/" title="Volte para a home"><h1>Augusto Westphal</h1></Link>
        <nav>
          {
            mode === "home" && (
              <>
                <DropDownLangs />
                <TitleItem title={translateString("Baixe meu currículo!", language)}>
                  <a
                    className="btn-curriculum"
                    target="_blank"
                    title=""
                    download="nome_do_arquivo.pdf"
                    href={ancors.others.CV} rel="noreferrer"
                  ><i className='bx bxs-receipt' /></a>
                </TitleItem>
                <TitleItem title={translateString("Meu Github!", language)}>
                  <a
                    className="btn-github"
                    target="_blank"
                    title=""
                    href={ancors.networks.GITHUB} rel="noreferrer"
                  ><i className='bx bxl-github' /></a>
                </TitleItem>
                <TitleItem title={translateString("Meu Linkedin!", language)}>
                  <a
                    className="btn-linkedin"
                    target="_blank"
                    title=""
                    href={ancors.networks.LINKEDIN} rel="noreferrer"
                  ><i className='bx bxl-linkedin-square' /></a>
                </TitleItem>

              </>
            )
          }
          {
            mode === "painel" && (
              <>
                <TitleItem title="Voltar para o início">
                  <Link
                    className="btn-back"
                    title="Voltar para o início"
                    to="/"
                  ><i className='bx bxs-home'></i></Link>
                </TitleItem>
                <TitleItem title="Fazer logout">
                  <button className="btn-logout" title="Fazer logout">
                    <i className='bx bxs-log-out-circle'></i>
                  </button>
                </TitleItem>

              </>
            )
          }
        </nav>
      </div>
    </S.LayoutHeader >
  )
}

export default LayoutHeader