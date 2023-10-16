
import { styled } from 'styled-components';
import { presenceAnimation } from '../../../../../../animations/presence';
import roots from '../../../../../../styles/roots';

export const ListRepos = styled.ul`
  width: 800px;
  max-height: calc((140px * 2) + 1rem);
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 2rem;
  padding-right: 0.5rem;
  border-radius: 0.4rem;
  @media (max-width: ${roots.screens.MD}) {
    width: 100%;
  }
`;

export const Repository = styled.li`
  width: 100%;
  min-height: 140px;
  border-radius: 0.5rem;
  padding: 1rem;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  margin-bottom: 1rem;
  background-color: ${roots.color.PRIMARY_LIGHT};
  ${presenceAnimation({
  animation: 'translateRight',
  duration: 0.3
})};
  @media (max-width: ${roots.screens.XXSM}) {
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  }
  p {
    color: #ffffffd3;
    span {
      color: ${roots.color.ALERT};
    }
    .button-copy-id {
      all: unset;
      width: 25px;
      height: 25px;
      background-color:  ${roots.color.ALERT};
      border-radius: 50%;
      color:  ${roots.color.DARK};
      display: inline-flex;
      font-size: 0.9rem;
      align-items: center;
      justify-content: center;
      margin-left: 1rem;
      cursor: pointer;
      box-shadow: 2px 2px #918f06;
      transition: 0.2s;
      position: relative;
      &::after {
        content: 'Copiar id';
        position: absolute;
        width: 60px;
        text-align: center;
        padding: 0.2rem 0;
        font-size: 0.6rem;
        background-color:  ${roots.color.DARK};
        color:  ${roots.color.LIGHT};
        border-radius: 0.2rem;
        bottom: -1rem;
        left: 1.4rem;
        transform: translateY(-20px);
        opacity: 0;
        transition: 0.2s;
        pointer-events: none;
      }
      &:hover {
        box-shadow: none;
        transform: translate(2px, 2px);
        &::after {
          transform: translateY(0);
          opacity: 1;
        }
      }
    }
    .copy {
      &::after {
        width: 65px;
        content: 'Id copiado!';
      }
    }
  }
`;

export const Loader = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
`;

export const NotFoundRepos = styled.li`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5rem 0;
  ${presenceAnimation({
  animation: 'scale',
  duration: 0.3
})};
  p {
    background-color: ${roots.color.PRIMARY_LIGHT};
    padding: 0.5rem 1rem;
    border-radius: 0.4rem;
    color: #ffffffd1;
  }
`;
