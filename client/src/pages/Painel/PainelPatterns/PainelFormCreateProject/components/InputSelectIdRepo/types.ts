export interface IInputSelectIdRepoProps {
  onChange: (idRepo: number | null) => void;
  reset?: boolean;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
}
