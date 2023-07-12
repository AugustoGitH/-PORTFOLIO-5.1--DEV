import { type ComponentProps } from 'react';

export interface IInputDefaultProps extends ComponentProps<'input'> {
  helperText?: string;
  error?: boolean;
  label: string;
}
