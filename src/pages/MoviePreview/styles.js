import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-rows: 116px 85px auto;
    grid-template-areas: 
    "header"
    "BackPage"
    "Content"
    ;
`

export const BackPage = styled.div`
    grid-area: "BackPage";
    padding: 0 120px;
    display: flex;
    align-items: center;

    > a{
        display: flex;
        align-items: center;
        color: ${({ theme }) => theme.COLORS.TRIRD_COLOR};
        svg{
            margin-right: 8px;
        }
    }
`

export const Content = styled.div`
    grid-area: "Content";
    overflow-y: auto;
    margin: 0 120px;
    padding-right: 12px;

    > h2{
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 24px;
    }

    > .infoCreate{
        display: flex;
        align-items: center;
        margin-bottom: 40px;
        
        img{
            width: 16px;
            height: 16px;
            border-radius: 50%;
            margin-right: 8px;
        }

        svg{
            margin: 0 8px 0 16px;
            color: ${({ theme }) => theme.COLORS.TRIRD_COLOR};
        }
    }

    > p{
        margin: 40px 0 24px;
        text-align: justify;
        line-height: 24px;
    }

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.TRIRD_COLOR};
        border-radius: 10px;
    }
`