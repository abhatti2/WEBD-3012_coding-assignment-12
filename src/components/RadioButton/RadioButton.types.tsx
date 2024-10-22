export interface RadioButtonProps {
  label: string;
  value: string;
  name: string;
  checked: boolean;
  onChange: (value: string) => void;
  disabled?: boolean; // Add the disabled prop
}
