
import { styled } from 'styled-components';
import roots from '../../../../../../../../styles/roots';

export const FiltersTypeProject = styled.ul`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 0.5rem;
  li {
    height: 40px;
    text-transform: capitalize;
    cursor: pointer;
    font-size: ${roots.font.size.SM};
    padding: 00 1.4rem;
    transition: 0.3s;
    border-radius: 0.6rem;
    background-color: rgb(68, 67, 67);
    font-weight: bold;
    color: rgba(255, 255, 255, 0.815);
    display: flex;
    align-items: center;
    justify-content: center;
    &:hover {
      background-color: ${roots.color.ALERT};
      color: ${roots.color.DARK};
    }
  }
  .mark-button-filter {
    background-color: ${roots.color.ALERT};
    color: ${roots.color.DARK};
  }
`;
