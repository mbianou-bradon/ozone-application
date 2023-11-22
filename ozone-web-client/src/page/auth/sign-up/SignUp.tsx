import React, { useState } from "react";
import TextInput from "../../../components/Input/TextInput/TextInput";
import Button from "../../../components/Button/Button";
import Dropdown from "../../../components/Input/Dropdown/Dropdown";

export default function SignUp() {
  /** state management */
  const [value, setValue] = useState<string>("");
  return (
    <div>
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
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <TextInput
            value={""}
            setValue={setValue}
            label={"Brand Name"}
            placeholder={"Input Your Brand Name"}
            required
            inputType={"text"}
          />
          <Dropdown
            value={""}
            setValue={setValue}
            label={"Last Name"}
            placeholder={"Input Your Last Name"}
            required
            data={[]}
          />
          <TextInput
            value={""}
            setValue={setValue}
            label={"Street Address"}
            placeholder={"Input Your Street Address"}
            required
            inputType={"text"}
          />
          <TextInput
            value={""}
            setValue={setValue}
            label={"City"}
            placeholder={"Input City"}
            required
            inputType={"text"}
          />
          <TextInput
            value={""}
            setValue={setValue}
            label={"Zip Code"}
            placeholder={"Input Zip Code"}
            required
            inputType={"text"}
          />
          <TextInput
            value={""}
            setValue={setValue}
            label={"Tax ID Number"}
            placeholder={"Input Tax ID Number"}
            required
            inputType={"text"}
          />
        </div>

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
