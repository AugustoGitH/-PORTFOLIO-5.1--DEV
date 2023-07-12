

import { styled } from 'styled-components';
import roots from '../../../../../../../../styles/roots';
import { presenceAnimation } from '../../../../../../../../animations/presence';

export const ProjectList = styled.div`
  width: 100%;
  max-height: calc(((230px + 3rem) * 3) + (3rem * 3));
  overflow-y: auto;
  overflow-x: hidden;
  margin-top: 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 3rem;
  padding-right: 1rem;
  position: relative;
  @media (max-width: ${roots.screens.XXLG}) {
    gap: 4rem;
  }
  @media (max-width: ${roots.screens.XSM}) {
  }
  &::-webkit-scrollbar {
    width: 3px;
    background-color: #c9abab1a;
    border-radius: 1rem;
  }
  &::-webkit-scrollbar-thumb {
    width: 100%;
    height: 90px;
    border-radius: 1rem;
    background-color: rgba(218, 197, 197, 0.253);
  }
  .project {
    border-bottom: 1.5px solid #ffffff1d;
  }
  .project:last-child {
    border-bottom: none;
  }

`;

export const HelperText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem 0;
  span{
    display: inline-flex;
    align-items: center;
    gap: 1rem;
    background-color: ${roots.color.PRIMARY_X_LIGHT};
    padding: .7rem 1rem;
    border-radius: .6rem;
    font-size: ${roots.font.size.XSM};
    line-height: calc(${roots.font.line_heigth.XSM} - .1rem);
    font-weight: bold;
    text-transform: uppercase;
    max-width: 350px;

    color: #ffffffc1;
    ${presenceAnimation({
  animation: "scale",
  duration: .3
})}
i{
  font-size: 1.6rem;
  color: ${roots.color.ALERT}
}
  }
`