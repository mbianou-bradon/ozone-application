import React, { useState } from "react";
import SignatureCanvas from "react-signature-canvas";
import { Button } from "../../components";

type Props = {
  signatureUrl: string;
  setSignatureUrl: React.Dispatch<React.SetStateAction<string>>;
  setOpenPad: React.Dispatch<React.SetStateAction<boolean>>;
};
export default function SignaturePad({
  signatureUrl,
  setSignatureUrl,
  setOpenPad,
}: Props) {
  /** state management */
  const [sign, setSign] = useState<any>();

  function handleClear() {
    sign.clear();
  }

  function handleSave() {
    setSignatureUrl(sign.getTrimmedCanvas().toDataURL("image/png"));
    setOpenPad(false);
  }

  return (
    <div className="absolute top-0 left-0 bg-black/50 min-h-[120vh] w-full flex items-center justify-center flex-col">
      <div className="flex justify-end w-full relative">
        <p
          className="absolute text-2xl -top-10 right-1/4 w-8 h-8 rounded-full flex items-center justify-center cursor-pointer bg-black/70 text-slate-200"
          onClick={() => setOpenPad(false)}
        >
          &times;
        </p>
      </div>
      <div className="flex items-start gap-4 bg-white w-fit h-fit p-8 rounded-md">
        <div style={{ border: "1px solid black", width: 500, height: 300 }}>
          <SignatureCanvas
            ref={(data) => setSign(data)}
            canvasProps={{ width: 500, height: 300, className: "sigCanvas" }}
          />
        </div>
        <div className="flex flex-col gap-4 w-[100px]">
          <Button type="bordered" text="clear" onClick={() => handleClear()} />
          <Button type="filled" text="Save" onClick={() => handleSave()} />
        </div>
      </div>
    </div>
  );
}
