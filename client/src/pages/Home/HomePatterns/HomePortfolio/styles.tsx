
import { styled } from 'styled-components';
import roots from '../../../../styles/roots';

export const HomePortfolio = styled.div`
  width: calc(100% - 400px);
  padding: 0 2rem;
  color: ${roots.color.LIGTH};
  @media (max-width: ${roots.screens.XLG}) {
    width: 100%;
    padding: 0rem 2rem 2rem 2rem;
  }
  @media (max-width: ${roots.screens.SM}) {
    width: 100%;
    padding: 0rem 0.5rem 0.5rem 0.5rem;
  }
`;
