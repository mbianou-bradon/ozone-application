import React, { useState } from "react";
import { Button, TextInput } from "../../../components";
import { Link, useNavigate } from "react-router-dom";

export default function SignIn() {
  /** State management */
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  return (
    <div className="w-full relative">
      <div className="absolute -z-10 h-fit w-full">
        <div className="bg-gradient-to-l from-purple-700 to-light-purple w-full h-[40vh]"></div>
        <div className="bg-light-blue w-full h-[10vh]"></div>
      </div>

      <div className="text-slate-800 w-full sm:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto z-20 ">
        <nav className="flex items-center justify-between py-10 text-white">
          <h2
            className="font-bold cursor-pointer"
            onClick={() => navigate("/")}
          >
            Ozone
          </h2>
          <h1 className="text-2xl">Connect to Your Account</h1>
          <p>Contact Us</p>
        </nav>
        <div className="rounded-2xl  shadow-xl mt-5 p-10 bg-white">
          <form action="">
            <div className="mb-6">
              <h1 className="text-3xl font-bold mb-3">Login</h1>
              <p>Enter your email and password to access the service</p>
            </div>
            <div className="flex flex-col gap-5">
              <TextInput
                value={email}
                setValue={setEmail}
                label={"Email"}
                placeholder={"Input Your Email Address"}
                required
                inputType={"text"}
              />

              <TextInput
                value={password}
                setValue={setPassword}
                label={"Password"}
                placeholder={"Input Your Password"}
                required
                inputType={"password"}
              />
            </div>

            <div className="text-sm flex items-center justify-between my-5">
              <p>
                Don't have an account?{" "}
                <span className="text-dark-purple underline hover:no-underline cursor-pointer">
                  <Link to={"/auth/sign-up"}>Sign Up</Link>
                </span>
              </p>

              <p>
                <span className="text-dark-purple underline hover:no-underline cursor-pointer">
                  <Link to={"/auth/sign-up"}>Forgot Password?</Link>
                </span>
              </p>
            </div>

            <div className="flex items-center justify-end mt-10 mb-5">
              <Button type="filled" text="Sign in" rightIcon />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
