
import { styled } from "styled-components";
import roots from "../../../styles/roots";
import { presenceAnimation } from "../../../animations/presence";


export const AlertCookies = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${roots.orders.XSUP};
  background-color: #25030321;
  ${presenceAnimation({
  animation: "opacity",
  duration: .2
})}
  padding: 1rem;
@media (max-width: ${roots.screens.XSM}) {
  display: flex;
  align-items: flex-end;
      
  }
  .card{
    background: ${roots.color.PRIMARY_LIGHT};
    position: absolute;
    width: 500px;
    bottom: 2rem;
    left: 2rem;
    padding: 1rem; 
    border-radius: .7rem;
    box-shadow: ${roots.layout.BOX_SHADOW};
    border: 2px solid #eee6e61d;
    opacity: 0;
    @media (max-width: ${roots.screens.XSM}) {
      width: 100%;
      position: static;

    }
    ${presenceAnimation({
  animation: "translateDown",
  duration: .4,
  fillMode: "forwards",
  timingFunction: "ease-out",
  delay: .4
})}
h4{
  display: flex;
  gap: .5rem;
  align-items: center;
  i{
    color: ${roots.color.ALERT}
  }
}
  p{
    margin-top: 1rem;
    font-size: ${roots.font.size.XSM};
    line-height: ${roots.font.line_heigth.XSM};
    color: #ffffffd8;
  }
  button{
    all: unset;
    margin-top: 2rem;
    background: ${roots.color.ALERT};
    color: ${roots.color.DARK};
    padding: .4rem 1rem;
    font-size: ${roots.font.size.XSM};
    text-transform: uppercase;
    font-weight: bold;
    border-radius: .3rem;
    cursor: pointer;
    transition: .2s;
    opacity: .8;
    &:hover{
      opacity: 1;
    }
  }
  }
`