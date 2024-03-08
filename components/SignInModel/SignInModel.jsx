"use client";
import { Button, Input } from "@nextui-org/react";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "@/assets/images/logo.svg";
import EyeSlashFilledIcon from "@/assets/images/off-eye.svg";
import EyeFilledIcon from "@/assets/images/on-eye.svg";

const SignInModel = ({ setEmail, setPassword, handleLogin, error }) => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => setIsVisible(!isVisible);
  return (
    <div className="w-[360px]  border-1 border-solid border-[#ddd] rounded-[24px] bg-[#fff] p-[25px] shadow-lg shadow-neutral-400/40 ">
      <div className="w-[64px] h-[64px] rounded-[100%] bg-[#f1f2f6] p-[10px] flex justify-center items-center">
        <Image src={Logo} alt="logo" className="w-[80%] opacity-70" />
      </div>
      <div className="my-[16px]">
        <h1 className="text-[22px] opacity-75  tracking-widest font-semibold text-[#000] mb-1">
          Welcome to Metamask
        </h1>
        <p className="text-[14px] font-normal	text-[grey]">
          Please sign in or sign up below.
        </p>
      </div>

      <div className="flex w-full mb-2">
        <Input
          variant="bordered"
          type="email"
          label="Email"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="w-full">
        <Input
          label="Password"
          variant="bordered"
          onChange={(e) => setPassword(e.target.value)}
          endContent={
            <button
              className="focus:outline-none absolute top-[17px] right-[6px] cursor-pointer"
              type="button"
              onClick={toggleVisibility}
            >
              {isVisible ? (
                <Image
                  src={EyeFilledIcon}
                  alt="eye-icon"
                  className="text-2xl text-default-400 pointer-events-none opacity-75 !max-w-[auto]"
                  width={20}
                  height={20}
                />
              ) : (
                <Image
                  src={EyeSlashFilledIcon}
                  alt="eye-icon"
                  className="text-2xl text-default-400 pointer-events-none opacity-75  !max-w-[auto]"
                  width={20}
                  height={20}
                />
              )}
            </button>
          }
          type={isVisible ? "text" : "password"}
        />
        {error && <p className="my-3 mx-1 text-red-600 text-xs">{error}</p>}
        <div className="my-[16px]">
          <Button
            onClick={handleLogin}
            className="bg-[#000] text-[#fff] capitalize w-[100%] text-[16px] font-medium hover:bg-[#ecf0f1] hover:text-[#000]"
          >
            Continue with Email
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SignInModel;
