/* eslint-disable no-nested-ternary */
/* eslint-disable react/jsx-fragments */
import useGithub from 'hooks/useGithub';
import UserProfile from './components/UserProfile';
import NoUserSearch from './components/NoUserSearch';
import { LoadingMessage, ProfileContainer } from './styles';

function Profile() {
  const { githubState } = useGithub();

  return (
    <ProfileContainer>
      {
        githubState.hasUser ? (
          githubState.loading ? (
            <LoadingMessage>loading</LoadingMessage>
          ) : (
            <UserProfile />
          )
        ) : <NoUserSearch />
      }
    </ProfileContainer>
  );
}

export default Profile;
