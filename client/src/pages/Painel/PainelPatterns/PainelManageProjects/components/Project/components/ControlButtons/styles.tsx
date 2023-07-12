
import { styled } from "styled-components";
import roots from "../../../../../../../../styles/roots";


export const ControlButtons = styled.div`
  flex: none;
  width: 40px;
  height: 100%;
  background-color: ${roots.color.PRIMARY_LIGHT};
  border-radius: .4rem;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding: 1rem 0;
  @media (max-width: ${roots.screens.MD}) {
    width: 100%;
    height: 50px;
    padding: 0;
    align-items: center;
  }
  ul{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: .2rem;
    @media (max-width:  ${roots.screens.MD}) {
      width: 100%;
      flex-direction: row;
      gap: 2rem;
    }
    li{
      i{
        font-size: 1.3rem;
        color: #ffffff7d;
        transition: .2s;
      }
      cursor: pointer;
      position: relative;
      &:hover{
       i{
        color:  ${roots.color.ALERT};
        transform: scale(1.2);
       }
      }
    }
    .button-att-repo, .button-trash{
      &::after{
        font-size: ${roots.font.size.XXSM};
        position: absolute;
        line-height: .6rem;
        background-color: ${roots.color.DARK};
        padding: .3rem .5rem;
        text-align: center;
        border-radius: .3rem;
        pointer-events: none;
        right: 1.5rem;
        top: 0;
        transform: translateX(-15px);
        opacity: 0;
        transition: .2s;
      }
      &:hover{
        &::after{
          transform: translateX(0px);
          opacity: 1;
        }
      }
    }
    .button-att-repo{
      &::after{
        content: "Atualizar repositório";
      }
    }
    .button-trash{
      &::after{
        content: "Deletar projeto";
      }
    }
  }

`
