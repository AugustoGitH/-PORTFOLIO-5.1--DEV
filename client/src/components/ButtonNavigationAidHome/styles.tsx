
import { styled } from "styled-components";
import roots from "../../styles/roots";



export const ButtonNavigationAidHome = styled.button`
  all: unset;
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  width: 40px;
  height: 40px;
  border-radius: 1rem;
  display: none;
  align-items: center;
  justify-content: center;
  background-color: ${roots.color.ALERT};
  color: ${roots.color.DARK};
  box-shadow: ${roots.layout.BOX_SHADOW};
  cursor: pointer;
  transition: .2s;
  @media (max-width: ${roots.screens.MD}) {
    display: flex;
  }
`