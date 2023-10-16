


import { Loader } from "../../../../../../../components/Loader";
import * as S from "./styles"


export interface ICardInfoSimpleProps {
  title: string;
  order?: number;
  quantity: number | null,
  loading?: boolean
}

const CardInfoSimple = ({ title, order = 0, quantity, loading = false }: ICardInfoSimpleProps): JSX.Element => {
  return (
    <S.CardInfoSimple order={order}>
      <span className="quantity">{loading ? <Loader.Default color="dark" size="md" /> : quantity === null ? "" : quantity}</span>
      <span className="title">{title}</span>
    </S.CardInfoSimple>
  )
}

export default CardInfoSimple