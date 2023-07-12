

import { Link } from "react-router-dom"
import ancors from "../../../settings/ancors"
import * as S from "./styles"
import { type IHeaderProps } from "./types"



const LayoutHeader = ({ mode = "home" }: IHeaderProps): JSX.Element => {
  return (
    <S.LayoutHeader>
      <div className="content">
        <Link to="/" title="Volte para a home"><h1>Augusto Westphal</h1></Link>
        <nav>
          {
            mode === "home" && (
              <>
                <a
                  className="button-curriculum"
                  target="_blank"
                  title="Faça download do meu CV"
                  href={ancors.others.CV} rel="noreferrer"
                ><i className='bx bxs-receipt' /></a>
                <a
                  className="button-github"
                  target="_blank"
                  title="Acesse o meu GitHub"
                  href={ancors.networks.GITHUB} rel="noreferrer"
                ><i className='bx bxl-github' /></a>
                <a
                  className="button-linkedin"
                  target="_blank"
                  title="Acesse o meu Linkedin"
                  href={ancors.networks.LINKEDIN} rel="noreferrer"
                ><i className='bx bxl-linkedin-square' /></a>
              </>
            )
          }
          {
            mode === "painel" && (
              <>
                <Link
                  className="button-back"
                  title="Voltar para o início"
                  href="/"
                ><i className='bx bxs-home'></i></Link>
                <button className="button-logout" title="Fazer logout">
                  <i className='bx bxs-log-out-circle'></i>
                </button>
              </>
            )
          }
        </nav>
      </div>
    </S.LayoutHeader >
  )
}

export default LayoutHeader