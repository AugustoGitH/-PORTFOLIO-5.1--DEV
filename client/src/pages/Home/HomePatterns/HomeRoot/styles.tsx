
import { styled } from "styled-components";
import roots from "../../../../styles/roots";



export const HomeRoot = styled.div`
width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  padding: 2rem 0;
  background-color: ${roots.color.PRIMARY};
  @media (max-width: ${roots.screens.XLG}) {
    padding: 0;
    padding-top: 2rem;
    align-items: flex-start;
  }
  .content {
    width: ${roots.layout.MAX_WIDTH_CONTENT};
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    @media (max-width: ${roots.screens.XLG}) {
      flex-direction: column-reverse;
    }
  }
`