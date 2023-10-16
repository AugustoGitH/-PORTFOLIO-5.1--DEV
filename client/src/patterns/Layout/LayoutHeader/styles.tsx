
import { styled } from 'styled-components';
import roots from '../../../styles/roots';





export const LayoutHeader = styled.header`
  background-color: ${roots.color.PRIMARY};
  padding: 0 4rem;
  display: flex;
  height: 60px;
  justify-content: center;
  align-items: center;
  position: sticky;
  top: 0;
  z-index: ${roots.orders.SUP};
  @media (max-width:  ${roots.screens.XSM}) {
    padding: 0 ${roots.layout.PADDING_HORIZONTAL_CONTAINER};
  }
  .content {
    width: ${roots.layout.MAX_WIDTH_CONTENT};
    display: flex;
    justify-content: space-between;
    align-items: center;
    a {
      all: unset;
      color: ${roots.color.LIGHT};
      h1 {
        font-size: ${roots.font.size.SM};
        letter-spacing: 0.1rem;
        cursor: pointer;
        position: relative;
        text-transform: uppercase;
        line-height: calc(${roots.font.line_heigth.SM} - .3rem);
        &::before {
          content: '';
          position: absolute;
          height: 100%;
          left: -1.3rem;
          width: 3px;
          background-color: ${roots.color.ALERT};
          border-radius: 0.3rem;
        }
      }
    }
    nav {
      display: flex;
      align-items: center;
      justify-content: center;
      gap: .6rem;
      a,
      button {
        all: unset;
        display: inline-block;
        position: relative;
        background-color: ${roots.color.PRIMARY_LIGHT};
        font-size: 1.3rem;
        width: 40px;
        height: 40px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        transition: 0.3s;
        i {
          color: ${roots.color.ALERT};
        }
        &:hover {
          border-radius: 10%;
        }
      }
    }
  }
`;
