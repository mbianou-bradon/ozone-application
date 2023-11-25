import React from "react";
import ChevronIcon from "../../assets/icons/chevron-icon";

type Props = {
  text?: string;
  leftIcon?: boolean;
  rightIcon?: boolean;
  onClick?: () => void;
  type: "filled" | "bordered" | "none";
  customStyle?: string;
};

export default function Button({
  text,
  leftIcon,
  rightIcon,
  onClick,
  type,
  customStyle,
}: Props) {
  return (
    <button
      type="button"
      onClick={() => onClick && onClick()}
      className={`flex items-center gap-2 px-5 py-2 rounded-md active:scale-[0.99] transition-all duration-200 ease-linear ${
        type === "filled"
          ? "bg-gradient-to-r from-light-purple to-dark-purple text-white"
          : type === "bordered"
          ? "border border-dark-purple text-dark-purple hover:bg-gradient-t-r hover:from-dark-purple hover:to-light-purple"
          : "text-dark-blue"
      } ${customStyle}`}
    >
      {leftIcon && <ChevronIcon />}
      <span>{text}</span>
      {rightIcon && (
        <div className="rotate-180">
          <ChevronIcon />
        </div>
      )}
    </button>
  );
}
