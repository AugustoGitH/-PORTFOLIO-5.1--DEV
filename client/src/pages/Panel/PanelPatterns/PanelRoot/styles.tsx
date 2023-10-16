
import { styled } from "styled-components";
import roots from "../../../../styles/roots";


export const PainelRoot = styled.div`
  width: 100%;
  min-height: 100vh;
  background: ${roots.color.PRIMARY};
  padding: 0 ${roots.layout.PADDING_HORIZONTAL_CONTAINER};
  display: flex;
  justify-content: center;
  .content {
    width: ${roots.layout.MAX_WIDTH_CONTENT};
  }
`