
import { styled } from 'styled-components';
import { presenceAnimation } from '../../../../../../animations/presence';
import roots from '../../../../../../styles/roots';


export const PercentagesUsedTechs = styled.ul`
  margin-top: 1rem;
  padding-left: 1rem;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  max-width: 600px;
`;

export const Loader = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 3rem 0;

`

export const NotFound = styled.div`
  width: 100%;
  padding: 3rem 0;
  display: flex;
  justify-content: center;
  ${presenceAnimation({
  animation: "scale",
  duration: .3
})
  }
  span{
    background-color: ${roots.color.DARK};
    color: ${roots.color.LIGTH};
    padding: .5rem 1rem;
    border-radius: .3rem;
    display: inline-flex;
    align-items: center;
    gap: .6rem;
    max-width: 300px;
    i{
      font-size: 1.3rem;
    }
  }

`

interface IBarPercentageProps {
  order: number,
  percent: number
  tech: string
}

export const BarPercentage = styled.li<IBarPercentageProps>`
  display: flex;
    gap: 0.5rem;
    align-items: center;
    .icon-tech {
      flex: none;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: ${roots.color.DARK};
      width: 30px;
      height: 30px;
      border-radius: 50%;
      color: ${roots.color.LIGTH};
      font-size: .8rem;
      position: relative;
      cursor: default;
      &::after {
        content: ${({ tech }) => `"${tech}"`};
        text-transform: uppercase;
        letter-spacing: 0.02rem;
        position: absolute;
        left: 1.5rem;
        bottom: -0.4rem;
        background-color: ${roots.color.DARK};
        pointer-events: none;
        color: ${roots.color.LIGTH};
        padding: 0.3rem 0.5rem;
        z-index: ${roots.orders.SUP};
        border-radius: 0.3rem;
        font-size: 0.7rem;
        opacity: 0;
        transform: translateX(10px);
        transition: 0.2s;
        font-weight: bold
      }
      &:hover {
        &::after {
          opacity: 1;
          transform: translateX(0);
        }
      }
      i {
        font-size: 1rem;
      }
    }
    .percentage-bar-container {
      width: 100%;
      height: 10px;
      background-color: #0000001c;
      .percentage-bar-content {
        width: 40%;
        height: 100%;
        background-color: ${roots.color.DARK};
        position: relative;
        width: 0%;
      ${({ percent, order, tech }) => `
      @keyframes progress-${tech} {
        0%{ width: 0% }
        100%{ width: ${percent}% }
      }
      animation-name: progress-${tech};
      animation-fill-mode: forwards;
      animation-duration: 1s;
      animation-delay: ${order / 3}s;
      animation-timing-function: ease-in-out;
      `}
        .percentage-value {
          position: absolute;
          background-color: ${roots.color.DARK};
          color: ${roots.color.LIGTH};
          padding: 0.2rem 0.3rem;
          font-size: 0.7rem;
          border-radius: 0.3rem;
          top: -1.3rem;
          right: -1rem;
          &::after{
            content: "";
            position: absolute;
            width: 6px;
            height: 6px;
            bottom: -.1rem;
            left: 0.1rem;
            transform: rotate(50deg);
            background-color: ${roots.color.DARK};
          }
        }
      }
    }

`