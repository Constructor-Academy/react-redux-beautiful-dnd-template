import {createGlobalStyle} from "styled-components";
import propulsionLogo from "../assets/propulsion.png"

export const GlobalStyle = createGlobalStyle`
    
    body {
        margin: 0;
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
            "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
            sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        background-image:  url(${propulsionLogo});
        background-repeat:repeat;
        background-position:right top;
        background-size: 100px 100px;
        width: 100vw;
        height: 100vh;
    }

    main {
        background: linear-gradient(50deg, rgba(2,0,36,1) 0%, rgba(9,9,121,0.4) 60%, rgba(2,0,36,1) 100%);
    }

`;
