/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';

export const UserProfileContainer = styled.div`
    display: grid;
    grid-template:
        "user-avatar-area user-profile-info-area user-profile-info-area user-profile-info-area"
        "user-avatar-area user-info-area user-info-area user-info-area"
        "user-avatar-area user-info-area user-info-area user-info-area";
`;

export const UserAvatarContainer = styled.div`
    display: grid;
    grid-area: user-avatar-area;
    justify-content: center;
`;

export const UserAvatar = styled.img`
    border-radius: 50%;
    width: auto;
    grid-area: user-avatar-area;
`;

export const UserProfileInfo = styled.div``;

export const UserTitleName = styled.h1`
    font-family: 'Roboto', sans-serif;
    font-size: 2.2rem;
    font-weight: 700;
    grid-area: user-info-area;
`;

export const UserInfoLine = styled.div`
    grid-area: user-info-area;
    & + & {
        margin-top: 0.3rem; 
    }
`;

export const Label = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-weight: 500;
    margin-right: 0.1rem;
`;

export const Value = styled.span`
    font-family: 'Roboto', sans-serif;
    font-size: 1.2rem;
    font-weight: 400;
`;
