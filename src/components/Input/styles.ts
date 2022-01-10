/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const InputContainer = styled.input`
    font-family: 'Roboto', sans-serif;
    font-weight: 400;
    font-size: 1.0rem;
    line-height: 1.6rem;
    display: flex;
    width: 100%;
    border: 0.08rem solid ${({ theme }) => theme.colors.background2};
    outline: 0.1rem solid ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.background2};
    border-radius: 0.3rem;
    padding: 0.2rem;
    background-color: ${({ theme }) => theme.colors.background};

    &:focus {
        outline: 0.1rem solid ${({ theme }) => theme.colors.background2};
    }

    &:click {
        outline: 0.1rem solid ${({ theme }) => theme.colors.background2};
    }
`;
