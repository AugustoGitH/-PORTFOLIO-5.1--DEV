import roots from "@/styles/roots"
import styled from "styled-components"

export const AccordionsProfessionalExperiences = styled.div`
  width: 100%;
  display: flex;
  /* align-items: flex-start; */
  gap: 1.5rem;
  @media (max-width: 730px) {
    gap: 1rem;
  }
  .line-progress-exp {
    width: 2px;
    background-color: ${roots.color.PRIMARY_X_LIGHT};
    position: relative;
  }
  .accordions-content {
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 1rem;
  }
`

interface IAccordionProps {
  isOpen: boolean
}

export const AccordionProfessionalExperiences = styled.li<IAccordionProps>`
  width: 100%;
  display: flex;
  gap: 1rem;
  align-items: flex-start;
  cursor: pointer;
  position: relative;
  @media (max-width: 730px) {
    gap: .5rem;
  }
  &:hover img,
  &:hover .accordion-content span {
    opacity: 1;
  }
  &:hover::after {
    background-color: ${roots.color.ALERT};
  }
  &::after {
    content: '';
    position: absolute;
    top: 1rem;
    left: calc((1.5rem + 8px) * -1);
    width: 15px;
    height: 15px;
    border-radius: 50%;
    transition: 0.2s;
    background-color: ${({ isOpen }) => (isOpen ? roots.color.ALERT : roots.color.DARK_LIGHT)};
    @media (max-width: 730px) {
      top: .8rem;
      left: calc((1rem + 8px) * -1);
    }
  }
  .icon-arrow,
  img,
  .accordion-content span {
    opacity: ${({ isOpen }) => (isOpen ? '1' : '.8')};
    transition: 0.2s;
  }
  .icon-arrow {
    position: absolute;
    top: 0;
    transform: rotate(${({ isOpen }) => (isOpen ? '180deg' : '0deg')});
    margin: auto;
    right: 0;
    font-size: 1.5rem;
    transition: 0.2s;
  }
  img {
    width: 45px;
    height: 45px;
    object-fit: cover;
    border-radius: 50%;
    flex: none;
    @media (max-width: 730px) {
      width: 35px;
      height: 35px;
    }
  }
  .accordion-content {
    width: 100%;
    span {
      display: block;
    }
    .summary {
      width: 100%;
      padding-right: 2rem;
      span.title {
        font-size: ${roots.font.size.SM};
        font-weight: bold;
      }
      span.company-name {
        font-size: ${roots.font.size.XSM};
      }
    }
    .detail {
      width: 100%;
      overflow: hidden;
      height: ${({ isOpen }) => (isOpen ? '220px' : '0px')};
      transition: height 0.2s;
      @media (max-width: 730px) {
        height: ${({ isOpen }) => (isOpen ? '300px' : '0px')};
      }
      @media (max-width: 460px) {
        height: ${({ isOpen }) => (isOpen ? '400px' : '0px')};
      }
      span.duration-of-work {
        font-size: ${roots.font.size.XSM};
        opacity: 0.7;
      }
      span.locale-of-work {
        font-size: ${roots.font.size.XSM};
        opacity: 0.7;
      }
      p {
        font-size: ${roots.font.size.XSM};
      }
      .technologies-used {
        margin-top: 0.5rem;
        display: flex;
        gap: 0.5rem;
        flex-wrap: wrap;
        li {
          font-size: ${roots.font.size.XXSM};
          background-color: ${roots.color.PRIMARY_X_LIGHT};
          padding: 0.2rem 0.5rem;
          border-radius: 0.3rem;
          text-transform: uppercase;
          opacity: 0.9;
        }
      }
    }
  }
`
