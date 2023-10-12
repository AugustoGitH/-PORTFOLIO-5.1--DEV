
import { styled } from "styled-components";
import roots from "../../../../../../styles/roots";
import { presenceAnimation } from "../../../../../../animations/presence";


interface IProjectProps {
  order: number
}

export const Project = styled.li<IProjectProps>`
  width: 100%;
  position: relative;
  padding-bottom: 3rem;
  opacity: 0;
  ${({ order }) => presenceAnimation({
  animation: 'translateLeft',
  duration: 0.6,
  delay: order / 10,
  fillMode: 'forwards',
  timingFunction: 'ease'
})}
  
  .sub-project, .sup-project{
    width: 100%;
  }
  .sup-project{
    width: 100%;
    padding-top: 2rem;
    display: flex;
    flex-direction: column;
    gap: 1rem;
    
  }
  .sub-project{
    width: 100%;
    height: 260px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 2rem;
    @media (max-width: ${roots.screens.MD}) {
      flex-direction: column;
      gap: 1rem;
      height: 800px;
    }
    @media (max-width: ${roots.screens.XSM}) {
      height: 700px;
    }
    .form-inputs-edit{
      width: calc(100% - 30% - 2rem - 80px);
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: center;
      gap: 1rem;
      @media (max-width: ${roots.screens.MD}) {
        width: 100%;
        height: auto;
        margin: 2rem 0;
      }
    }
  }
  .buttons-control-edit{
    position: absolute;
    bottom: 1rem;
    right: 0;
    display: flex;
    gap: 1rem;
    button{
      all: unset;
      background: #292727;
      ${presenceAnimation({
  animation: "scale",
  duration: .3
})};
      color: #ffffffcc;
      padding: .6rem 1rem;
      font-size: ${roots.font.size.SM};
      border-radius: .4rem;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      border: 1.2px solid #ffffff38;
      transition: .2s;
      gap: .5rem;
      line-height: 1.2rem;
      @media (max-width:  ${roots.screens.XSM}) {
        font-size: ${roots.font.size.XSM};
        line-height: 1rem;
      }
      &:hover{
        color:  ${roots.color.ALERT};
        border: 1.2px solid #cebe0838;
      }
      i{
        font-size: 1.4rem;
      }
    }
  }

`
export const PopupLoading = styled.div`
  position: absolute;
  width: calc(100% + 1rem);
  height: calc(100% + 1rem);
  top: -.5rem;
  left: -.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(4px);
  z-index: ${roots.orders.XSUB};
`
