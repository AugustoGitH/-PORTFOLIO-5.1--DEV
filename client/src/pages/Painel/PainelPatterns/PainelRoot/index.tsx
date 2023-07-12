import { type ReactNode } from "react"

import * as S from "./styles"

interface IPainelRootProps {
  children: ReactNode
}

const PainelRoot = ({ children }: IPainelRootProps): JSX.Element => {
  return (
    <S.PainelRoot>
      <div className="content">
        {children}
      </div>
    </S.PainelRoot>
  )
}

export default PainelRoot