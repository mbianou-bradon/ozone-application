import React, { useEffect, useRef, useState } from "react";
import ChevronIcon from "../../../assets/icons/chevron-icon";

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
  /** State management */
  const [showMenu, setShowMenu] = useState<boolean>(false);
  const [selectedOption, setSelectedOption] = useState<string>(value);
  const [searchValue, setSearchValue] = useState("");

  const searchRef = useRef<any>();
  const inputRef = useRef<any>();

  /** Tooltip state */
  const [viewTooltip, setViewTooltip] = useState<boolean>(false);

  useEffect(() => {
    setSearchValue("");
    if (showMenu && searchRef.current) {
      searchRef.current.focus();
    }
  }, [showMenu]);

  useEffect(() => {
    const handler = (event: any) => {
      if (inputRef.current && !inputRef.current.contains(event.target)) {
        setShowMenu(false);
      }
    };

    window.addEventListener("click", handler);
    return () => {
      window.removeEventListener("click", handler);
    };
  }, []);

  const handleOpenMenu = () => {
    setShowMenu((prevState) => !prevState);
  };

  const getDisplay = () => {
    if (selectedOption !== "") return (value = selectedOption);
    // if(selectedV)
    return placeholder;
  };

  const selectClickItem = (option: string) => {
    setSelectedOption(option);
    setValue(option);
  };

  const isSelected = (option: string) => {
    if (selectedOption === "") return false;

    return selectedOption === option;
  };

  /** Search Methods */
  const onSearch = (e: any) => {
    setSearchValue(e.target.value);
  };

  const getOptions = () => {
    if (!searchValue) {
      return data;
    }
    return data.filter((option) =>
      option.toLowerCase().includes(searchValue.toLowerCase())
    );
  };
  return (
    <div>
      <div>
        <label htmlFor="" className="flex items-center">
          <span>{label}</span>
          {required && <span className="text-dark-blue">*</span>}
          <div
            className="relative ml-2"
            onMouseEnter={() => setViewTooltip(true)}
            onMouseLeave={() => setViewTooltip(false)}
          >
            <div className="cursor-pointer">&times;</div>
            {viewTooltip && (
              <div className="absolute w-[350px] -top-2 left-5 z-20">
                <div className="px-4 py-2 text-xs text-white bg-dark-purple/80 rounded-lg relative before:absolute before:w-3 before:h-3 before:bg-dark-purple/80 before:-left-1.5 before:top-4 before:rotate-45">
                  <p className="mb-3">
                    Local: Brands with distribution in 3 divisions or less OR
                    multiple divisions but a total of 150 stores or less.
                  </p>
                  <p>
                    National: Brands with distribution in 4 or more divisions or
                    in more than 150 stores
                  </p>
                </div>
              </div>
            )}
          </div>
        </label>
        <div
          className={`border text-left mt-2 py-1 ${
            !showMenu ? "border-neutral-gray" : "border-light-blue"
          } ease-linear"} relative rounded-md transition-all duration-200`}
        >
          <div
            ref={inputRef}
            onClick={handleOpenMenu}
            className="dropdown-input flex select-none items-center justify-between p-2"
          >
            <div
              className={`dropdown-selected-value text-sm pl-3 ${
                selectedOption !== "" ? "text-slate-800" : "text-neutral-gray"
              } `}
            >
              <p>{value || getDisplay()}</p>
            </div>
            <div className="dropdown-tools">
              <div className="dropdown-tool">
                {showMenu ? (
                  <div className="rotate-90">
                    <ChevronIcon />
                  </div>
                ) : (
                  <div className="-rotate-90">
                    <ChevronIcon />
                  </div>
                )}
              </div>
            </div>
          </div>
          {showMenu && (
            <div className="dropdown-menu absolute z-10 max-h-[10rem] w-full translate-y-1 overflow-auto rounded-md border border-light-blue bg-white">
              {data.length > 5 && (
                <div className="search-box bg-transparent p-1.5">
                  <input
                    onChange={onSearch}
                    value={searchValue}
                    ref={searchRef}
                    placeholder="search"
                    className="w-full rounded-md p-1.5 border border-light-blue focus:outline-none"
                  />
                </div>
              )}
              {getOptions().map((option, index) => (
                <div
                  key={index}
                  onClick={() => selectClickItem(option)}
                  className={`cursor-pointer p-2 hover:bg-dark-blue/70 ${
                    isSelected(option) && "bg-dark-blue text-white"
                  }`}
                >
                  {option}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
