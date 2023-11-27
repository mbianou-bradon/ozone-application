import React, { useState } from "react";
import { Button, TextInput } from "../../../components";
import { Link } from "react-router-dom";

export default function SignIn() {
  /** State management */
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  return (
    <div className="text-slate-800 w-full sm:w-[70%] lg:w-[60%] xl:w-[50%] mx-auto my-10">
      <div className="rounded-2xl  shadow-xl p-10">
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
  );
}
