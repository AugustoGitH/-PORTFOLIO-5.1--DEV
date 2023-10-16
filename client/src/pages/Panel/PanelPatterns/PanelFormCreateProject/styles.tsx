
import { styled } from "styled-components";
import roots from "../../../../styles/roots";


export const PainelFormCreateProject = styled.section`
margin-top: 3rem;
  width: 800px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 2.4rem;
  position: relative;
  @media (max-width: 860px) {
    width: 100%;
  }
  form{
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    align-items: start;
    button{
      all: unset;
      padding: .7rem 1rem;
      background-color: #ffffff14;
      border-radius: .3rem;
      font-size: ${roots.font.size.XSM};
      text-transform: uppercase;
      font-weight: bold;
      border: 1.4px solid #ffffff20;
      margin-top: 2rem;
      cursor: pointer;
      opacity: .7;
      transition: .2s;
      &:hover{
        opacity: 1;
      }
    }
  }

`

export const PopUpLoading = styled.div`
  position: absolute;
  width: 100%;
  height: calc(100% + 2rem);
  top: -1rem;
  left: -1rem;
  backdrop-filter: blur(3px);
  z-index: ${roots.orders.XSUB};
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: ${roots.orders.XSUP};
`;