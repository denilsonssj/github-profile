/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ButtonContainer = styled.button`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.0rem;
    line-height: 1.4rem;
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.white};
    border: 0.1rem solid ${({ theme }) => theme.colors.primary};
    border-radius: 0.2rem;
    padding: 0.2rem 0.4rem;

    &:hover {
        opacity: 0.95;
    }
`;
