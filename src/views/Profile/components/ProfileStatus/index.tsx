import useGithub from 'hooks/useGithub';
import {
  ProfileStatusColumn,
  ProfileStatusContainer,
  ProfileStatusKey,
  ProfileStatusValue,
} from './styles';

function ProfileStatus() {
  const { githubState } = useGithub();
  return (
    <ProfileStatusContainer>
      <ProfileStatusColumn>
        <ProfileStatusKey>Followers</ProfileStatusKey>
        <ProfileStatusValue>{githubState.user?.followers}</ProfileStatusValue>
      </ProfileStatusColumn>
      <ProfileStatusColumn>
        <ProfileStatusKey>Followings</ProfileStatusKey>
        <ProfileStatusValue>{githubState.user?.following}</ProfileStatusValue>
      </ProfileStatusColumn>
      <ProfileStatusColumn>
        <ProfileStatusKey>Gists</ProfileStatusKey>
        <ProfileStatusValue>{githubState.user?.publicGists}</ProfileStatusValue>
      </ProfileStatusColumn>
      <ProfileStatusColumn>
        <ProfileStatusKey>Repos</ProfileStatusKey>
        <ProfileStatusValue>{githubState.user?.publicRepos}</ProfileStatusValue>
      </ProfileStatusColumn>
    </ProfileStatusContainer>
  );
}

export default ProfileStatus;
