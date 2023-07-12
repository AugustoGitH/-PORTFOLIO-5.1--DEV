import { styled } from "styled-components";

export const ShowCase = styled.ul`
     margin-top: 1rem;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(60px, 1fr));
    gap: .5rem;
    
    li{
      width: 100%;
      height: 40px;
      overflow: hidden;
      border-radius: .4rem;
      background-color: #ffffff2a;
      border: 1px solid #ffffff19;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      i{
        font-size: 1.3rem;
        color: #ffffff93;
      }
      img{
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
    }
`