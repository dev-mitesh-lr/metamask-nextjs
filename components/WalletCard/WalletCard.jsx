import React, { useState } from "react";
import Ethereum from "@/assets/images/ethereum-eth-logo.svg";
import { ethers } from "ethers";
import { Button } from "@nextui-org/react";
import Image from "next/image";

const WalletCard = ({ rewardPoint }) => {
  const [errorMessage, setErrorMessage] = useState(null);
  const [defaultAccount, setDefaultAccount] = useState(null);
  const [userBalance, setUserBalance] = useState(null);
  const connectwalletHandler = () => {
    if (window.ethereum) {
      const provider = new ethers.BrowserProvider(window.ethereum);
      provider.send("eth_requestAccounts", []).then(async () => {
        const data = await provider.getSigner();
        await accountChangedHandler(data, provider);
      });
    } else {
      setErrorMessage("Please Install Metamask!!!");
    }
  };
  const accountChangedHandler = async (newAccount, provider) => {
    const address = await newAccount.getAddress();
    setDefaultAccount(address);
    const balance = await provider.getBalance(address);
    setUserBalance(ethers.formatEther(balance));
    await getuserBalance(address, provider);
  };
  const getuserBalance = async (address, provider) => {
    const balance = await provider.getBalance(address, "latest");
  };
  const handleDisconnect = async () => {
    setDefaultAccount(null);
    setUserBalance(null);
    setErrorMessage(null);
  };
  return (
    <div className="WalletCard w-[450px] rounded-[10px] p-[24px] shadow-lg">
      <div className="flex items-center justify-between">
        <h3 className=" text-[25px] opacity-75 font-bold tracking-widest text-[#fff]">
          Welcome to Metamask
        </h3>
        <Image
          width={30}
          height={30}
          src={Ethereum}
          className="App-logo"
          alt="logo"
        />
      </div>
      <div className=" mt-[30px]">
        <div className="displayAccount flex">
          <div className="balanceDisplay w-[30%]">
            <span className="text-[25px] font-semibold text-[#fff]">
              {userBalance ?? "0.0"}
            </span>
            <h3 className="text-[14px] text-[#fff] font-semibold ">
              Wallet Amount
            </h3>
          </div>
          <div className="balanceDisplay w-[30%] text-[#fff]">
            <span className="text-[25px] font-semibold text-center text-[#fff]">
              {rewardPoint ?? "0"}
            </span>
            <h3 className="text-[14px] font-semibold ">Reward Points</h3>
          </div>
        </div>
        <div className="my-[16px]">
          <h4 className="walletAddress text-[14px] text-[#fff] font-semibold ">
            Address
          </h4>
          <p className="text-[16px] text-[#fff] break-all	whitespace-normal	">
            {defaultAccount}
          </p>
        </div>
      </div>

      <div className="mt-[20px] text-right">
        <Button
          onClick={connectwalletHandler}
          className="mr-2 bg-[#02196a] text-[#fff]"
        >
          {defaultAccount ? "Connected!!" : "Connect"}
        </Button>
        <Button onClick={handleDisconnect} className="bg-[#000] text-[#fff]">
          Disconnect
        </Button>
      </div>
      <div className="mt-[16px] text-right text-[red] text-[14px]">
        {errorMessage}
      </div>
    </div>
  );
};
export default WalletCard;
