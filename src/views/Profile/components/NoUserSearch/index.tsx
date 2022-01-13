import { memo } from 'react';

import { NoUserSearchContainer, TitleMessage } from './styles';

function NoUserSearch() {
  return (
    <NoUserSearchContainer>
      <TitleMessage>No user searched!</TitleMessage>
    </NoUserSearchContainer>
  );
}

export default memo(NoUserSearch);
