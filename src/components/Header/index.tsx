import { useState } from 'react';

import Button from 'components/Button';
import Input from 'components/Input';
import useGithub from 'hooks/useGithub';

import { HeaderContainer, SearchContainer } from './styles';

function Header() {
  const [username, setUsername] = useState<string>('');
  const { getUser } = useGithub();
  function handleSearch() {
    if (username) {
      getUser(username);
    }
  }

  return (
    <HeaderContainer>
      <SearchContainer>
        <Input
          placeholder="Search the username"
          data-testid="search-input"
          data-cy="search-input"
          onChange={(e) => setUsername(e.target.value)}
        />
      </SearchContainer>
      <Button
        type="button"
        onClick={handleSearch}
        data-testid="search-button"
        data-cy="search-button"
      >
        Search
      </Button>
    </HeaderContainer>
  );
}

export default Header;
