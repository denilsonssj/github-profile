import useGithub from 'hooks/useGithub';
import ProfileStatus from '../ProfileStatus';
import {
  UserProfileContainer,
  UserProfileInfo,
  Label,
  UserAvatar,
  UserAvatarContainer,
  UserInfoLine,
  UserTitleName,
  Value,
} from './styles';

function UserProfile() {
  const { githubState } = useGithub();
  return (
    <UserProfileContainer>
      <UserAvatarContainer>
        <UserAvatar
          src={githubState.user?.avatarUrl}
          height="200px"
          width="auto"
          alt={githubState.user?.name}
        />
      </UserAvatarContainer>
      <UserProfileInfo>
        <UserTitleName>{githubState.user?.name}</UserTitleName>
        <UserInfoLine>
          <Label>Username:</Label>
          <Value>{githubState.user?.login}</Value>
        </UserInfoLine>
        <UserInfoLine>
          <Label>Company:</Label>
          <Value>{githubState.user?.company}</Value>
        </UserInfoLine>
        <UserInfoLine>
          <Label>Location:</Label>
          <Value>{githubState.user?.location}</Value>
        </UserInfoLine>
        <UserInfoLine>
          <Label>Blog:</Label>
          <Value>{githubState.user?.blog}</Value>
        </UserInfoLine>
        <UserInfoLine>
          <ProfileStatus />
        </UserInfoLine>
      </UserProfileInfo>
    </UserProfileContainer>
  );
}

export default UserProfile;
