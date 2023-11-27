import React, { useState } from "react";

type Props = {
  value: any;
  setValue: React.Dispatch<React.SetStateAction<any>>;
  label: string;
  placeholder: string;
  required: boolean;
  inputType: "text" | "email" | "password" | "number";
};

export default function TextInput({
  value,
  setValue,
  label,
  placeholder,
  required,
  inputType,
}: Props) {
  /** state management */
  const [isFocused, setIsFocused] = useState<boolean>(false);
  return (
    <div>
      <label htmlFor={label} className={""}>
        {label}
        {required && <span className="text-dark-blue">*</span>}
      </label>
      <div
        className={`border ${
          isFocused ? "border-light-blue" : "border-neutral-gray"
        } p-3 rounded-md mt-2 min-w-[250px]`}
      >
        <input
          type={inputType}
          name={label}
          id={label}
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          className="outline-none border-0 w-full pl-3 caret-dark-blue text-sm placeholder:text-sm"
        />
      </div>
    </div>
  );
}
