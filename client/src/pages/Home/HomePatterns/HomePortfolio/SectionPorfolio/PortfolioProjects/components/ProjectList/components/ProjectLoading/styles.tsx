
import { styled } from 'styled-components';
import roots from '../../../../../../../../../../styles/roots';

export const ProjectLoading = styled.li`
  flex: none;
  width: 100%;
  height: calc(230px + 3rem);
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  padding-bottom: 3rem;
  gap: 1.5rem;
  cursor: default;
  @media (max-width: ${roots.screens.XXLG}) {
    flex-direction: column;
    height: calc(550px + 3rem);
  }
  @media (max-width: ${roots.screens.XLG}) {
    height: calc(580px + 3rem);
  }
  @media (max-width: ${roots.screens.LG}) {
    height: calc(660px + 3rem);
  }
  @media (max-width: ${roots.screens.XSM}) {
    height: calc(460px + 3rem);
  }
  .gradient {
  animation-duration: 5s;
  animation-fill-mode: forwards;
  animation-iteration-count: infinite;
  animation-name: placeHolderShimmer;
  animation-timing-function: linear;
  background: ${roots.color.PRIMARY_X_LIGHT};
  background: linear-gradient(to right, ${roots.color.PRIMARY_X_LIGHT} 0%, rgb(74, 73, 73) 50%, ${roots.color.PRIMARY_X_LIGHT} 100%);
  background-size: 200% 100%;
  position: relative;
}

@keyframes placeHolderShimmer {
  0% {
    background-position: -200% 0;
  }
  50% {
    background-position: 200% 0;
  }
  100% {
    background-position: 200% 0;
  }
}
`;

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
  .cover {
    width: 100%;
    height: 75%;
    border-radius: 0.5rem;
    background-color: ${roots.color.PRIMARY_X_LIGHT};
    border-radius: 1rem;
    overflow: hidden;
  }
  .images-project {
    width: 100%;
    height: 25%;
    padding-top: 0.7rem;
    display: flex;
    gap: 0.5rem;
    li {
      width: 100%;
      height: 100%;
      background-color: ${roots.color.PRIMARY_X_LIGHT};

      border-radius: 0.4rem;
    }
  }
`;

export const Description = styled.div`
  width: calc(100% - 300px);
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
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
  .technologies {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 0.7rem;
    text-transform: uppercase;
    flex-wrap: wrap;
    gap: 0.4rem;
    li {
      width: 50px;
      height: 25px;
      background-color: ${roots.color.PRIMARY_X_LIGHT};
      padding: 0.3rem 0.6rem;
      font-size: ${roots.font.size.XXSM};
      border-radius: 0.3rem;
    }
  }
  .h4-line {
    display: inline-block;
    background-color: ${roots.color.PRIMARY_X_LIGHT};
    width: 100px;
    height: 10px;
    margin-top: 0.7rem;
  }
  .h2-line {
    display: inline-block;
    background-color: ${roots.color.PRIMARY_X_LIGHT};
    width: 290px;
    height: 30px;
    margin-top: 0.5rem;
  }
  .nav {
    margin-top: 2.3rem;
    display: flex;
    gap: 1rem;
    li {
      width: 80px;
      height: 10px;
      background-color: ${roots.color.PRIMARY_X_LIGHT};
    }
  }
  .statistics {
    position: absolute;
    bottom: 0;
    right: 0;
    display: flex;
    justify-content: flex-end;
    gap: 0.5rem;
    li {
      background-color: ${roots.color.PRIMARY_X_LIGHT};
      height: 20px;
      border-radius: 0.4rem;
    }
    .button {
      width: 30px;
    }
    .text {
      width: 70px;
    }
  }
`;
