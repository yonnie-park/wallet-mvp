import Image from "next/image";
import { Inter } from "next/font/google";
import { ChangeEvent, useCallback, useState } from "react";
import Radio from "@/components/Radio";
import useBalance from "./useBalance";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const [walletType, setWalletType] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const [balance, setBalance] = useState(0);
  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWalletType(e.target.value);
  };
  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const inputAddress = e.target.value;
    setWalletAddress(inputAddress);
  }, []);

  const onSubmitClick = async () => {
    const ethBalance = await useBalance(walletType, walletAddress);
    setBalance(ethBalance);
  };
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <div className={`flex items-center justify-center flex-col gap-2`}>
        Is Your Wallet FAT?
        <div className={`flex gap-2 cur`}>
          <Radio
            value={"MetaMask"}
            checked={walletType === `MetaMask`}
            onChange={handleRadioChange}
          >
            MetaMask
          </Radio>

          <Radio value={"Keplr"} checked={walletType === "Keplr"} onChange={handleRadioChange}>
            Keplr
          </Radio>
        </div>
        <div className={"flex gap-2"}>
          <input type={`text`} placeholder={`input wallet address`} onChange={handleChange} />
          <button type={"submit"} className={`bg-white text-pink`} onClick={() => onSubmitClick()}>
            check balance
          </button>
        </div>
        {balance}
        <div className={`flex gap-2`}></div>
      </div>
    </main>
  );
}
