import React, { useState } from "react";
import { TextInput } from "../../../../../components";

type Props = {
  userName: string;
  setUserName: React.Dispatch<React.SetStateAction<string>>;
  userPhoneNumber: number;
  setUserPhoneNumber: React.Dispatch<React.SetStateAction<number>>;
  userEmail: string;
  setUserEmail: React.Dispatch<React.SetStateAction<string>>;
  userPassword: string;
  setUserPassword: React.Dispatch<React.SetStateAction<string>>;
};

export default function AdditionalUsers({
  userEmail,
  userName,
  userPassword,
  userPhoneNumber,
  setUserEmail,
  setUserName,
  setUserPassword,
  setUserPhoneNumber,
}: Props) {
  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <TextInput
          value={userName}
          setValue={setUserName}
          label={"Username"}
          placeholder={"Input Your userame"}
          required
          inputType={"text"}
        />
        <TextInput
          value={userEmail}
          setValue={setUserEmail}
          label={"Email"}
          placeholder={"Input Your Email"}
          required
          inputType={"email"}
        />
        <TextInput
          value={userPhoneNumber}
          setValue={setUserPhoneNumber}
          label={"Phone Number"}
          placeholder={"Input Your Phone Number"}
          required
          inputType={"number"}
        />
        <TextInput
          value={userPassword}
          setValue={setUserPassword}
          label={"Password"}
          placeholder={"Create Password"}
          required
          inputType={"password"}
        />
      </div>
    </div>
  );
}
