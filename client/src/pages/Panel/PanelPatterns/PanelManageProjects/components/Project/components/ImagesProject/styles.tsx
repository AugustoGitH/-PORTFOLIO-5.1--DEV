
import { styled } from "styled-components";
import roots from "../../../../../../../../styles/roots";


export const ImagesProject = styled.div`
  width: 30%;
  height: 100%;
  @media (max-width: ${roots.screens.MD}) {
    width: 100%;
    height: 40%;
  }
  @media (max-width: ${roots.screens.XSM}) {
    height: 30%;
  }
  .cover{
    width: 100%;
    height: 70%;
    overflow: hidden;
    border-radius: .4rem;
    background-color: ${roots.color.PRIMARY_LIGHT};
    img{
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  .images-sec{
    width: 100%;
    display: flex;
    height: 30%;
    gap: .5rem;
    padding-top: 1rem;
    li{
      width: 100%;
      border-radius: .3rem;
      height: 100%;
      background-color: ${roots.color.PRIMARY_LIGHT};
      display: flex;
      align-items: center;
      justify-content: center;
      i{
        color: #ffffff98;
      }
      img{
        object-fit: contain;
        width: 100%;
        height: 100%;
      }
    }
  }



`
