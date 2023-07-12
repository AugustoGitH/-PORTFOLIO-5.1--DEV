/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react"

import * as S from "./styles"

interface IDisplayPositionsProps {
  onChange: (position: number) => void,
  value: number
}

interface IHandlePropsStar {
  onClick: () => void,
  className: string
}

const DisplayPositions = ({ onChange, value }: IDisplayPositionsProps): JSX.Element => {
  const [position, setPosition] = useState(value)

  useEffect(() => {
    onChange(position)
  }, [position])

  useEffect(() => {
    setPosition(value)
  }, [value])


  const handlePropsStar = (pos: number): IHandlePropsStar => ({
    onClick: () => { setPosition(pos === position ? 0 : pos); },
    className: position === pos ? "marked" : ""
  })


  return (
    <S.DisplayPositions>
      <ul>
        <li {...handlePropsStar(1)}><i className='bx bxs-star' /></li>
        <li {...handlePropsStar(2)}><i className='bx bxs-star' /></li>
        <li {...handlePropsStar(3)}><i className='bx bxs-star' /></li>
        <li {...handlePropsStar(4)}><i className='bx bxs-star' /></li>
        <li {...handlePropsStar(5)}><i className='bx bxs-star' /></li>
      </ul>
    </S.DisplayPositions>
  )
}


export default DisplayPositions