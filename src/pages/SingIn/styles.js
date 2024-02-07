import styled from "styled-components";

import background from "../../assets/background.png"

export const Container = styled.div`
    height: 100vh;
    display: flex;
    align-items: stretch;
`

export const Form = styled.form`
    padding: 0 136px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    > div{
        h1{
            color: ${({ theme }) => theme.COLORS.TRIRD_COLOR};
            font-size: 48px;
        }
        p{
            color: ${({ theme }) => theme.COLORS.GRAY_100};
            font-size: 14px;
        }
        h2{
            font-size: 24px;
            font-weight: 500;
            margin: 48px 0;
        }
    }

    > a{
        color: ${({ theme }) => theme.COLORS.TRIRD_COLOR};
        margin-top: calc(42px - 24px);
    }
`

export const Background = styled.div`
    flex: 1;
    background: url(${background}) no-repeat center center;
    background-size: cover;
`