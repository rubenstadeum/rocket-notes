import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100vh;

    display: grid;
    grid-template-rows: 105px auto;
    grid-template-areas: 
    "header"
    "content";
`;

export const Form = styled.form`
    max-width: 550px;
    margin: 3.8rem auto;

    > header {
        display: flex;
        align-items: center;
        justify-content: space-between;

        margin-bottom: 3.6rem;

        a {
            font-size: 2rem;
            color: ${({ theme }) => theme.COLORS.GRAY_100};
        }
    }
`;