import { Container, Label } from './Button.styled';
import { Props } from './Button.types';

const Button = ({ label, backgroundColor = '#304ffe', hoverColor = '#1e40ff', onClick }: Props) => {
  return (
    <Container backgroundColor={backgroundColor} hoverColor={hoverColor} onClick={onClick} data-testid={'container'}>
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
