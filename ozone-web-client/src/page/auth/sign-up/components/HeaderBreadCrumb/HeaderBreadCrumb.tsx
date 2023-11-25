import React, { useState } from "react";

type Props = {
  index: number;
  setIndex: React.Dispatch<React.SetStateAction<number>>;
};

export default function HeaderBreadCrumb({ index, setIndex }: Props) {
  /** State Management */
  const [activeTab, setActiveTab] = useState<number>(0);
  return (
    <div>
      <div
        className={`flex items-center h-14 bg-[#edecfc] relative before:absolute rounded-t-md overflow-hidden ${
          index === 0
            ? "before:w-1/3 before:rounded-r-full"
            : index === 1
            ? "before:w-2/3 before:rounded-r-full"
            : "before:w-full"
        }  before:h-full before:bg-gradient-to-r before:from-light-blue before:to-dark-blue before:z-10 [&>*]:flex-1 [&>*]:flex [&>*]:justify-center [&>*]:items-center [&>*]:gap-4 [&>*]:z-20 [&>*]:cursor-pointer`}
      >
        <p
          className={`${index >= 0 ? "text-white" : "text-[#bdc7e8]"}`}
          onClick={() => setIndex(0)}
        >
          <span
            className={`w-5 h-5 text-sm rounded-full ${
              index >= 0 ? "bg-slate-100 text-slate-400" : "bg-[#bdc7e8]"
            } flex items-center justify-center`}
          >
            1
          </span>
          <span>Your Profile</span>
        </p>
        <p
          className={`${index >= 1 ? "text-white" : "text-[#bdc7e8]"}`}
          onClick={() => setIndex(1)}
        >
          <span
            className={`w-5 h-5 text-sm rounded-full ${
              index >= 0 ? "bg-slate-100 text-slate-400" : "bg-[#bdc7e8]"
            } flex items-center justify-center`}
          >
            2
          </span>
          <span>Business Information</span>
        </p>
        <p
          className={`${index >= 2 ? "text-white" : "text-[#bdc7e8]"}`}
          onClick={() => setIndex(2)}
        >
          <span
            className={`w-5 h-5 text-sm rounded-full ${
              index >= 0 ? "bg-slate-100 text-slate-400" : "bg-[#bdc7e8]"
            } flex items-center justify-center`}
          >
            3
          </span>
          <span>Additional Users</span>
        </p>
      </div>
    </div>
  );
}
