import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
        font-size: 60%;
        height: 100vh;
        width: 100vw;
    }

    #wrapper {
        height: 100%;
        width: 100%;
    }
`;

export default GlobalStyle;
