/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const ProfileStatusContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grip-gap: 2rem;
`;

export const ProfileStatusColumn = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;

export const ProfileStatusKey = styled.span`
    justify-self: center;
    font-size: 1.2rem;
`;

export const ProfileStatusValue = styled.span`
    justify-self: center;
    font-size: 1.2rem;
    font-weight: 700;
`;
