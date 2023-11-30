import { useQuery } from "react-query";
import { fetchMetamaskBalance, fetchKeplrBalance } from "./fetchBalance";

const useBalance = (walletType: string, walletAddress: string) => {
  return useQuery(["balance", walletType, walletAddress], async () => {
    if (walletType === "MetaMask") {
      return fetchMetamaskBalance(walletAddress);
    } else if (walletType === "Keplr") {
      return fetchKeplrBalance(walletAddress);
    }
  });
};

export default useBalance;
