import { StyledInput } from './Input.styled';
import { Props } from './Input.types';

const Input = ({ type = 'text', ...rest }: Props) => {
  return <StyledInput type={type} {...rest} />;
};

export default Input;
