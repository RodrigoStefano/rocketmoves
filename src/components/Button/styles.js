import styled from "styled-components";

export const Container = styled.button`
    width: 100%;
    height: 56px;

    display: flex;
    align-items: center;
    justify-content: center;

    border: none;
    border-radius: 10px;

    background-color: ${({ theme }) => theme.COLORS.TRIRD_COLOR};
    color: ${({ theme }) => theme.COLORS.BACKGROUND_800};

    text-align: center;
    margin: 24px 0;

    > svg{
        margin-right: 8px;
    }
`