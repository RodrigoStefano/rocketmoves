import styled from "styled-components";

export const Container = styled.div`
    header{
        width: 100%;
        height: 144px;

        display: flex;
        align-items: center;

        padding: 0 144px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_400};
        
        > a{
            display: flex;
            align-items: center;
            justify-content: center;
            line-height: 16px;
            color: ${({ theme }) => theme.COLORS.TRIRD_COLOR};

            svg{
                font-size: 16px;
                color: ${({ theme }) => theme.COLORS.TRIRD_COLOR};
                margin-right: 8px;
            }
        }
    }
`

export const Form = styled.form`
    margin: 0 auto;
    width: 340px;

    > div:nth-child(4){
        margin-top: 24px;
    }
`

export const Avatar = styled.div`
    position: relative;
    width: 186px;
    height: 186px;
    margin: -90px auto 64px;

    > img{
        width: 186px;
        height: 186px;
        border-radius: 50%;
    }

    > label{
        display: flex;
        align-items: center;
        justify-content: center;

        width: 48px;
        height: 48px;
        background-color: ${({ theme }) => theme.COLORS.TRIRD_COLOR};
        border-radius: 50px;

        position: absolute;
        right: 7px;
        bottom: 7px;
        
        cursor: pointer;

        input{
            display: none;
        }

        svg{
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
        }
    }
`