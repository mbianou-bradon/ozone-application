import React, { useState } from "react";
import {
  DocumentSigning,
  Dropdown,
  TextInput,
} from "../../../../../components";

export default function BusinessInformation() {
  /** State management */
  const [brandName, setBrandName] = useState<string>("");
  const [brandType, setBrandType] = useState<string>("");
  const [streetAddress, setStreetAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [taxIDNumber, setTaxIDNumber] = useState<string>("");

  return (
    <div>
      <h2 className="text-dark-blue mt-4 mb-2 text-sm">GENERAL INFORMATION</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <TextInput
          value={brandName}
          setValue={setBrandName}
          label={"Brand Name"}
          placeholder={"Input Your Brand Name"}
          required
          inputType={"text"}
        />
        <Dropdown
          value={brandType}
          setValue={setBrandType}
          label={"Brand Type"}
          placeholder={"Select Type of Your Brand"}
          required
          data={["Local", "National"]}
        />
        <TextInput
          value={streetAddress}
          setValue={setStreetAddress}
          label={"Street Address"}
          placeholder={"Input Your Street Address"}
          required
          inputType={"text"}
        />
        <TextInput
          value={city}
          setValue={setCity}
          label={"City"}
          placeholder={"Input City"}
          required
          inputType={"text"}
        />
        <TextInput
          value={zipCode}
          setValue={setZipCode}
          label={"Zip Code"}
          placeholder={"Input Zip Code"}
          required
          inputType={"text"}
        />
        <TextInput
          value={taxIDNumber}
          setValue={setTaxIDNumber}
          label={"Tax ID Number"}
          placeholder={"Input Tax ID Number"}
          required
          inputType={"text"}
        />
      </div>

      <h2 className="text-dark-blue mt-8 mb-2 text-sm">DOCUMENTS</h2>
      <p className="text-sm mb-2">
        Once the following documents are signed, you'll be ready to get started
      </p>
      <div className="flex flex-col gap-3">
        <DocumentSigning />
        <DocumentSigning />
      </div>

      <h2 className="text-dark-blue mt-8 mb-2 text-sm">COI PDF UPLOAD</h2>
      <p className="text-sm mb-2">
        Once the following documents are signed, you'll be ready to get started
      </p>
      <div className="flex flex-col gap-3">
        <DocumentSigning />
      </div>
    </div>
  );
}
