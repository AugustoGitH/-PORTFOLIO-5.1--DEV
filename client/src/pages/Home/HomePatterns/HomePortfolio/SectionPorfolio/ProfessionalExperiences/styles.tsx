import roots from '@/styles/roots'
import styled from 'styled-components'

export const ProfessionalExperiences = styled.div`
  background-color: ${roots.color.PRIMARY_LIGHT};
  margin-top: 7rem;
  border-radius: 1.5rem;
  padding: 3rem 2rem 2rem 2rem;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  box-shadow: ${roots.layout.BOX_SHADOW};
  position: relative;
  @media (max-width: 460px) {
    padding: 4rem 2rem 2rem 2rem;
  }
  h1 {
    position: absolute;
    top: -1rem;
    margin-bottom: 1rem;
    text-transform: capitalize;
    text-align: center;
    line-height: 2rem;
    font-size: ${roots.font.size.XLG};
  }
`

