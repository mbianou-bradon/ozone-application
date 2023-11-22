import React, { useState } from "react";
import { TextInput } from "../../../../../components";

export default function YourProfile() {
  /** State management */
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
      <TextInput
        value={firstName}
        setValue={setFirstName}
        label={"First Name"}
        placeholder={"Input Your First Name"}
        required
        inputType={"text"}
      />
      <TextInput
        value={lastName}
        setValue={setLastName}
        label={"Last Name"}
        placeholder={"Input Your Last Name"}
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
      <TextInput
        value={confirmPassword}
        setValue={setConfirmPassword}
        label={"Confirm Password"}
        placeholder={"Confirm Password"}
        required
        inputType={"password"}
      />
    </div>
  );
}
