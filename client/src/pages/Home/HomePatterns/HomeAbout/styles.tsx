
import { styled } from 'styled-components';
import roots from '../../../../styles/roots';

export const HomeAbout = styled.section`
  width: 400px;
  min-height: 100%;
  border-radius: 1.5rem;
  flex: none;
  color: ${roots.color.DARK};
  background-color: ${roots.color.LIGTH};
  padding: 1rem 2rem 6rem 2rem;
  position: relative;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-family: ${roots.font.family.ALEGREYA};
  box-shadow: ${roots.layout.BOX_SHADOW};
  @media (max-width: ${roots.screens.XLG}) {
    width: 100%;
    border-radius: 0;
  }
  @media (max-width: ${roots.screens.XXSM}) {
    padding: 1rem 1rem 6rem 1rem;
  }
`;

export const ImageProfile = styled.div`
  width: 190px;
  height: 190px;
  border-radius: 50%;
  overflow: hidden;
  padding: 0.3rem;
  img {
    width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
  }
`;

export const HomeAboutDescription = styled.article`
  margin-top: 2rem;
  width: 100%;
  h1 {
    font-size: calc(${roots.font.size.MD});
    line-height: ${roots.font.size.MD};
  }
  h3 {
    font-size: ${roots.font.size.SM};
    color: ${roots.color.DARK_LIGHT};
  }
  p {
    margin-top: 1rem;
    font-size: ${roots.font.size.SM};
  }
  nav {
    margin-top: 20px;
    display: flex;
    gap: 1rem;
    a {
      border: 1.3px solid ${roots.color.DARK};
      font-size: ${roots.font.size.SM};
      padding: 0.4rem 1rem;
      border-radius: 0.2rem;
      cursor: pointer;
      transition: 0.2s;
      display: flex;
      align-items: center;
      gap: .4rem;
      &:hover {
        background-color: ${roots.color.DARK};
        color: ${roots.color.LIGTH};
      }
    }
  }
`;

export const InfoProjectsGit = styled.section`
  margin-top: 5rem;
  width: 100%;
  display: flex;
  align-items: center;
  h2 {
    line-height: 1.3rem;
  }
  span {
    flex: none;
    background-color: ${roots.color.DARK};
    display: inline-flex;
    align-items: center;
    justify-content: center;
    color: ${roots.color.LIGTH};
    font-size: 0.9rem;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 0.6rem;
  }
`;

export const InfoPercentTechs = styled.section`
  margin-top: 5rem;
  width: 100%;
  .title {
    display: flex;
    align-items: center;
    span {
      flex: none;
      background-color: ${roots.color.DARK};
      display: inline-flex;
      align-items: center;
      justify-content: center;
      color: ${roots.color.LIGTH};
      font-size: 0.9rem;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      margin-right: 0.6rem;
    }
    h2 {
      line-height: 1.3rem;
    }
  }
`;

export const ContactMe = styled.section`
  width: 100%;
  margin-top: 5rem;
  h3 {
    font-size: ${roots.font.size.SM};
    color: ${roots.color.DARK_LIGHT};
  }
  h1 {
    font-size: ${roots.font.size.MD};
    line-height: ${roots.font.size.MD};
  }
  p {
    margin-top: 1rem;
    font-size: ${roots.font.size.SM};
  }
  ul {
    margin-top: 1rem;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 0.6rem;
    li {
      a {
        color: ${roots.color.DARK};
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1.3rem;
        cursor: pointer;
        span {
          @media (min-width: ${roots.screens.XXSM}) {
            transition: transform 0.3s ease-out, opacity 0.2s 0.2s;
          }
        }
        &:hover > span {
          @media (min-width: ${roots.screens.XXSM}) {
            transform: translateX(43px);
            opacity: 0;
          }
        }
        &:hover > i {
          @media (min-width: ${roots.screens.XXSM}) {
            transform: translateX(-25px) scale(1.6);
          }
        }
        i {
          font-size: 1.2rem;
          margin-left: 0.4rem;
          transition: transform 0.2s;
          background-color: ${roots.color.LIGTH};
          position: relative;
          &::after {
            content: '';
            position: absolute;
            background-color: ${roots.color.LIGTH};
            height: 100%;
            width: 30px;
            @media (max-width: ${roots.screens.XXSM}) {
              display: none;
            }
          }
        }
      }
    }
  }
`;

export const TextCopyRigth = styled.p`
  width: 100%;
  margin-top: 5rem;
  text-align: center;
  line-height: 1rem;
`;
