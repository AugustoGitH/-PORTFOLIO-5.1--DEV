
import { styled } from "styled-components";
import roots from "../../../../../../styles/roots";


export const InputSearch = styled.div`
margin-top: 3rem;
  width: 400px;
  line-height: .5rem;
  @media (max-width: ${roots.screens.XSM}) {
    width: 100%;
  }
  label{
    color: #ffffffd3;
    font-size:  ${roots.font.size.SM};
    color:  ${roots.color.ALERT};
    font-weight: bold;
  }
  input{
    width: 100%;
    font-size:  ${roots.font.size.SM};
    padding: .6rem 1rem;
    outline: none;
    margin-top: .5rem;
    border-radius: .4rem;
    transition: .2s;
    font-family: ${roots.font.family.ALEGREYA};
    background: #dfdede;
    &:focus{
      background: ${roots.color.LIGTH};
    }
  }

`