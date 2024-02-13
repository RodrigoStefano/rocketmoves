import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 116px 122px auto;
    grid-template-areas: 
    "header"
    "titlepage"
    "content";
`
export const TitlePage = styled.div`
    grid-area: "titlepage";

    padding: 50px 123px 0;
    display: flex;
    align-items: center;
    justify-content: space-between;

    h2{
        font-size: 32px;
        font-weight: normal;
     }

     > button{
        width: 207px;
     }
`

export const Content = styled.div`
    grid-area: "content";
    margin: 37px 123px 58px;
    padding: 0 12px 0 0;
    overflow-y: auto;

    > div + div{
        margin-top: 24px;
    }

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.TRIRD_COLOR};
        border-radius: 10px;
    }
`