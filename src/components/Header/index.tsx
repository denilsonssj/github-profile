import Button from 'components/Button';
import Input from 'components/Input';

import { HeaderContainer, SearchContainer } from './styles';

function Header() {
  function handleSearch() {

  }

  return (
    <HeaderContainer>
      <SearchContainer>
        <Input
          placeholder="Search the username"
          data-testid="search-input"
          data-cy="search-input"
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
