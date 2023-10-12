import { styled } from "styled-components";
import roots from "../../../../../styles/roots";
import { presenceAnimation } from "../../../../../animations/presence";


export const DropDownLangs = styled.div`
  position: relative;
  button{
    position: relative;
    .lang-prev{
      position: absolute;
      font-size: .58rem;
      white-space: nowrap;
      background-color: ${roots.color.ALERT};
      color: ${roots.color.DARK};
      font-weight: bold;
      padding: .1rem .4rem;
      text-transform: uppercase;
      border-radius: .2rem;
      bottom: -.7rem;
      left: -1rem;
      display: none;
    }
  }
  .drop-down-langs{
    display: flex;
    top: calc(40px + .8rem);
    background-color: ${roots.color.PRIMARY_LIGHT};
    font-size: .8rem;
    font-weight: bold;
    padding: .3rem 1.5rem;
    position: absolute;
    border-radius: .3rem;
    gap: .6rem;
    left: 50%;
    align-items: center;
    transform: translateX(-50%);
    z-index: 15;
    ${presenceAnimation({
  animation: 'opacity',
  duration: .2
})
  }
    &::after{
      content: "";
      position: absolute;
      width: 10px;
      height: 10px;
      background-color: ${roots.color.PRIMARY_LIGHT};
      top: -5px;
      left: 0;
      right: 0;
      margin: auto;
      transform: rotate(45deg);
    }
    .line-vertical{
      display: block;
      height: 13px;
      width: 2px;
      background-color: #ffffff9e;
    }
    li.active-lang{
      color: ${roots.color.ALERT};
      opacity: 1;
    }
    li{
      white-space: nowrap;
      cursor: pointer;
      opacity: .7;
      transition: .2s;
      &:hover{
        color: ${roots.color.ALERT};
        opacity: 1;
      }
    }
  }
`