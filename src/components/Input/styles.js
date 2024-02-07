import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
    color: ${({ theme }) => theme.COLORS.GRAY_300};
    
    margin: 8px 0 0;
    border-radius: 10px;

    > input{
        width: 100%;
        height: 56px;

        background-color: transparent;
        border: none;
        padding: 16;

        color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};

        &:placeholder{
            color: ${({ theme }) => theme.COLORS.GRAY_300};
        }
    }

    > svg{
        margin: 0 16px;
    }
`