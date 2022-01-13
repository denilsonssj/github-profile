export interface IUserResponse {
  id?: string;
  login?: string;
  name?: string;
  avatarUrl?: string;
  htmlUrl?: string;
  blog?: string;
  company?: string;
  location?: string;
  email?: string;
  publicRepos?: number;
  publicGists?: number;
  followers: number;
  following: number;
}
