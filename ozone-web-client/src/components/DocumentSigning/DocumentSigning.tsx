import React from "react";
import { Button } from "..";

export default function DocumentSigning() {
  return (
    <div>
      <div className="py-2 px-2 w-full flex items-center justify-between border border-neutral-gray rounded-md">
        <p className="text-slate-800">Electronically sign the agreement(s)</p>
        <p>&times;</p>
      </div>
      <Button rightIcon type="filled" />
    </div>
  );
}
