
import { styled } from 'styled-components';
import { presenceAnimation } from '../../../../../../../../../../../../animations/presence';
import roots from '../../../../../../../../../../../../styles/roots';

export const PopUpPercentTechs = styled.div`
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  background: ${roots.color.PRIMARY_LIGHT};
  ${presenceAnimation({
  animation: 'opacity',
  duration: 0.4
})}
  .card{
    position: relative;
    width: 100%;
    height: 100%;
    background-color: ${roots.color.PRIMARY_X_LIGHT};
    padding: .8rem;
    display: flex;
    gap: .3rem;
    flex-direction: column;
    border-radius: .7rem;
    ${presenceAnimation({
  animation: 'translateDown',
  duration: 0.4
})}
.message-not-percent-techs{
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  ${presenceAnimation({
  animation: 'scale',
  duration: 0.4
})}
  span{
    max-width: 300px;
    font-size: ${roots.font.size.XSM};
    background: #d3d3d314;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: .5rem 1rem;
    gap: 1rem;
    border-radius: .6rem;
    color: #ffffffca;
    line-height: 1rem;
    border: 1.2px solid #ffffff15;
    i{
      font-size: 1.2rem;
      color: ${roots.color.ALERT}
    }
  }
}
    .btn-close {
    all: unset;
    width: 20px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 20px;
    background-color: #ffffff1b;
    position: absolute;
    right: .5rem;
    top: .5rem;
    border: 1px solid #ffffff1c;
    opacity: .7;
    cursor: pointer;
    transition: .2s;
    &:hover{
      opacity: 1;
    }
  }
  .statistic-percentages-techs {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    gap: 1rem;
    overflow-x: hidden;
    overflow-y: auto;
    height: 100%;
    padding: 1rem 1rem .5rem 0;
  }
  }
`;

interface IBarTechnologieProps {
  order: number;
  percent: number;
  tech: string,
  id: string
}

export const BarTechnologie = styled.li<IBarTechnologieProps>`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: center;
  .icon-tech {
    flex: none;
    background-color: ${roots.color.ALERT};
    width: 30px;
    border-radius: 0.2rem;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${roots.color.DARK};
    font-size: 0.8rem;
    font-weight: bold;
    position: relative;
    cursor: default;
    i {
      font-size: 1.2rem;
    }
  }
  .bar-percent-container {
    height: 10px;
    width: 100%;
    background-color: #e8e8e869;
    .bar-percent-content {
      height: 100%;
      background-color: ${roots.color.LIGHT};
      position: relative;
      width: 0%;
      ${({ percent, order, tech, id }) => `
      @keyframes progress-${tech}-${id} {
        0%{ width: 0% }
        100%{ width: ${percent}% }
      }
      animation-name: progress-${tech}-${id};
      animation-fill-mode: forwards;
      animation-duration: 1s;
      animation-delay: ${order / 3}s;
      animation-timing-function: ease-in-out;
      `}
    
      .percent-tech {
        position: absolute;
        top: -1.3rem;
        right: -1rem;
        background-color: ${roots.color.DARK};
        padding: 0.2rem 0.3rem;
        font-size: 0.5rem;
        border-radius: 0.3rem;
        &::after{
          content: "";
          width: 6px;
          height: 6px;
          background: ${roots.color.DARK};
          position: absolute;
          bottom: -.09rem;
          left: .16rem;
          transform: rotate(50deg)
        }
      }
    }
  }
`;
