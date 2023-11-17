import fetchKeplrBalance from "./fetchKeplrBalance";
import { fetchMetamaskBalance } from "./fetchMetamaskBalance";
const useBalance = async (walletType: string, walletAddress: string, ethNetwork?: string) => {
  if (walletType === "MetaMask" && ethNetwork) {
    const ethBalance = await fetchMetamaskBalance(walletAddress, ethNetwork);
    return ethBalance;
  } else {
    const keplrBalance = await fetchKeplrBalance(walletAddress);
    return keplrBalance;
  }
};
export default useBalance;
