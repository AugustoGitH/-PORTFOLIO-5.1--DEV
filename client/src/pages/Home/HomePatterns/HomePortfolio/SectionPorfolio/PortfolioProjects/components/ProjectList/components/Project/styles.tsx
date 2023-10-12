import { styled } from 'styled-components'
import { presenceAnimation } from '../../../../../../../../../../animations/presence'
import roots from '../../../../../../../../../../styles/roots'

interface IProjectProps {
  order: number
}

export const Project = styled.li<IProjectProps>`
  flex: none;
  width: 100%;
  height: calc(230px + 3rem);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 3rem;
  gap: 1.5rem;
  overflow: hidden;
  ${({ order }) =>
    presenceAnimation({
      animation: 'translateRight',
      duration: 0.6,
      delay: order / 10,
      fillMode: 'backwards',
      timingFunction: 'ease',
    })}
  @media (max-width: ${roots.screens.XXLG}) {
    flex-direction: column;
    height: calc(580px + 3rem);
  }
  @media (max-width: ${roots.screens.XLG}) {
    height: calc(660px + 3rem);
  }
  @media (max-width: ${roots.screens.XSM}) {
    height: calc(550px + 3rem);
  }
`

export const Description = styled.div`
  width: calc(100% - 300px);
  height: 100%;
  position: relative;
  @media (max-width: ${roots.screens.XXLG}) {
    width: 100%;
    height: 40%;
    padding-left: 2rem;
  }
  @media (max-width: ${roots.screens.XLG}) {
    height: 30%;
  }
  @media (max-width: ${roots.screens.LG}) {
    height: 40%;
  }
  @media (max-width: ${roots.screens.SM}) {
    height: 40%;
    padding-left: 0;
  }
  @media (max-width: ${roots.screens.XSM}) {
    height: 50%;
  }
  @media (max-width: ${roots.screens.XXSM}) {
    height: 53%;
  }
  .technologies {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.7rem;
    text-transform: uppercase;
    flex-wrap: wrap;
    cursor: default;
    gap: 0.4rem;
    li {
      background-color: ${roots.color.PRIMARY_X_LIGHT};
      padding: 0.3rem 0.6rem;
      font-size: ${roots.font.size.XXSM};
      border-radius: 0.3rem;
      color: rgba(255, 255, 255, 0.795);
    }
  }
  h4 {
    font-size: ${roots.font.size.XSM};
    line-height: ${roots.font.line_heigth.SM};
    color: ${roots.color.ALERT};
    text-transform: capitalize;
  }
  h2 {
    text-transform: capitalize;
    line-height: calc(${roots.font.line_heigth.LG} - 0.1rem);
    font-size: calc(${roots.font.size.LG} - 0.1rem);
    @media (max-width: ${roots.screens.XXSM}) {
      line-height: calc(${roots.font.line_heigth.LG} - 0.3rem);
      font-size: calc(${roots.font.size.LG} - 0.3rem);
    }
  }
  nav {
    margin-top: 0.9rem;
    display: flex;
    gap: 1rem;
    a {
      all: unset;
      cursor: pointer;
      color: rgba(255, 255, 255, 0.788);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      position: relative;
      transition: 0.3s;
      font-size: ${roots.font.size.SM};
      @media (max-width: ${roots.screens.XXSM}) {
        font-size: calc(${roots.font.size.SM} - 0.1rem);
      }
      i {
        margin-left: 0.3rem;
      }
      &::after {
        content: '';
        position: absolute;
        width: 0%;
        height: 1.3px;
        background-color: rgba(255, 255, 255, 0.788);
        bottom: 0;
        left: 0;
        transition: 0.3s;
      }
      &:hover::after {
        width: 100%;
        background-color: ${roots.color.LIGTH};
      }
      &:hover {
        color: ${roots.color.LIGTH};
      }
    }
  }
  .controllers {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    align-items: flex-end;
    gap: 0.3rem;
    .statistics {
      display: flex;
      gap: 0.3rem;
      height: 25px;
      span {
        font-size: 0.7rem;
        background: ${roots.color.PRIMARY_X_LIGHT};
        border-radius: 0.4rem;
        display: inline-flex;
        height: 100%;
        padding: 0 1rem;
        align-items: center;
        justify-content: center;
        color: #d0d0d0;
        cursor: default;
      }
     
    }
    .btns-action {
      display: flex;
      gap: 0.3rem;
      height: 25px;
      .like-btn {
        background-color: ${roots.color.ALERT};
        i {
          color: ${roots.color.DARK};
        }
      }
      .btn-to-like-block {
        pointer-events: none;
        cursor: default;
      }
      button {
        all: unset;
        cursor: pointer;
        background: ${roots.color.PRIMARY_X_LIGHT};
        font-size: 0.8rem;
        border-radius: 0.4rem;
        color: #d0d0d0;
        transition: 0.3s;
        position: relative;
        width: 35px;
        height: 100%;
        display: inline-flex;
        align-items: center;
        justify-content: center;
        &:hover {
          background-color: ${roots.color.ALERT};
          i {
            color: ${roots.color.DARK};
          }
          &::after {
            transform: translateY(0);
            opacity: 1;
          }
        }
        &::after {
          position: absolute;
          background-color: ${roots.color.DARK};
          text-align: center;
          padding: 0.2rem .7rem;
          border-radius: 0.2rem;
          font-size: 0.6rem;
          pointer-events: none;
          bottom: -1.9rem;
          left: -1.4rem;
          transform: translateY(-15px);
          opacity: 0;
          transition: 0.2s;
          white-space: nowrap;
        }
      }
    }
  }
`
