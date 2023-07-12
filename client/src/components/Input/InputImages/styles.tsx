
import styled from "styled-components";
import roots from "../../../styles/roots";
import { presenceAnimation } from "../../../animations/presence";

interface IInputImageContainerProps {
  error: boolean
}



export const InputImageContainer = styled.div<IInputImageContainerProps>`
  width: 350px;
  @media (max-width: 400px) {
    width: 100%;
  }
  .button-show-selected-images{
    all: unset;
    width: 100%;
    background-color: ${({ error }) => error ? roots.color.DANGER : roots.color.ALERT};
    color: ${roots.color.DARK};
    padding: .6rem 0;
    border-radius: .5rem;
    cursor: pointer;
    font-size: .9rem;
    border: 1.4px solid ${({ error }) => error ? roots.color.DANGER : roots.color.ALERT};
    transition: .2s;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: .4rem;
    i{
      font-size: 1.3rem;
    }
    &:hover{
      background-color: transparent;
      color: ${({ error }) => error ? roots.color.DANGER : roots.color.ALERT};
    }
  }
  .helper-text{
    font-size: ${roots.font.size.XXSM};
    color: ${roots.color.DANGER};
    text-transform: uppercase;
    font-weight: bold;
    ${presenceAnimation({
  animation: "opacity",
  duration: .3
})
  }
  }
  .popup-selected-images{
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
  }
  
`

export const ShowCase = styled.ul`
     margin-top: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: .5rem;
    
    li{
      
      width: 100%;
      height: 40px;
      overflow: hidden;
      border-radius: .4rem;
      background-color: ${roots.color.PRIMARY_LIGHT};
      border: 1px solid #ffffff19;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      i{
        font-size: 1.3rem;
        color: #ffffff93;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
`



export const InputImage = styled.div`
   width: 100%;
  label{
          background-color: ${roots.color.PRIMARY_LIGHT};
          display: flex;
          width: 100%;
          height: 300px;
          border-radius: .6rem;
         
          justify-content: center;
          align-items: center;
          flex-direction: column;
          position: relative;
          cursor: default;
          @media (max-width: 530px) {
            height: 200px;
          }
          &:hover .image-icon{
            transform: scale(1.3);
          }
          &:hover span{
            color: #fff;
          }

          img{
            width: 100%;
            height: 100%;
            position: absolute;
            object-fit: contain;
            ${presenceAnimation({
  animation: "scale",
  duration: .3
})};
          }
    
          .buttons-edit{
            position: absolute;
            right: 1rem;
            top: 1rem;
            display: flex;
            flex-direction: column;
            gap: .5rem;
            
            .delete-image, .favorite-image{
              all: unset;
              font-size: .9rem;
              width: 30px;
              height: 30px;
              border-radius: 50%;
              display: flex;
              align-items: center;
              justify-content: center;
              background-color: #373736;
              color: #000000a2;
              cursor: pointer;
              ${presenceAnimation({
  animation: "scale",
  duration: .3
})};
              transition: .2s;
              &:hover{
                color: ${roots.color.ALERT};
                i{
                  transform: scale(1.1);
                }
              }
            }
          } 
          .image-icon{
            color: #ffffffa3;
            transition: .2s;
            font-size: 3rem;
            margin-bottom: 1rem;
          }
          span{
            cursor: pointer;
            transition: .2s;
            background-color: #ffffff1e;
            padding: .4rem 1rem;
            border-radius: .3rem;
            color: #ffffffa4;
            font-size: .8rem;

          }
        }
        input{
          display: none;
        }

`