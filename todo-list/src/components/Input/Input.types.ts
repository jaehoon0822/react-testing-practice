import { ChangeEvent } from 'react';

export interface Props {
  readonly placeholder?: string;
  readonly type?: string;
  readonly value?: string;
  readonly defaultValue?: string;
  readonly id?: string;
  readonly name: string;
  readonly onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
