import { ethers } from "ethers";

export const fetchMetamaskBalance = async (walletAddress: string) => {
  const network = `goerli`;
  const provider = new ethers.InfuraProvider(network);
  const balance = await provider.getBalance(walletAddress);
  const ethBalance = Number(balance) / 10 ** 18;
  return ethBalance;
};