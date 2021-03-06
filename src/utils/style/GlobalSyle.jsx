import { createGlobalStyle } from 'styled-components'

const StyledGlobalStyle = createGlobalStyle`
  *{
  font-family: 'Montserrat', sans-serif;
  }
  *,
  &::before,
  &::after {
      box-sizing: border-box;
      padding: 0;
      margin: 0;
  }
  html{
    font-size:62.5%;
  }
  body{
    display: flex;
    justify-content: center;

    #root{
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      min-height:100vh;
      & > * {
        max-width: 124rem;
        width: 100%;
      }
      main{
        flex-grow: 1;
      }
      footer {
        max-width: inherit;
      }
    }
  }

`
export default StyledGlobalStyle
