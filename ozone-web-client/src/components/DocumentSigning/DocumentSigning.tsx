import React from "react";
import { Button } from "..";

export default function DocumentSigning() {
  return (
    <div>
      <div className="py-2 px-2 w-full flex items-center justify-between">
        <p>Electronically sign the agreement(s)</p>
        <p>&times;</p>
      </div>
      <Button rightIcon type="filled" />
    </div>
  );
}
