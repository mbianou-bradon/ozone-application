import React, { useState } from "react";
import TextInput from "../../../components/Input/TextInput/TextInput";
import Button from "../../../components/Button/Button";
import Dropdown from "../../../components/Input/Dropdown/Dropdown";
import BusinessInformation from "./components/BusinessInformation/BusinessInformation";
import YourProfile from "./components/YourProfile/YourProfile";
import AdditionalUsers from "./components/AdditionalUsers/AdditionalUsers";
import HeaderBreadCrumb from "./components/HeaderBreadCrumb/HeaderBreadCrumb";

export default function SignUp() {
  /** state management */
  const [index, setIndex] = useState<number>(0);
  const RegistrationSteps = [
    {
      number: 1,
      heading: "Your Profile",
      description:
        "Enter the login information for your account. You will be able to create additional users after registering.",
      node: <YourProfile />,
    },
    {
      number: 2,
      heading: "Business Information",
      description: "Please, enter information about your componany",
      node: <BusinessInformation />,
    },
    {
      number: 3,
      heading: "Create Additional Users",
      description:
        "Please fill in additional information to create extra users",
      node: <AdditionalUsers />,
    },
  ];

  function handlePrev(index: number) {
    if (index !== 0) {
      setIndex(index - 1);
    }
  }

  function handleNext(index: number) {
    if (index + 1 > RegistrationSteps.length) {
      setIndex(RegistrationSteps.length);
    } else {
      setIndex(index + 1);
    }
  }

  return (
    <div className="text-slate-800 w-full sm:w-[60%] mx-auto my-10">
      <div className="rounded-2xl overflow-hidden shadow-xl">
        <HeaderBreadCrumb index={index} setIndex={setIndex} />
        <div className="text-center py-10">
          <h3 className="text-neutral-gray">
            Step {RegistrationSteps[index].number}
          </h3>
          <h1 className="text-2xl text-dark-blue font-semibold my-2">
            {RegistrationSteps[index].heading}
          </h1>
          <p className="w-[55%] mx-auto">
            {RegistrationSteps[index].description}
          </p>
        </div>

        <form action="" className="px-20 pb-10">
          {RegistrationSteps[index].node}
        </form>
      </div>

      <div className="flex items-center justify-between my-10">
        <Button text="Back to Login" type="none" leftIcon />

        <div className="flex gap-3">
          {index !== 0 && (
            <Button
              text="Previous Step"
              type="bordered"
              leftIcon
              onClick={() => handlePrev(index)}
            />
          )}
          <Button
            text="Next Step"
            type="filled"
            rightIcon
            onClick={() => handleNext(index)}
          />
        </div>
      </div>
    </div>
  );
}
