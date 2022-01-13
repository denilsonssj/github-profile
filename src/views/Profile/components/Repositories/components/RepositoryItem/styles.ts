/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const RepositoryItemContainer = styled.div`
    border: 0.1rem solid ${({ theme }) => theme.colors.backgroundLight};
    border-radius: 0.2rem;
    min-height: 10rem;
    padding: 1rem;
`;

export const RepositoryItemTitle = styled.h5``;

export const RepositoryItemLabel = styled.p``;

export const RepositoryItemLink = styled.a`
    color: ${({ theme }) => theme.colors.gray};
    text-decoration: none;
`;
