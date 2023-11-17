import ethers, { EtherscanProvider } from "ethers";
const useBalance = (walletType: string, walletAddress: string) => {
  if (walletType === "MetaMask") {
    const network = `goerli`;
    const provider = ethers.getDefaultProvider(network);
    const balance = provider.getBalance(walletAddress).then((balance) => {
      const balancedEth = ethers.utils.formatEther(balance);
      return balancedEth;
    });
    return balance;
  }
};
export default useBalance;
