import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: max-content;

    padding: 32px;
    border-radius: 16px;

    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};

    > h2{
        font-size: 24px;
        margin-bottom: 8px;
    }

    > img{
        margin-bottom: 15px;
    }

    > p{
        display: -webkit-box;
        -webkit-box-orient: vertical;
        overflow: hidden;
        -webkit-line-clamp: 2;

        color: ${({ theme }) => theme.COLORS.GRAY_200};
        text-align: justify;
        margin-bottom: 30px;
    }

    > #tags{
        display: flex;
    }
`