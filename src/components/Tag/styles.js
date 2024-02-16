import styled from "styled-components";

export const Container = styled.button`
    width: max-content;
    margin-right: 8px;
    padding: 5px 16px;
    font-size: 12px;
    border: none;

    border-radius: 8px;
    background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
    color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
`