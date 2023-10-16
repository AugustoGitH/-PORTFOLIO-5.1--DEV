
import { styled } from "styled-components";
import roots from "../../../../../../../../styles/roots";


export const DisplayPositions = styled.div`
  flex: none; 
  width: 40px;
  height: 100%;
  background-color: ${roots.color.PRIMARY_LIGHT};
  border-radius: .4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${roots.screens.MD}) {
    width: 100%;
    height: 40px;
  }
  ul{
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    @media (max-width: ${roots.screens.MD}) {
      flex-direction: row;
      width: 100%;
      height: auto;
    }
    li{
      font-size: 1.2rem;
      color: #ffffff7d;
      cursor: pointer;
      transition: .2s;
      &:hover{
        color: ${roots.color.ALERT};
        transform: scale(1.3);
      }

    }
    .marked{
      color: ${roots.color.ALERT};
      transform: scale(1.3);
    }
  }
`