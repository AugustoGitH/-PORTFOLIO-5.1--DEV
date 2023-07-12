
import { styled } from "styled-components";
import { presenceAnimation } from "../../animations/presence";
import roots from "../../styles/roots";


export const Login = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${roots.color.PRIMARY};
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
  padding: 1rem;
  .card{
    width: 500px;
    background: ${roots.color.LIGTH};
    border-radius: 1rem;
    ${presenceAnimation({
  animation: "translateDown",
  duration: .3
})}
  color: ${roots.color.DARK};
  padding: 2rem;
  form{
    margin-top: 1rem;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: .5rem;
    font-weight: bold;
    .input{
      width: 100%;
      label{
        font-size: ${roots.font.size.XSM};
      }
      input{
        width: 100%;
        padding: .5rem 1rem;
        border-radius: .5rem;
        border: 2px solid ${roots.color.DARK};
        background-color: transparent;
        font-size: ${roots.font.size.XSM};
        font-family: ${roots.font.family.POPPINS};
        outline: none;
        font-weight: bold;
        transition: .2s;
        &:focus{
          background-color: #fff;
        }
      }
      .helper-text{
        display: inline-block;
        font-size: calc(${roots.font.size.XSM} - .1rem);
        line-height: calc(${roots.font.line_heigth.XSM} - .2rem);
        margin-top: .2rem;
      }
    }
    button{
      all: unset;
      margin-top: .9rem;
      background: ${roots.color.DARK};
      color: ${roots.color.LIGTH};
      padding: .5rem 1rem;
      border-radius: .5rem;
      font-size: ${roots.font.size.XSM};
      text-transform: uppercase;
      cursor: pointer;
      border: 2px solid ${roots.color.DARK};
      transition: .2s;
      &:hover{
        background-color: transparent;
        color: ${roots.color.DARK};
      }
    }
  }
  }
`