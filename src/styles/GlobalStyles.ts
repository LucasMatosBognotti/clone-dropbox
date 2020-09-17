import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *, button, input {
    font-family: 'Roboto', sans-serif;
  }

  :root {
    --color-primary: #0D2F81;
    --color-secondary: #FFE7AA;
    --color-tertiary: #FFF;
    --color-quaternary: #000;
    --color-blue: #0061FF;
    --color-border: #BDC4C9;
  }
`;
