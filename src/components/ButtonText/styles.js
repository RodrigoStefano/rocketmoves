import styled from "styled-components";

export const Container = styled.button`
    background: none;
    border: none;
    color: ${({theme, $isactive}) => $isactive ? theme.COLORS.TRIRD_COLOR : theme.COLORS.SECONDARY_COLOR};
    font-size: 16px;
`