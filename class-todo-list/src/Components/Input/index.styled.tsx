import styled from '@emotion/styled';
import { StyledLabelProps } from './index.types';

export const InputContainer = styled.div`
  display: flex;
  width: 100%;
`;

export const StyledInput = styled.input`
  display: block;
  width: 100%;
  border: none;
  outline: none;
  padding: 1rem 1.5rem;
  border: 1px solid #bdbdbd;
`;

export const StyledLabel = styled.label<StyledLabelProps>`
  display: ${(props) => props.LabelDisplay ?? 'inline-block'};
`;
