export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  placeholder: string;
  error?: string;
  ref: React.Ref<HTMLInputElement>;
}
