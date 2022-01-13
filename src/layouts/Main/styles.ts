import styled from 'styled-components';

export const MainLayoutContainer = styled.div`
    min-height: 100%;
    width: 100%;
    background-color: ${({ theme }) => theme.colors.background};
`;

export const Main = styled.main`
    padding: 2rem;
`;
