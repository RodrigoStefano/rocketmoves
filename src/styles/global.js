import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body{
        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};
        color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
    }

    body, input, textarea, button{
        font-family: "Roboto Slab", serif;
        font-size: 16px;
    }

    button, a{
        cursor: pointer;
        transition: filter 0.2s;
    }

    a{
        text-decoration: none;
    }

    button:hover, a:hover{
        filter: brightness(0.9);
    }

    input:focus{
        outline: none;
    }
`