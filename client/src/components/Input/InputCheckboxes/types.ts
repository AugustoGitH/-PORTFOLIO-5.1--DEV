import { type ChangeEvent } from 'react';

export interface IOptionsCheckbox {
  label: string | JSX.Element;
  value: string;
}

export interface ICheckboxesChangeParams {
  name: string;
  value: string | string[];
}

export interface ICheckboxesProps {
  label: string;
  options: IOptionsCheckbox[];
  name: string;
  tagAnyone?: boolean;
  onChange?: (valueSelected: ICheckboxesChangeParams) => void;
  value?: string | string[];
  error?: boolean;
  helperText?: string;
  reset?: boolean;
}

export interface ICheckboxProps {
  option: IOptionsCheckbox;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  checked: boolean;
  error: boolean;
}
