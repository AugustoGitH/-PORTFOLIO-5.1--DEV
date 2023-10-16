
import { styled } from "styled-components";
import roots from "../../../../../../styles/roots";
import { presenceAnimation } from "../../../../../../animations/presence";


interface IInputSelectIdRepoProps {
  disabled: boolean
}

export const InputSelectIdRepo = styled.div<IInputSelectIdRepoProps>`
  width: 500px;
  position: relative;
  pointer-events: ${({ disabled }) => disabled ? "none" : "all"};
  @media (max-width: ${roots.screens.MD}) {
    width: 100%;
  }
  .id-repo {
    position: absolute;
    right: 1rem;
    top: 1rem;
    background-color: ${roots.color.PRIMARY_LIGHT};
    padding: 0.1rem 0.3rem;
    border-radius: 0.3rem;
    font-size: ${roots.font.size.XSM};
    z-index: ${roots.orders.SUP};
    cursor: pointer;
    ${presenceAnimation({
  animation: "scale",
  duration: .3
})}
  }
  .select-repositories-modal {
    width: 100%;
    background-color: ${roots.color.PRIMARY_LIGHT};
    padding: 1.5rem 1rem;
    border-bottom-right-radius: 1rem;
    border-bottom-left-radius: 1rem;
    position: absolute;
    z-index: ${roots.orders.XSUB};
    ${presenceAnimation({
  animation: "translateUp",
  duration: .4
})}
    .results-search-repositories {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      width: 100%;
      max-height: 200px;
      overflow-y: auto;
      padding-right: 0.4rem;
      gap: 0.5rem;
      li {
        width: 100%;
      }
      .not-found-repositories {
        text-align: center;
      }
      .repository-result {
        display: flex;
        gap: 1rem;
        &:hover span {
          color: #fff;
          border: 1.3px solid #ffe6024d;
        }
        span {
          width: calc(70% - 1rem);
          padding: 0.5rem 1rem;
          cursor: pointer;
          color: #ffffffb4;
          background-color: #ffffff15;
          border-radius: 0.4rem;
          border: 1.3px solid #ffffff25;
          transition: 0.2s;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          &:nth-child(2) {
            width: 30%;
          }
        }
      }
    }
  }
`