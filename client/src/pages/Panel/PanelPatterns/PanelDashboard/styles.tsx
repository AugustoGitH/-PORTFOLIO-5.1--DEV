


import { styled } from 'styled-components';
import roots from '../../../../styles/roots';

export const PainelDashboard = styled.section`
  width: 100%;
  padding: 5rem 0;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  .dash-projects{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
  }
  .dash-types{
    width: 700px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 1rem;
    @media (max-width: ${roots.screens.MD}) {
      width: 100%;
    }
  }
`



