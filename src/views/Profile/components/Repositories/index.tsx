import { useState, useEffect } from 'react';

import useGithub from 'hooks/useGithub';
import {
  GridContainer,
  RepositoriesContainer,
  WrapperTab,
  WrapperTabList,
  WrapperTabPanel,
  WrapperTabs,
} from './styles';
import RepositoryItem from './components/RepositoryItem';

function Repositories() {
  const { githubState, getUserRepos, getUserStarred } = useGithub();
  const [hasUserForSearchRepos, setHasUserForSearchRepos] = useState<boolean>(false);

  useEffect(() => {
    if (githubState.user?.login) {
      const username: string = githubState.user?.login;
      getUserRepos(username);
      getUserStarred(username);
      setHasUserForSearchRepos(!!githubState.repositories);
    }
  }, [githubState.user?.login]);

  return (
    <RepositoriesContainer>
      {
        hasUserForSearchRepos && (
          <WrapperTabs
            selectedTabClassName="is-selected"
            selectedTabPanelClassName="is-selected"
          >
            <WrapperTabList>
              <WrapperTab>Repositories</WrapperTab>
              <WrapperTab>Starred</WrapperTab>
            </WrapperTabList>
            <WrapperTabPanel>
              <GridContainer>
                {
                  githubState.repositories.map((repository) => (
                    <RepositoryItem
                      key={repository.id}
                      id={repository.id}
                      name={repository.name}
                      full_name={repository.fullName}
                    />
                  ))
                }
              </GridContainer>
            </WrapperTabPanel>
            <WrapperTabPanel>
              <GridContainer>
                {
                  githubState.starred.map((repository) => (
                    <RepositoryItem
                      key={repository.id}
                      id={repository.id}
                      name={repository.name}
                      full_name={repository.fullName}
                    />
                  ))
                }
              </GridContainer>
            </WrapperTabPanel>
          </WrapperTabs>
        )
      }
    </RepositoriesContainer>

  );
}

export default Repositories;
