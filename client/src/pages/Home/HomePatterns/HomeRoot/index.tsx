import { ReactNode } from "react"
import * as S from "./styles"

interface IHomeRootProps {
  children: ReactNode
}

const HomeRoot = ({ children }: IHomeRootProps): JSX.Element => {
  return (
    <S.HomeRoot>
      <div className="content">
        {children}
      </div>
    </S.HomeRoot>
  )
}


export default HomeRoot