import { ChangeEvent } from 'react';

export interface Props extends StyledLabelProps {
  value?: string;
  defaultValue?: string;
  name?: string;
  label?: string;
  placeholder?: string;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}

export interface StyledLabelProps {
  LabelDisplay?: 'none';
}
