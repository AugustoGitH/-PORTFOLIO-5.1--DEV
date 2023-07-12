
import styled from "styled-components";
import roots from "../../../styles/roots";
import { presenceAnimation } from "../../../animations/presence";

interface ICheckboxesProps {
  error: boolean
}

export const Checkboxes = styled.div<ICheckboxesProps>`
  width: 100%;
  p{
    color: ${({ error }) => error ? roots.color.DANGER : roots.color.ALERT}; ;
    font-weight: bold;
    font-size: ${roots.font.size.SM}
  }
  .check-boxes-list{
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
    gap: 1rem;
    margin-top: .7rem;
  };
  .helper-text{
    font-size: ${roots.font.size.XXSM};
    color: ${roots.color.DANGER};
    text-transform: uppercase;
    font-weight: bold;
    ${presenceAnimation({
  animation: "opacity",
  duration: .3
})
  }
  }

`

interface ICheckboxProps {
  error: boolean
}

export const Checkbox = styled.div<ICheckboxProps>`

  .cbx {
    -webkit-user-select: none;
    user-select: none;
    cursor: pointer;
    padding: 6px 8px;
    border-radius: 6px;
    overflow: hidden;
    transition: all 0.2s ease;
    display: inline-block;
  }

  .cbx:not(:last-child) {
    margin-right: 6px;
  }

  .cbx:hover {
    background: rgba(130, 101, 20, 0.06);
  }

  .cbx span {
    float: left;
    vertical-align: middle;
    transform: translate3d(0, 0, 0);
  }

  .cbx span:first-child {
    position: relative;
    width: 18px;
    height: 18px;
    border-radius: 4px;
    transform: scale(1);
    border: 1px solid ${({ error }) => error ? roots.color.DANGER : "#cccfdb"};
    transition: all 0.2s ease;
    box-shadow: 0 1px 1px rgba(0,16,75,0.05);
  }

  .cbx span:first-child svg {
    position: absolute;
    top: 3px;
    left: 2px;
    fill: none;
    stroke: #fff;
    stroke-width: 2;
    stroke-linecap: round;
    stroke-linejoin: round;
    stroke-dasharray: 16px;
    stroke-dashoffset: 16px;
    transition: all 0.3s ease;
    transition-delay: 0.1s;
    transform: translate3d(0, 0, 0);
  }

  .cbx span:last-child {
    padding-left: 8px;
    line-height: 18px;
    color: ${({ error }) => error ? roots.color.DANGER : roots.color.LIGTH};
    font-weight: bold;
  }

  .cbx:hover span:first-child {
    border-color:${roots.color.ALERT};
  }

  .inp-cbx {
    position: absolute;
    visibility: hidden;
  }

  .inp-cbx:checked + .cbx span:first-child {
    background: ${({ error }) => error ? roots.color.DANGER : roots.color.ALERT};
    border-color:${({ error }) => error ? roots.color.DANGER : roots.color.ALERT};
    animation: wave-4 0.4s ease;
  }

  .inp-cbx:checked + .cbx span:first-child svg {
    stroke-dashoffset: 0;
  }

  .inline-svg {
    position: absolute;
    width: 0;
    height: 0;
    pointer-events: none;
    user-select: none;
  }

  @media screen and (max-width: ${roots.screens.SM}) {
    .cbx {
      width: 100%;
      display: inline-block;
    }
  }

  @-moz-keyframes wave-4 {
    50% {
      transform: scale(0.9);
    }
  }

  @-webkit-keyframes wave-4 {
    50% {
      transform: scale(0.9);
    }
  }

  @-o-keyframes wave-4 {
    50% {
      transform: scale(0.9);
    }
  }

  @keyframes wave-4 {
    50% {
      transform: scale(0.9);
    }
  }


`