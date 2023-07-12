


import { type ReactNode } from "react";

import * as S from "./styles"
import { Loader } from "../../../../../../../components/Loader";

export interface ICardInfoCompoundProps {
  title: string | ReactNode;
  subTitle: string | ReactNode;
  icon: ReactNode;
  order?: number;
  plus?: string;
  loading?: boolean,
  quantity: number | null
}

const CardInfoCompound = ({ quantity, title, subTitle, icon, order = 0, plus, loading = false }: ICardInfoCompoundProps): JSX.Element => {
  return (
    <S.CardInfoCompound order={order}>
      {plus && (<span className="plus-text">{plus}</span>)}
      {icon}
      <span className="title">{loading ? <Loader.Default size="md" color="dark" /> : quantity === null ? "" : quantity} {title}</span>
      <span className="sub-title">{subTitle}</span>
    </S.CardInfoCompound>
  )
}

export default CardInfoCompound