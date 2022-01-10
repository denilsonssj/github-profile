import { ButtonHTMLAttributes } from 'react';

import { ButtonContainer } from './styles';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

function Button({ children, ...rest }: ButtonProps) {
  return (
    <ButtonContainer
      {...rest}
      data-testid="button"
      data-cy="button"
    >
      {children}
    </ButtonContainer>
  );
}

export default Button;
