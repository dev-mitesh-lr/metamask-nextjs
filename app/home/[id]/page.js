"use client";
import { USER_API_ROUTES, apiClient } from "@/lib";
import { Button } from "@nextui-org/react";
import { useParams, useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";
import WalletCard from "@/components/WalletCard/WalletCard";

const Home = () => {
  const params = useParams();
  const router = useRouter();
  const [userInfo, setUserInfo] = useState();

  const host =
    typeof window !== "undefined" ? window.location.host : "defaultHost";

  const sdkOptions = {
    logging: { developerMode: false },
    checkInstallationImmediately: false,
    dappMetadata: {
      name: "Next-Metamask-Boilerplate",
      url: host, // using the host constant defined above
    },
  };
  const getUserInfo = async () => {
    const response = await apiClient(
      USER_API_ROUTES.UserById(params?.id),
      "GET"
    );
    setUserInfo(response);
  };
  useEffect(() => {
    getUserInfo();
  }, [params?.id]);
  const handleLogout = () => {
    router.push("/");
  };
  return (
    <div className="flex min-h-[100vh] justify-center items-center bg-gradient-to-r from-orange-50 from-10% via-red-200 via-50% to-orange-50 to-100%">
      <Button
        onClick={handleLogout}
        className="absolute top-0 right-0 m-3 text-[12px] rounded-[100px] hover:bg-[#000] hover:text-[#fff] shadow-lg shadow-neutral-400/40"
      >
        Logout
      </Button>
      <WalletCard rewardPoint={userInfo?.rewardPoints} />
    </div>
  );
};

export default Home;
