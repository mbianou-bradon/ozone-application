import React, { useState } from "react";
import { TextInput } from "../../../../../components";
import { useAppDispatch } from "../../../../../redux/store/hooks";
import { createUserSlice } from "../../../../../redux/features/createUserSlice";

type Props = {
  firstName: string;
  setFirstName: React.Dispatch<React.SetStateAction<string>>;
  lastName: string;
  setLastName: React.Dispatch<React.SetStateAction<string>>;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  password: string;
  setPassword: React.Dispatch<React.SetStateAction<string>>;
  phoneNumber: number;
  setPhoneNumber: React.Dispatch<React.SetStateAction<number>>;
  confirmPassword: string;
  setConfirmPassword: React.Dispatch<React.SetStateAction<string>>;
};

export default function YourProfile({
  firstName,
  lastName,
  email,
  phoneNumber,
  password,
  confirmPassword,
  setFirstName,
  setLastName,
  setEmail,
  setPassword,
  setPhoneNumber,
  setConfirmPassword,
}: Props) {
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
        inputType={"number"}
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
