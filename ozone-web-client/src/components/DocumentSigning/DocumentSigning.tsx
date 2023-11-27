import React, { useState } from "react";
import { Button, SignaturePad } from "..";
import TickIcon from "../../assets/icons/tick-icon";

export default function DocumentSigning() {
  /** state management */
  const [signed, setSigned] = useState<boolean>(true);
  const [signatureUrl, setSignatureUrl] = useState<string>("");
  const [openPad, setOpenPad] = useState<boolean>(false);

  return (
    <div className="flex items-center gap-5 w-full">
      <div className="py-2 px-5 w-full flex items-center justify-between border border-neutral-gray rounded-md">
        <p className="text-slate-800 text-sm">
          Electronically sign the agreement(s)
        </p>
        {signatureUrl !== "" ? (
          <TickIcon width={25} height={25} className="text-green-500" />
        ) : (
          <p className="text-3xl text-red-500 cursor-pointer">&times;</p>
        )}
      </div>
      <Button
        rightIcon
        type="filled"
        customStyle={"py-2 text-2xl"}
        onClick={() => setOpenPad(true)}
      />
      {openPad && (
        <SignaturePad
          signatureUrl={signatureUrl}
          setSignatureUrl={setSignatureUrl}
          setOpenPad={setOpenPad}
        />
      )}
    </div>
  );
}
