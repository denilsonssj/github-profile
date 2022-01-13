/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-fragments */
import { Fragment } from 'react';

import useGithub from 'hooks/useGithub';
import UserProfile from './components/UserProfile';
import NoUserSearch from './components/NoUserSearch';
import { LoadingMessage, ProfileContainer } from './styles';
import Repositories from './components/Repositories';

function Profile() {
  const { githubState } = useGithub();

  return (
    <ProfileContainer>
      {
        githubState.hasUser ? (
          githubState.loading ? (
            <LoadingMessage>loading</LoadingMessage>
          ) : (
            <Fragment>
              <UserProfile />
              <Repositories />
            </Fragment>
          )
        ) : <NoUserSearch />
      }
    </ProfileContainer>
  );
}

export default Profile;
