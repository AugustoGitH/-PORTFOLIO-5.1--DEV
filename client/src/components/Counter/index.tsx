import { useEffect, useState } from "react"
import * as S from "./styles"

interface ICounterProps {
  counter?: number,
}


const formattedNumber = (number: number): [number, number] => {
  const firstNumber = Math.floor(number / 10) % 10;
  const secondNumber = number % 10;
  return [firstNumber, secondNumber];
}

const Counter = ({ counter }: ICounterProps) => {
  const [counterControlled, setCounterControlled] = useState(formattedNumber(counter ?? Number("09")))
  const [intervalId, setIntervalId] = useState<NodeJS.Timer | null>(null);
  useEffect(() => {
    if (typeof counter === 'number' && intervalId === null) {
      const id = setInterval(() => {
        setCounterControlled(([x, y]) => {
          const newX = x < 9 ? x + 1 : 0;
          const newY = y > 0 ? y - 1 : 9;
          return [newX, newY];
        });
      }, 10);
      setIntervalId(id);
    } else if (typeof counter === 'number' && intervalId !== null) {
      clearInterval(intervalId);
      setCounterControlled(formattedNumber(counter));
    }
  }, [counter, intervalId]);
  return (
    <S.Counter>
      <span className="left-direction">{counterControlled[0]}</span>
      <span className="right-direction">{counterControlled[1]}</span>
    </S.Counter>
  )
}

export default Counter