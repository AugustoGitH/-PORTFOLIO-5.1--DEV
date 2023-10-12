import { styled } from "styled-components";
import roots from "../../../styles/roots";
import { presenceAnimation } from "../../../animations/presence";


export const AlertDialog = styled.div`
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #1a040429;
  z-index: ${roots.orders.XSUP};
  .card{
    max-width: 800px;
    display: flex;
    flex-direction: column;
    padding: 2rem 3rem;
    background: ${roots.color.PRIMARY_LIGHT};
    border-radius: .4rem;
    gap: 1.5rem;
    ${presenceAnimation({
  animation: "scale",
  duration: .3
})}
    .card-content{
      width: 100%;
      display: flex;
      align-items: center;
      gap: .7rem;
      i{
        font-size: 2rem;
      }
      .text-content{
        .title{
          display: block;
          font-size: 1.3rem;
          line-height: 1.5rem;
          font-weight: bold;
          
        }
        .message{
          display: block;
          margin-top: .2rem;
          font-size: 1rem;
          line-height: 1.2rem;
        }
      }
    }
    .buttons-root{
      width: 100%;
      display: flex;
      justify-content: flex-end;
      gap: .5rem;
      button{
        all: unset;
        background: ${roots.color.PRIMARY_X_LIGHT};
        cursor: pointer;
        font-size: .7rem;
        text-transform: uppercase;
        font-weight: bold;
        padding: .4rem 1rem;
        border-radius: .3rem;
        transition: .2s;
        opacity: .6;
        &:hover{
          opacity: 1;
        }
      }
      .btn-action{
        background: ${roots.color.ALERT};
        color: ${roots.color.DARK}
      }
    }
  }

`