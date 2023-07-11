import { Component } from 'react';
import { Props } from './index.types';
import { InputContainer, StyledInput, StyledLabel } from './index.styled';

export default class Input extends Component<Props> {
  render() {
    const { label, LabelDisplay, ...rest } = this.props;
    return (
      <InputContainer>
        <StyledLabel LabelDisplay={LabelDisplay}>{label}</StyledLabel>
        <StyledInput {...rest} />
      </InputContainer>
    );
  }
}
