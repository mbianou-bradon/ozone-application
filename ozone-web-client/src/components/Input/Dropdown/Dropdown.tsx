import React from "react";

type Props = {
  label: string;
  required: boolean;
  data: string[];
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  placeholder: string;
};

export default function Dropdown({
  label,
  value,
  setValue,
  data,
  placeholder,
  required,
}: Props) {
  return (
    <div>
      <div>
        <label htmlFor="">
          <span>{label}</span>
          {required && <span className="text-dark-blue">*</span>}
        </label>
      </div>
    </div>
  );
}
