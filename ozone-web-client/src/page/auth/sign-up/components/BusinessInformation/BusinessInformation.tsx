import React, { useState } from "react";
import { Dropdown, TextInput } from "../../../../../components";

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
      <h2>GENERAL INFORMATION</h2>
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
          label={"Last Name"}
          placeholder={"Input Your Last Name"}
          required
          data={[]}
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

      <h2>DOCUMENTS</h2>
      <p>
        Once the following documents are signed, you'll be ready to get started
      </p>
      <div></div>
    </div>
  );
}
