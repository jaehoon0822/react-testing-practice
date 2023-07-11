import { Component } from 'react';
import { Props } from './index.types';
import { StyledButton } from './index.styled';

export class Button extends Component<Props> {
  render() {
    const { label, backgroundColor = '#304ffe', hoverColor = '#1e40ff', onClick } = this.props;

    return (
      <StyledButton backgroundColor={backgroundColor} hoverColor={hoverColor} onClick={onClick} >
        {label}
      </StyledButton>
    );
  }
}
