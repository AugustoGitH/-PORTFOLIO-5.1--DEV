

import { Link } from "react-router-dom"
import * as S from "./styles"

const LayoutPageNotFound = (): JSX.Element => {
  return (
    <S.LayoutPageNotFound>
      <div className="card">
        <span>404</span>
        <p>Ops! Parece que está página não existe!</p>
        <Link to="/">Voltar para o começo</Link>
      </div>
    </S.LayoutPageNotFound>
  )
}

export default LayoutPageNotFound