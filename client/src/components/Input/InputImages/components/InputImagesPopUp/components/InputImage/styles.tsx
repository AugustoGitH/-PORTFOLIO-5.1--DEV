
import { styled } from 'styled-components';
import roots from '../../../../../../../styles/roots';
import { presenceAnimation } from '../../../../../../../animations/presence';

export const InputImage = styled.div`
  width: 100%;
  label {
    background-color: ${roots.color.PRIMARY_LIGHT};
    display: flex;
    width: 100%;
    height: 300px;
    border-radius: 0.6rem;

    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    cursor: default;
    @media (max-width: 530px) {
      height: 200px;
    }
    &:hover .image-icon {
      transform: scale(1.3);
    }
    &:hover span {
      color: #fff;
    }

    img {
      width: 100%;
      height: 100%;
      position: absolute;
      object-fit: contain;
      ${presenceAnimation({
  animation: 'scale',
  duration: 0.3
})};
    }

    .buttons-edit {
      position: absolute;
      right: 1rem;
      top: 1rem;
      display: flex;
      flex-direction: column;
      gap: 0.5rem;

      .delete-image,
      .favorite-image {
        all: unset;
        font-size: 0.9rem;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        background-color: #373736;
        color: #000000a2;
        cursor: pointer;
        ${presenceAnimation({
  animation: 'scale',
  duration: 0.3
})};
        transition: 0.2s;
        &:hover {
          color: ${roots.color.ALERT};
          i {
            transform: scale(1.1);
          }
        }
      }
    }
    .image-icon {
      color: #ffffffa3;
      transition: 0.2s;
      font-size: 3rem;
      margin-bottom: 1rem;
    }
    span {
      cursor: pointer;
      transition: 0.2s;
      background-color: #ffffff1e;
      padding: 0.4rem 1rem;
      border-radius: 0.3rem;
      color: #ffffffa4;
      font-size: 0.8rem;
    }
  }
  input {
    display: none;
  }
`;
