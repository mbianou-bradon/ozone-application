import React, { useState } from "react";
import { TextInput } from "../../../../../components";

export default function AdditionalUsers() {
  /** State management */
  const [firstName, setFirstName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <TextInput
          value={firstName}
          setValue={setFirstName}
          label={"Username"}
          placeholder={"Input Your userame"}
          required
          inputType={"text"}
        />
        <TextInput
          value={email}
          setValue={setEmail}
          label={"Email"}
          placeholder={"Input Your Email"}
          required
          inputType={"email"}
        />
        <TextInput
          value={phoneNumber}
          setValue={setPhoneNumber}
          label={"Phone Number"}
          placeholder={"Input Your Phone Number"}
          required
          inputType={"text"}
        />
        <TextInput
          value={password}
          setValue={setPassword}
          label={"Password"}
          placeholder={"Create Password"}
          required
          inputType={"password"}
        />
      </div>
    </div>
  );
}
