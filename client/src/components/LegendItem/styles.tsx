
import styled from "styled-components";
import roots from "../../styles/roots";
import { presenceAnimation } from "../../animations/presence";
import { TSizeLegend } from "./types";


interface ILegendItemProps {
  widthLegend?: number,
  sizeLegend: TSizeLegend
}


const sizesLegend = {
  sm: ".7rem",
  md: ".8rem",
  lg: "1.1rem"
}

export const LegendItem = styled.div<ILegendItemProps>`
  display: inline-flex;
  width: auto;
  position: relative;
  .legend-text{
    ${({ widthLegend }) => widthLegend ? `
      width: ${widthLegend}px;
    ` : ""}
    position: absolute;
    font-weight: bold;
    background: ${roots.color.DARK};
    cursor: default;
    padding: .4rem 1rem;
    border-radius: .3rem;
    color: ${roots.color.LIGTH};
    text-align: center;
    font-size: ${({ sizeLegend }) => sizesLegend[sizeLegend as TSizeLegend]};
    z-index: 20;
    white-space: nowrap;
    ${presenceAnimation({
  animation: "scale",
  duration: .4
})
  }
  }
`