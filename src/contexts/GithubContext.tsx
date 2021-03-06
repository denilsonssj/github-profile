/* eslint-disable react/jsx-no-constructed-context-values */
import {
  createContext,
  ReactNode,
  useCallback,
  useState,
} from 'react';

import api from 'services/api';
import { IRepositoryResponse } from 'interfaces/IRepositoryResponse';
import { IStarredResponse } from 'interfaces/IStarredResponse';
import { IUserResponse } from 'interfaces/IUserResponse';

interface IGithubState {
  hasUser: boolean;
  loading: boolean;
  user?: IUserResponse,
  repositories: IRepositoryResponse[];
  starred: IStarredResponse[];
}

interface GithubProviderProps {
  children: ReactNode;
}

interface GithubContextProps {
  githubState: IGithubState,
  getUser: (username: string) => void;
  getUserRepos: (username: string) => void;
  getUserStarred: (username: string) => void;
}

export const GithubContext = createContext<GithubContextProps>({} as GithubContextProps);

function GithubProvider({ children }: GithubProviderProps) {
  const [githubState, setGithubState] = useState<IGithubState>({
    hasUser: false,
    loading: false,
    user: undefined,
    repositories: [],
    starred: [],
  });

  function getUser(username: string) {
    setGithubState((prevState) => ({
      ...prevState,
      loading: !prevState.loading,
    }));

    api.get(`/users/${username}`)
      .then(({ data }) => {
        setGithubState((prevState) => ({
          ...prevState,
          hasUser: true,
          user: {
            ...data,
            avatarUrl: data.avatar_url,
            htmlUrl: data.html_url,
            publicRepos: data.public_repos,
            publicGists: data.public_gists,
            followers: 0,
            following: 0,
          },
        }));
      }).finally(() => {
        setGithubState((prevState) => ({
          ...prevState,
          loading: !prevState.loading,
        }));
      });
  }

  function getUserRepos(username: string) {
    api.get(`users/${username}/repos`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        repositories: data.map((item: any) => ({
          ...item,
          fullName: item.full_name,
          htmlUrl: item.full_name,
        })),
      }));
    });
  }

  function getUserStarred(username: string) {
    api.get(`/users/${username}/starred`).then(({ data }) => {
      setGithubState((prevState) => ({
        ...prevState,
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        starred: data.map((item: any) => ({
          ...item,
          fullName: item.full_name,
        })),
      }));
    });
  }

  const contextValue = {
    githubState,
    getUser: useCallback((username: string) => getUser(username), []),
    getUserRepos: useCallback((username: string) => getUserRepos(username), []),
    getUserStarred: useCallback((username: string) => getUserStarred(username), []),
  };

  return (
    <GithubContext.Provider value={{
      githubState,
      getUser: contextValue.getUser,
      getUserRepos: contextValue.getUserRepos,
      getUserStarred: contextValue.getUserStarred,
    }}
    >
      {children}
    </GithubContext.Provider>
  );
}

export default GithubProvider;
