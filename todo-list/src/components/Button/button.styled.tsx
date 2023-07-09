import styled from '@emotion/styled';
import { ContainerProps } from './button.types';

export const Container = styled.div<ContainerProps>`
  text-align: center;
  background-color: ${(props) => props.backgroundColor};
  padding: 10px 20px;
  border-radius: 8px;
  transition: 0.2s;
  cursor: pointer;
  &:hover {
    background-color: ${(props) => props.hoverColor};
  }
`;

export const Label = styled.div`
  color: #fff;
  font-size: 16px;
`;
