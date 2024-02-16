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
    grid-area: "content";
    margin: 0 123px 58px;
    padding: 0 12px 0 0;
    overflow-y: auto;

    > h2{
        font-size: 36px;
        font-weight: 500;
        margin-bottom: 40px;
    }

    > #inputs{
        display: flex;
        gap: 40px;
        margin-bottom: 40px;
    }

    > textarea{
        width: 100%;
        padding: 18px 16px;
        margin-bottom: 40px;

        background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
        color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};
        
        border: none;
        border-radius: 10px;
        resize: none;
    }

    > section{
        h3{
            font-size: 20px;
            color: ${({ theme }) => theme.COLORS.GRAY_200};
            font-weight: normal;
            margin-bottom: 24px;
        }

        #tags{
            display: flex;
            flex-direction: row;
            padding: 16px;
            background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
            border-radius: 8px;
            margin-bottom: 40px;

            button{
                display: flex;
                margin-right: 24px;
                padding: 16px;

                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_800};
                
                align-items: center;
                justify-content: center;
                color: ${({ theme }) => theme.COLORS.PRIMARY_COLOR};

                border: none;
                border-radius: 10px;

                svg{
                    margin-left: 8px;
                    color: ${({ theme }) => theme.COLORS.TRIRD_COLOR};
                }
            }

            .isNew{
                background: none;
                border-style: dashed;
                border-width: 2px;
                border-color: ${({ theme }) => theme.COLORS.GRAY_300};
            }
        }

        #buttons{
            display: flex;
            gap: 24px;

            > button{
                width: 100%;
                height: 56px;
                border-radius: 10px;
                padding: 16px;
                margin-top: 0;
                font-weight: 500;
            }

            #delete{
                color: ${({ theme }) => theme.COLORS.TRIRD_COLOR};

                background-color: ${({ theme }) => theme.COLORS.BACKGROUND_1000};
                border: none;
            }
        }
    }

    &::-webkit-scrollbar {
        width: 12px;
    }

    &::-webkit-scrollbar-thumb {
        background-color: ${({ theme }) => theme.COLORS.TRIRD_COLOR};
        border-radius: 10px;
    }
`