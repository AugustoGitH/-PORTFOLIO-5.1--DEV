
import { styled } from "styled-components";
import roots from "../../../../../../styles/roots";



export const TechologiesInProjects = styled.div`
  background-color: ${roots.color.PRIMARY_LIGHT};
  margin-top: 7rem;
  border-radius: 1.5rem;
  padding: 3rem 1rem 1rem 1rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: ${roots.layout.BOX_SHADOW};
  position: relative;
  @media (max-width: 460px) {
    padding: 4rem 1rem 1rem 1rem;
  }
  h1 {
    margin-bottom: 1rem;
    text-transform: capitalize;
    text-align: center;
    line-height: 2rem;
    position: absolute;
    top: -1rem;
    padding: 0 1rem;
    font-size: ${roots.font.size.XLG};
  }
  ul {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    li {
      margin: 0.4rem;
      display: flex;
      align-items: center;
      justify-content: center;
      border-radius: 0.5rem;
      padding: 0.4rem 1.3rem;
      cursor: default;
      border: 1.4px solid rgba(255, 255, 255, 0.596);
      transition: 0.3s;
      position: relative;
      @media (max-width: ${roots.screens.MD}) and (min-width: ${roots.screens.LG}) {
        width: calc(50% - 2rem);
      }
      @media (max-width: ${roots.screens.XSM}) {
        width: calc(50% - 2rem);
      }
      @media (max-width: ${roots.screens.XXSM}) {
        width: 100%;
      }
      &::after {
          content: "";
          position: absolute;
          width: 20px;
          height: 10px;
          background-color: ${roots.color.PRIMARY_LIGHT};
          right: -3px;
          top: -2px;
          transform: translateX(-50%);
          transition: 0.3s;
        }
        &::before {
          content: "";
          position: absolute;
          width: 20px;
          height: 10px;
          background-color: ${roots.color.PRIMARY_LIGHT};
          left: -3px;
          bottom: -2px;
          transform: translateX(-50%);
          transition: 0.3s;
        }
        &:hover::after,
        &:hover::before {
          width: 0%;
        }
        &:hover {
          border: 1.4px solid ${roots.color.LIGTH};
        }
        &:hover h2 {
          color: ${roots.color.LIGTH};
        }
      span {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        @media(max-width: ${roots.screens.XSM}){
          width: 100px;
        }
        h2 {
          font-size: ${roots.font.size.SM};
          transition: 0.3s;
          color: rgba(255, 255, 255, 0.753);
        }
        i {
          font-size: 1.4rem;
          margin-right: 0.5rem;
          color: ${roots.color.ALERT};
          transition: .2s;
        }
      }
    }
  }
`