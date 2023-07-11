import styled from '@emotion/styled';
import { StyledButtonProps } from './index.types';

export const StyledButton = styled.div<StyledButtonProps>`
  display: flex;
  width: 100px;
  justify-content: center;
  align-items: center;
  outline: none;
  border: none;
  padding: 0.5rem;
  color: #fff;
  cursor: pointer;
  background-color: ${(props) => props.backgroundColor};
  transition: 0.2s all;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;
