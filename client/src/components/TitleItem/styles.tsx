
import styled from "styled-components";
import roots from "../../styles/roots";
import { presenceAnimation } from "../../animations/presence";


export const TitleItem = styled.div`
  display: inline-flex;
  position: relative;
`

export const SubTitle = styled.div`
    all: unset;
    position: absolute;
    text-align: center;
    bottom: -1.8rem;
    white-space: nowrap;
    font-size: .7rem;
    background-color: ${roots.color.DARK};
    color: ${roots.color.LIGTH};
    left: 50%;
    transform: translateX(-50%);

    padding: .3rem .8rem;
    border-radius: .3rem;
    pointer-events: none;
    transition: .2s;
    opacity: 0;
    z-index: 20;
    ${presenceAnimation({
  animation: "opacity",
  duration: .3,
  delay: .5,
  fillMode: "forwards"
})}
    &::after{
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: ${roots.color.DARK};
      left: 50%;
      transform: rotate(45deg) translateX(-50%);
      top: 0;
    }
`