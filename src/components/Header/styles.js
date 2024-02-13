import styled from "styled-components";
import theme from "../../styles/theme";

export const Container = styled.div`
    grid-area: "header";
    width: 100%;
    height: 116px;

    display: flex;
    padding: 30px 123px;
    gap: 64px;
    align-items: center;
    justify-content: center;

    border-bottom-width: 1px;
    border-bottom-style: solid;
    border-bottom-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    h1{
        font-size: 24px;
        color: ${({ theme }) => theme.COLORS.TRIRD_COLOR};
    }

    .user{
        display: flex;
        min-width: 200px;
        align-items: center;
        justify-content: center;
        > div{
            display: flex;
            flex-direction: column;
            align-items: end;

            strong{
                font-size: 14px;
            }

            a{
                font-size: 14px;
                color: ${({ theme }) => theme.COLORS.GRAY_300};
            }
        }
        > img{
            width: 64px;
            height: 64px;
            border-radius: 50%;
            margin-left: 9px;
        }
    }
`