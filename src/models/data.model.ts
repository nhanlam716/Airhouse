export interface ISignIn {
  title?: string;
  label?: string;
  type?: string;
  id?: string;
  placeholder?: string;
  button?: string;
  width?: string;
  height?: string;
  value?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
}

export interface INavbar {
  img?: string;
  href?: string;
}
