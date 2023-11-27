import React, { useState } from "react";
import TextInput from "../../../components/Input/TextInput/TextInput";
import Button from "../../../components/Button/Button";
import Dropdown from "../../../components/Input/Dropdown/Dropdown";
import BusinessInformation from "./components/BusinessInformation/BusinessInformation";
import YourProfile from "./components/YourProfile/YourProfile";
import AdditionalUsers from "./components/AdditionalUsers/AdditionalUsers";
import HeaderBreadCrumb from "./components/HeaderBreadCrumb/HeaderBreadCrumb";
import { useAppDispatch } from "../../../redux/store/hooks";
import { createUserSlice } from "../../../redux/features/createUserSlice";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  /** state management */
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  /** brand state management */
  const [brandName, setBrandName] = useState<string>("");
  const [brandType, setBrandType] = useState<string>("");
  const [streetAddress, setStreetAddress] = useState<string>("");
  const [city, setCity] = useState<string>("");
  const [zipCode, setZipCode] = useState<string>("");
  const [taxIDNumber, setTaxIDNumber] = useState<string>("");

  /** Agreement states */
  const [firstAgreement, setFirstAgreement] = useState<string>("");
  const [secondAgreement, setSecondAgreement] = useState<string>("");
  const [thirdAgreement, setThirdAgreement] = useState<string>("");

  /** Additional users state management */
  const [userName, setUserName] = useState<string>("");
  const [userPhoneNumber, setUserPhoneNumber] = useState<string>("");
  const [userEmail, setUserEmail] = useState<string>("");
  const [userPassword, setUserPassword] = useState<string>("");

  const [index, setIndex] = useState<number>(0);

  /** Redux state management */
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  function handleAddData() {
    if (
      firstName === "" ||
      lastName === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === "" ||
      phoneNumber === "" ||
      brandName === "" ||
      brandType === "" ||
      streetAddress === "" ||
      city === "" ||
      zipCode === "" ||
      taxIDNumber === "" ||
      userName === "" ||
      userName === "" ||
      userPassword === "" ||
      userPhoneNumber === ""
    ) {
      alert("Please all fields must be provided");
    } else {
      const newUser = {
        firstName,
        lastName,
        email,
        password,
        confirmPassword,
        phoneNumber,
        brandName,
        brandType,
        streetAddress,
        firstAgreement,
        secondAgreement,
        thirdAgreement,
        city,
        zipCode,
        taxIDNumber,
        additionUser: {
          userName,
          userPhoneNumber,
          userEmail,
          userPassword,
        },
      };
      if (password === confirmPassword) {
        dispatch(createUserSlice.actions.createNewUser(newUser));
        console.log({
          firstName: newUser.firstName,
          lastName: newUser.lastName,
          email: newUser.email,
          password: newUser.password,
          confirmPassword: newUser.confirmPassword,
          brandName: newUser.brandName,
          brandType: newUser.brandType,
          phoneNumber: Number(newUser.phoneNumber),
          streetAddress: newUser.streetAddress,
          city: newUser.city,
          zipCode: newUser.zipCode,
          taxIDNumber: newUser.taxIDNumber,
          additionalUser: {
            userName,
            userPhoneNumber: Number(userPhoneNumber),
            userEmail,
            userPassword,
          },
          firstAgreement: newUser.firstAgreement,
          secondAgreement: newUser.secondAgreement,
          thirdAgreement: newUser.thirdAgreement,
        });
        alert("Please check your browser console");
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword("");
        setConfirmPassword("");
        setPhoneNumber("");
        setBrandName("");
        setBrandType("");
        setStreetAddress("");
        setCity("");
        setUserEmail("");
        setUserName("");
        setUserPhoneNumber("");
        setUserPassword("");
        setZipCode("");
        setTaxIDNumber("");
        setFirstAgreement("");
        setSecondAgreement("");
        setThirdAgreement("");
      } else {
        alert("Password and confirmPassword doesn't match");
      }
    }
  }
  const RegistrationSteps = [
    {
      number: 1,
      heading: "Your Profile",
      description:
        "Enter the login information for your account. You will be able to create additional users after registering.",
      node: (
        <YourProfile
          firstName={firstName}
          setFirstName={setFirstName}
          lastName={lastName}
          setLastName={setLastName}
          email={email}
          setEmail={setEmail}
          password={password}
          setPassword={setPassword}
          phoneNumber={phoneNumber}
          setPhoneNumber={setPhoneNumber}
          confirmPassword={confirmPassword}
          setConfirmPassword={setConfirmPassword}
        />
      ),
    },
    {
      number: 2,
      heading: "Business Information",
      description: "Please, enter information about your company",
      node: (
        <BusinessInformation
          brandName={brandName}
          setBrandName={setBrandName}
          brandType={brandType}
          setBrandType={setBrandType}
          streetAddress={streetAddress}
          setStreetAddress={setStreetAddress}
          city={city}
          setCity={setCity}
          zipCode={zipCode}
          setZipCode={setZipCode}
          taxIDNumber={taxIDNumber}
          setTaxIDNumber={setTaxIDNumber}
          /**Agreements */
          firstAgreement={firstAgreement}
          setFirstAgreement={setFirstAgreement}
          secondAgreement={secondAgreement}
          setSecondAreement={setSecondAgreement}
          thirdAgreement={thirdAgreement}
          setThirdAgreement={setThirdAgreement}
        />
      ),
    },
    {
      number: 3,
      heading: "Create Additional Users",
      description:
        "Please fill in additional information to create extra users",
      node: (
        <AdditionalUsers
          userName={userName}
          setUserName={setUserName}
          userPhoneNumber={userPhoneNumber}
          setUserPhoneNumber={setUserPhoneNumber}
          userEmail={userEmail}
          setUserEmail={setUserEmail}
          userPassword={userPassword}
          setUserPassword={setUserPassword}
        />
      ),
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
    <div className="relative">
      <div className="absolute -z-10 h-fit w-full top-0">
        <div className="bg-gradient-to-l from-purple-700 to-light-purple w-full h-[40vh]"></div>
        <div className="bg-light-blue w-full h-[10vh]"></div>
      </div>
      <div className="text-slate-800 w-full sm:w-[80%] lg:w-[70%] xl:w-[60%] mx-auto z-30">
        <nav className="flex items-center justify-between py-10 text-white">
          <h2
            className="font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Ozone
          </h2>
          <h1 className="text-2xl">Create New Account</h1>
          <p>Contact Us</p>
        </nav>
        <div className="rounded-2xl  shadow-xl bg-white">
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
          <Button
            text="Back to Login"
            type="none"
            leftIcon
            onClick={() => navigate("/auth/sign-in")}
          />

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
              text={index === 2 ? "Submit" : "Next Step"}
              type="filled"
              rightIcon
              onClick={() => {
                index === 2 ? handleAddData() : handleNext(index);
              }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
