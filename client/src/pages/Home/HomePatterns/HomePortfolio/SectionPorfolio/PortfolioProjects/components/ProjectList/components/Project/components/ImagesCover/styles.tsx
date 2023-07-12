

import { styled } from 'styled-components';
import roots from '../../../../../../../../../../../../styles/roots';

export const ImagesCover = styled.div`
  width: 300px;
  height: 100%;
  @media (max-width: ${roots.screens.XXLG}) {
    width: 100%;
    height: 60%;
  }
  @media (max-width: ${roots.screens.XLG}) {
    height: 70%;
  }
  @media (max-width: ${roots.screens.LG}) {
    height: 60%;
  }

  @media (max-width: ${roots.screens.XSM}) {
    height: 50%;
  }
  @media (max-width: ${roots.screens.XXSM}) {
    height: 47%;
  }
  .cover {
    width: 100%;
    height: 75%;
    border-radius: 0.5rem;
    background-color: ${roots.color.PRIMARY_X_LIGHT};
    border-radius: 1rem;
    overflow: hidden;
    transition: 0.2s;
    cursor: pointer;
    img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
  .images-project {
    width: 100%;
    height: 25%;
    padding-top: 0.7rem;
    display: flex;
    gap: 0.5rem;
    .image-empty {
      cursor: default;
      color: #ffffffa4;
      &::after {
        display: none;
      }
    }
    li {
      width: 100%;
      height: 100%;
      background-color: ${roots.color.PRIMARY_X_LIGHT};

      border-radius: 0.4rem;
      transition: 0.2s;
      cursor: pointer;
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;
      overflow: hidden;
      &::after {
        content: '';
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-color: #29292730;
        backdrop-filter: blur(0.4px);
        transition: 0.2s;
      }
      &:hover {
        &::after {
          opacity: 0;
        }
        &::before {
          transform: translateY(0);
          opacity: 1;
        }
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
  }
`;
