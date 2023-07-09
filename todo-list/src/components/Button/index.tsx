import { Container, Label } from './button.styled';
import { Props } from './button.types';

const Button = ({ label, backgroundColor = '#304ffe', hoverColor = '#1e40ff', onClick }: Props) => {
  return (
    <Container backgroundColor={backgroundColor} hoverColor={hoverColor} onClick={onClick}>
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
