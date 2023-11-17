import { ChangeEvent } from "react";

interface RadioProps {
  children: string;
  value: string;
  defaultChecked?: boolean;
  className?: string;
  checked?: boolean;
  onChange?: (e: ChangeEvent<HTMLInputElement>) => void;
}
const Radio = ({ children, value, defaultChecked, className, checked, onChange }: RadioProps) => {
  return (
    <label>
      <input
        type="radio"
        value={value}
        defaultChecked={defaultChecked}
        className={className + `cursor-pointer gap-1`}
        checked={checked}
        onChange={onChange}
      />
      {children}
    </label>
  );
};

export default Radio;
