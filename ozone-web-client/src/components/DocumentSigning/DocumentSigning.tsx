import React from "react";
import { Button } from "..";

export default function DocumentSigning() {
  return (
    <div className="flex items-center gap-5 w-full">
      <div className="py-2 px-5 w-full flex items-center justify-between border border-neutral-gray rounded-md">
        <p className="text-slate-800 text-sm">
          Electronically sign the agreement(s)
        </p>
        <p className="text-3xl text-red-500 cursor-pointer">&times;</p>
      </div>
      <Button rightIcon type="filled" customStyle={"py-2 text-2xl"} />
    </div>
  );
}
