import { ChangeEvent, useCallback, useState } from "react";
import Radio from "@/components/Radio";
import useBalance from "./useBalance";

export default function Home() {
  const [walletType, setWalletType] = useState("");
  const [walletAddress, setWalletAddress] = useState("");
  const { data: balance, isLoading, isError } = useBalance(walletType, walletAddress);

  const handleRadioChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWalletType(e.target.value);
  };

  const handleChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setWalletAddress(e.target.value);
  }, []);

  const onSubmitClick = () => {
    // Call useBalance to trigger the query
    useBalance(walletType, walletAddress);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="flex items-center justify-center flex-col gap-2">
        <div className="flex gap-2">
          <Radio
            value="MetaMask"
            checked={walletType === "MetaMask"}
            onChange={handleRadioChange}
          >
            MetaMask
          </Radio>

          <Radio
            value="Keplr"
            checked={walletType === "Keplr"}
            onChange={handleRadioChange}
          >
            Keplr
          </Radio>
        </div>

        <div className="flex gap-2">
          <input
            type="text"
            placeholder="Input wallet address"
            onChange={handleChange}
          />
          <button
            type="button"
            className="bg-white text-pink"
            onClick={onSubmitClick}
          >
            Check Balance
          </button>
        </div>

        {isLoading && <p>Loading...</p>}
        {isError && <p>Error fetching balance</p>}
        {balance !== undefined && <p>{balance.toFixed(1)}</p>}
      </div>
    </main>
  );
}
