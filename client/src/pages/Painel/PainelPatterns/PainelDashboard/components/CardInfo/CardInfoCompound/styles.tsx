
import { styled } from "styled-components";
import roots from "../../../../../../../styles/roots";
import { presenceAnimation } from "../../../../../../../animations/presence";


interface ICardInfoCompoundProps {
  order: number
}

export const CardInfoCompound = styled.div<ICardInfoCompoundProps>`
  height: 180px;
  background: ${roots.color.LIGTH};
  color: ${roots.color.DARK};
  border-radius: 0.7rem;

  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: default;
  position: relative;
  opacity: 0;
  font-weight: bold;
  ${({ order }) => (
    presenceAnimation({
      animation: 'scale',
      duration: .5,
      delay: order / 8,
      timingFunction: "ease",
      fillMode: "forwards"
    })
  )}
  i{
    font-size: 2rem;
  }
  .title{
    font-size: ${roots.font.size.MD};
    line-height: 1.4rem;
    text-transform: uppercase;
    text-align: center;
    margin-top: .5rem;
    display: flex;
    align-items: center;
    gap: .5rem;
  }
  .plus-text{
    position: absolute;
    top: -.4rem;
    left: -.4rem;
    background-color: ${roots.color.DARK};
    color: ${roots.color.LIGTH};
    padding: .3rem 1rem;
    font-size: ${roots.font.size.XSM};
    border-radius: .4rem;;
  }
  .sub-title{
      font-size: ${roots.font.size.SM};
      text-transform: uppercase;
      line-height: 1rem;
    }
  
`