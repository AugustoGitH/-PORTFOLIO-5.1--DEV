



import { useContext } from "react"
import Translate from "../../../../../../components/Translate"

import * as S from "./styles"
import { TranslateContext } from "../../../../../../contexts/TranslateContext"
import translateString from "../../../../../../settings/translation/utils/translateString"
const Main = (): JSX.Element => {
  const { language } = useContext(TranslateContext)
  return (
    <S.Main>
      <S.TechPresentation>
        <h3>
          <Translate>Desenvolvedor Full-Stack</Translate>
          <i className='bx bxs-hot' ></i>
        </h3>
        <article>
          <h2><Translate>Meu nome é</Translate></h2>
          <h1>
            Augusto
            {" "}<span id="sobrenome-ocult"> Westphal</span>
          </h1>
        </article>
        <div className="skills">
          <p><Translate>Também sou</Translate></p>
          <ul>
            <li>Web <br />Designer</li>
            <li><Translate>Designer <br />Gráfico</Translate></li>
          </ul>
        </div>
        <a href="#contact">
          <i className='bx bxs-mouse-alt'></i>
          <Translate>Entre em contato</Translate>
        </a>
      </S.TechPresentation>
      <S.ProfileImage>
        <div className="profile-content">
          <img src="/images/profile-02.webp" alt={translateString("Imagem gerada pelo MidJourney de Augusto Westphal", language)} width={300} height={300} />
        </div>
      </S.ProfileImage>
    </S.Main>
  )
}

export default Main