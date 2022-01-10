import { InputHTMLAttributes } from 'react';

import { InputContainer } from './styles';

type InputProps = InputHTMLAttributes<HTMLInputElement>;

function Input({
  id, name, className, ...rest
}: InputProps) {
  return (
    <InputContainer
      id={id}
      name={name}
      className={className}
      data-testid="input"
      data-cy="input"
      {...rest}
    />
  );
}

export default Input;
