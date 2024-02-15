import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: max-content;

    padding: 32px;
    border-radius: 16px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

    > a{
        color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
        font-size: 24px;
        font-weight: bold;
    }

    > p{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 2;

        color: ${({ theme }) => theme.COLORS.GRAY_200};
        text-align: justify;
        margin: 24px 0 30px;
    }

    > #tags{
        display: flex;
    }
`