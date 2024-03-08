"use client";

import { SignInModel } from "@/components/SignInModel";
import { USER_API_ROUTES, apiClient } from "@/lib";
import { Button, useDisclosure } from "@nextui-org/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

export default function Home() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("md");

  const [userInfo, setUserInfo] = useState();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleOpen = (size) => {
    setSize(size);
    onOpen();
  };
  useEffect(() => {
    handleOpen();
  }, []);

  const handleLogin = async () => {
    try {
      if (email && password) {
        setError("");
        const response = await apiClient(USER_API_ROUTES.LOGIN, "POST", {
          email,
          password,
        });
        if (response) {
          console.log("LogIn successfully");
          setUserInfo(response);
          router.push(`/home/${response?.userInfo?._id}`);
        }
      } else {
        setError("Email and Password fields are required* ");
      }
    } catch (error) {
      console.log("error: ", error);
    }
  };
  return (
    <main className="min-h-[100vh] bg-gradient-to-r from-orange-50/50 from-5% via-amber-100/50 via-40% to-pink-300/50 to-100% p-[15px] ">
      <Button
        className="float-right	text-[12px] rounded-[100px] hover:bg-[#000] hover:text-[#fff] shadow-lg shadow-neutral-400/40"
        onClick={handleOpen}
      >
        Sign-in/Sign-up
      </Button>
      <div className="h-[100%] w-[100%] flex  justify-center min-h-[80vh] items-center">
        <SignInModel
          size={size}
          onOpen={onOpen}
          isOpen={isOpen}
          onClose={onClose}
          setPassword={setPassword}
          setEmail={setEmail}
          handleLogin={handleLogin}
          error={error}
        />
      </div>
    </main>
  );
}
