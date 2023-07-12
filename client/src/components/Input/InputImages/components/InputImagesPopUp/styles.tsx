
import { styled } from "styled-components";
import roots from "../../../../../styles/roots";
import { presenceAnimation } from "../../../../../animations/presence";


export const InputImagesPopUp = styled.div`
width: 100vw;
    min-height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    z-index: ${roots.orders.XSUP};
    background-color: #1f181974;
    padding: 3rem;
    
    display: flex;
    align-items: center;
    justify-content: center;
    @media (max-width: ${roots.screens.LG}) {
      padding: 1rem;
    }
    .card{
      width: 700px;
      background-color: ${roots.color.PRIMARY};
      padding: 5rem 3rem;
      ${presenceAnimation({
  animation: "scale",
  duration: .3
})};
      border: 1.3px solid #ffffff1b;
      box-shadow: 0 0 20px #00000029;
      border-radius: 1rem;
      position: relative;
      @media (max-width: ${roots.screens.LG}) {
        width: 100%;
        padding: 5rem 1rem;
      }
      .button-close-popup{
        all: unset;
        color: ${roots.color.ALERT};
        background-color: #222221;
        position: absolute;
        font-size: 1.2rem;
        top: 1rem;
        width: 35px;
        height: 35px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        right: 1rem;
        opacity: .6;
        cursor: pointer;
        transition: .2s;
        &:hover{
          opacity: 1;
        }
      }
      .list-input-images{
        padding-right: 1rem;
        display: flex;
        flex-direction: column;
        gap: 1rem;
        overflow-y: auto;
        max-height: calc(300px + 1rem);
        @media (max-width: ${roots.screens.XSM}) {
          max-height: calc(400px + 1rem);
        }
      }
    }

`