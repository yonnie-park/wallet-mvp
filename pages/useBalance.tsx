import fetchKeplrBalance from "./fetchKeplrBalance";
import { fetchMetamaskBalance } from "./fetchMetamaskBalance";
const useBalance = async (walletType: string, walletAddress: string) => {
  if (walletType === "MetaMask") {
    const ethBalance = await fetchMetamaskBalance(walletAddress);
    return ethBalance;
  } else {
    const keplrBalance = await fetchKeplrBalance(walletAddress);
    return keplrBalance;
  }
};
export default useBalance;
