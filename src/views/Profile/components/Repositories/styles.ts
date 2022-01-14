/* eslint-disable import/prefer-default-export */
import styled from 'styled-components';
import {
  Tabs,
  Tab,
  TabList,
  TabPanel,
} from 'react-tabs';

export const RepositoriesContainer = styled.div``;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 1rem;

    @media screen and (max-width: 1600px) {
        grid-template-columns: repeat(3, 1fr);
    }

    @media screen and (max-width: 1200px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media screen and (max-width: 900px) {
        grid-template-columns: repeat(1, 1fr);
    }
`;

export const WrapperTabs = styled(Tabs)`
    font-size: 1.4rem;
    width: 100%;
    margin-top: 1.0rem;
`;

export const WrapperTabList = styled(TabList)`
    list-style-type: none;
    padding: 0.4rem;
    display: flex;
    margin: 0; 
`;

export const WrapperTab = styled(Tab)`
    border-radius: 0.8rem;
    border: 0.08rem solid #ccc;
    padding: 1.6rem;
    user-select: none;
    cursor: pointer;
    //z-index: 99999;
    background-color: ${({ theme }) => theme.colors.background};
    margin: 0.6rem;
    font-weight: 500;
    color: ${({ theme }) => theme.colors.background2};

    &:focus {
        outline: none;
    }

    &.is-selected {
        box-shadow: 0.3rem 0.2rem 1rem rgba(0, 0, 0, 0.2);
        background-color: ${({ theme }) => theme.colors.white};
    }
`;

export const WrapperTabPanel = styled(TabPanel)`
    &.is-selected {
        display: block;
    }
`;

export const WrapperList = styled.div`
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
`;
