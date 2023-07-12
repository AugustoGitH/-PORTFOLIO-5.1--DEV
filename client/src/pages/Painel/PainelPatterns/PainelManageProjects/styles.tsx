
import { styled } from "styled-components";
import roots from "../../../../styles/roots";
import { presenceAnimation } from "../../../../animations/presence";


export const PainelManageProjects = styled.section`
width: 100%;
  padding: 5rem 0;
  .projects{
    margin-top: 3rem;
    display: flex;
    flex-direction: column;
    gap: 3rem;
    .project{
      border-bottom: 1px solid #ffffff46;
    }
  }

`

export const HelperText = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  padding: 2rem;
  span{
    background-color: ${roots.color.PRIMARY_LIGHT};
    padding: 1rem;
    display: inline-flex;
    gap: .6rem;
    align-items: center;
    border-radius: .5rem;
    color: #ffffffb0;
    ${presenceAnimation({
  animation: "scale",
  duration: .3
})
  }
  i{
    color: ${roots.color.ALERT}
  }
  }

`
