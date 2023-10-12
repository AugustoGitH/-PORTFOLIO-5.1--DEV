
import styled from 'styled-components';
import roots from '../../styles/roots';
import { presenceAnimation } from '../../animations/presence';

export const ImagesViewScreen = styled.div`
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  background-color: #0000004f;

  z-index: ${roots.orders.XSUP};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  @media (max-width: ${roots.screens.XSM}) {
    padding: .5rem;
  }
  .card {
    background-color: ${roots.color.PRIMARY_LIGHT};
    box-shadow: ${roots.layout.BOX_SHADOW};
    border-radius: 1.5rem;
    ${presenceAnimation({
  animation: 'scale',
  duration: 0.2
})};
    position: relative;
    overflow: hidden;
    padding: 5rem 2rem;
    width: 900px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    @media (max-width: ${roots.screens.XSM}) {
      padding: 5rem .5rem;
    }
    .button-close {
      all: unset;
      width: 40px;
      height: 40px;
      background-color: #373030;
      color: ${roots.color.ALERT};
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      position: absolute;
      right: 2rem;
      top: 1rem;
      font-size: 1.3rem;
      cursor: pointer;
      transition: 0.2s;
      opacity: 0.5;
      @media (max-width: ${roots.screens.SM}) {
        right: 1rem;
        top: 1rem;
      }
      &:hover {
        opacity: 1;
      }
    }
    .image-cover {
      width: 100%;
      height: 290px;
      background-color: #373030;
      border-radius: 1rem;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      border: 1.5px solid #ffffff16;
      @media (max-width: ${roots.screens.XSM}) {
        height: 250px;
      }
 

     


      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
        ${presenceAnimation({
  animation: "scale",
  duration: .4
})
  }
      }
    }
    .images-list {
      width: 100%;
      display: flex;
      gap: 1rem;
      margin-top: 3%;
      justify-content: center;
      align-items: center;
      li {
        cursor: pointer;
        width: 100%;
        height: 80px;
        background: #e8ecec21;
        border-radius: 0.5rem;
        position: relative;
        overflow: hidden;
        transition: 0.2s;
        border: 1.5px solid #ffffff16;
        @media (max-width: ${roots.screens.XSM}) {
          height: 50px;
        }
        &:hover {
          transform: scale(1.1);
        }
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
          
        }
      }
    }
  }
`;
