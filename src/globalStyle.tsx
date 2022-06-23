import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    height: 100vh;
    background-color: rgb(16, 16, 16);
    color: white;
    margin: 0;
    font-family: "Open Sans", Arial, "Helvetica Neue", Helvetica, sans-serif;
  }

  #root {
    height: 100%;
  }
`

export default GlobalStyle
