
import { styled } from "styled-components";
import roots from "../../../styles/roots";


export const InputForEditing = styled.div`
  width: 100%;
  display: flex;
  gap: .4rem;
  border-radius: .3rem;
  overflow: hidden;
  input{
    all: unset;
    background-color: #e3e3e3;
    padding: .5rem 1rem;
    width: 100%;
    color: ${roots.color.DARK};
    transition: .2s;
    &::placeholder{
      color: #000;
    }
    &:focus{
      background-color: ${roots.color.LIGTH};
    }
  }
  button{
    all: unset;
    padding: 0 1rem;
    background: #353535;
    border: 1.3px solid #353535;
    cursor: pointer;
    transition: .2s;
    font-size: .9rem;
    color: #ffffffb4;
    &:hover{
      color:${roots.color.LIGTH};
    }
  }

`