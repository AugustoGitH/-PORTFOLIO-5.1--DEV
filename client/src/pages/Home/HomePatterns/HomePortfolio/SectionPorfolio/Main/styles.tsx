
import { styled } from 'styled-components';
import roots from '../../../../../../styles/roots';

export const Main = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  @media (max-width: ${roots.screens.XLG}) {
    flex-direction: column-reverse;
  }
  @media (max-width: ${roots.screens.LG}) {
    flex-direction: row-reverse;
  }
  @media (max-width: ${roots.screens.SM}) {
    flex-direction: column-reverse;
  }
`;

export const TechPresentation = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  text-align: end;
  @media (max-width: ${roots.screens.XLG}) {
    width: 100%;
    align-items: flex-start;
    text-align: start;
    padding-left: 3rem;
  }
  @media (max-width: ${roots.screens.LG}) {
    width: auto;
    padding-left: 0;
  }
  @media (max-width: ${roots.screens.SM}) {
    width: 100%;
    align-items: flex-start;
    text-align: start;
  }
  @media (max-width: ${roots.screens.SM}) {
    padding: 0 2rem;
  }
  h3 {
    font-size: ${roots.font.size.SM};
    text-transform: uppercase;
    display: flex;
    align-items: center;
    justify-content: center;
    i {
      color: ${roots.color.ALERT};
      font-size: 1.4rem;
      margin-left: 0.4rem;
    }
  }
  article {
    margin: 3rem 0;
    @media (max-width: ${roots.screens.XSM}) {
      margin: 1.5rem 0;
    }
    h2 {
      font-size: ${roots.font.size.SM};
      color: ${roots.color.ALERT};
      font-weight: bold;
    }
    h1 {
      margin-top: -0.1rem;
      font-size: ${roots.font.size.XXLG};
      line-height: 3.4rem;
      position: relative;
      width: 100%;
      #sobrenome-ocult {
        display: none;
        @media (max-width: ${roots.screens.XLG}) {
          display: inline-block;
        }
        @media (max-width: ${roots.screens.LG}) {
          display: none;
        }
        @media (max-width: ${roots.screens.SM}) {
          display: inline-block;
        }
        @media (max-width: ${roots.screens.XSM}) {
          display: none;
        }
      }
    }
  }
  .skills {
    p {
      font-weight: bold;
      font-size: ${roots.font.size.SM};
    }
    ul {
      display: flex;
      justify-content: flex-end;
      align-items: center;
      margin-top: 0.4rem;
      gap: 1.3rem;
      li {
        text-align: end;
        border: 1.5px solid rgba(255, 255, 255, 0.541);
        padding: 0.3rem 0.9rem;
        border-radius: 0.5rem;
        font-size: ${roots.font.size.SM};
        color: rgba(255, 255, 255, 0.775);
        position: relative;
        cursor: default;
        transition: 0.3s;
        @media (max-width: ${roots.screens.XLG}) {
          text-align: start;
        }
        &::after {
          content: '';
          position: absolute;
          width: 3px;
          height: 20px;
          background-color: #201c1c;
          top: 50%;
          transform: translateY(-50%);
          transition: 0.3s;
          @media (max-width: ${roots.screens.XXLG}) {
            right: -2px;
          }
          @media (min-width: ${roots.screens.XXLG}) {
            left: -2px;
          }
        }
        &:hover {
          border: 1.5px solid ${roots.color.LIGHT};
          color: ${roots.color.LIGHT};
        }
        &:hover::after {
          height: 0%;
        }
      }
    }
  }
  a {
    all: unset;
    display: inline-flex;
    align-items: center;
    background-color: ${roots.color.ALERT};
    padding: 0.7rem 1.9rem 0.7rem 1rem;
    color: ${roots.color.DARK};
    border-radius: 1.3rem;
    font-weight: bold;
    cursor: pointer;
    font-size: ${roots.font.size.SM};
    text-transform: capitalize;
    margin-top: 3rem;
    border: 1.5px solid ${roots.color.ALERT};
    transition: 0.3s;
    position: relative;
    &:hover {
      background-color: transparent;
      color: ${roots.color.ALERT};
    }
    i {
      margin-right: 1rem;
    }
  }
`;

export const ProfileImage = styled.div`
  overflow: hidden;
  border-bottom-left-radius: 150px;
  border-bottom-right-radius: 150px;
  padding-top: 4rem;
  margin-left: 10%;
  flex: none;
  @media (max-width: ${roots.screens.XLG}) {
    margin-left: 0;
    margin-bottom: 2rem;
  }
  @media (max-width: ${roots.screens.LG}) {
    margin-right: 10%;
    margin-bottom: 0;
  }
  @media (max-width: ${roots.screens.SM}) {
    margin-right: 0;
    margin-bottom: 2rem;
  }
  .profile-content {
    width: 300px;
    height: 300px;
    background-color: ${roots.color.ALERT};
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    img {
      width: auto;
      height: 120%;
      margin-top: -3rem;
    }
  }
`;
