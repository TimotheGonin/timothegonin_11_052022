import styled from 'styled-components'
import logo from '../../assets/logo-min.svg'

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ STYLES                                                                  │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const StyledFooterWrapper = styled.footer`
  background-color: black;
  height: 20.9rem;
  margin-top: 4.3rem;
  color: white;
  display: flex;
  justify-content: center;
  width: 100%;
  /* flex-grow: 0; */
`
const StyledFooterContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  img {
    align-self: center;
    width: 12.2rem;
    height: 3.94rem;
  }
  h4 {
    font-weight: 500;
    font-size: 24px;
  }
  @media screen and (max-width: 500px) {
    h4 {
      font-size: 1.2rem;
    }
  }
`

/* 
  ┌─────────────────────────────────────────────────────────────────────────┐
  │ COMPONENT                                                               │
  └─────────────────────────────────────────────────────────────────────────┘
 */
const Footer = () => {
  return (
    <StyledFooterWrapper>
      <StyledFooterContent>
        <img src={logo} alt="Kasa logo" />
        <h4>© 2020 Kasa. All rights reserved</h4>
      </StyledFooterContent>
    </StyledFooterWrapper>
  )
}
export default Footer
