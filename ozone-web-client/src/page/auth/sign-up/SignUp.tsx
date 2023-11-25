import React, { useState } from "react";
import TextInput from "../../../components/Input/TextInput/TextInput";
import Button from "../../../components/Button/Button";
import Dropdown from "../../../components/Input/Dropdown/Dropdown";
import BusinessInformation from "./components/BusinessInformation/BusinessInformation";

export default function SignUp() {
  /** state management */
  const [value, setValue] = useState<string>("");
  return (
    <div className="text-slate-800 w-[70%] mx-auto">
      <div className="text-center">
        <h3 className="text-neutral-gray">Step 1</h3>
        <h1 className="text-2xl text-dark-blue font-semibold my-2">
          Your Profile
        </h1>
        <p className="w-[70%] mx-auto">
          Enter the login information for your account. You will be able to
          create additional users after registering.{" "}
        </p>
      </div>

      <form action="">
        <BusinessInformation />

        <div className="flex items-center justify-between my-10">
          <Button text="Back to Login" type="none" leftIcon />

          <div className="flex gap-3">
            <Button text="Previous Step" type="bordered" leftIcon />
            <Button text="Next Step" type="filled" rightIcon />
          </div>
        </div>
      </form>
    </div>
  );
}
