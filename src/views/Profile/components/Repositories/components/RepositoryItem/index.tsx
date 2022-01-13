/* eslint-disable react/no-unused-prop-types */
/* eslint-disable react/require-default-props */
import {
  RepositoryItemContainer,
  RepositoryItemLabel,
  RepositoryItemLink,
  RepositoryItemTitle,
} from './styles';

interface RepositoryItemProps {
  id: string;
  name: string;
  full_name: string;
  htmlUrl?: string;
}

function RepositoryItem({ name, full_name }: RepositoryItemProps) {
  return (
    <RepositoryItemContainer>
      <RepositoryItemTitle>{name}</RepositoryItemTitle>
      <RepositoryItemLabel>Full name:</RepositoryItemLabel>
      <RepositoryItemLink href={`http://github.com/${full_name}`}>{full_name}</RepositoryItemLink>
    </RepositoryItemContainer>
  );
}

export default RepositoryItem;
