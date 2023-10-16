
import { styled } from 'styled-components';
import roots from '../../../../../../../styles/roots';
import { presenceAnimation } from '../../../../../../../animations/presence';

interface ICardInfoSimpleProps {
  order: number;
}

export const CardInfoSimple = styled.div<ICardInfoSimpleProps>`
  background-color: ${roots.color.ALERT};
  color: ${roots.color.DARK};
  text-align: center;
  padding: 1.4rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .5rem;
  border-radius: 0.4rem;
  opacity: 0;
  font-weight: bold;
  ${({ order }) =>
    presenceAnimation({
      animation: 'scale',
      duration: 0.5,
      delay: order / 7,
      timingFunction: 'ease',
      fillMode: 'forwards'
    })}
  .quantity {
    font-size: ${roots.font.size.MD};
    line-height: 1.4rem;
    text-transform: uppercase;
    text-align: center;
  }
  .title {
    ${roots.font.size.SM};
    text-transform: uppercase;
    line-height: 1rem;
  }
`;
