import axios from "axios";
import { ethers } from "ethers";

export const fetchMetamaskBalance = async (walletAddress: string) => {
  try {
    const network = "mainnet"; // Update with the desired Ethereum network
    const provider = new ethers.InfuraProvider(network);
    const balance = await provider.getBalance(walletAddress);
    const ethBalance = Number(balance) / 10 ** 18;
    return ethBalance;
  } catch (error) {
    throw new Error("Error fetching MetaMask balance");
  }
};

export const fetchKeplrBalance = async (walletAddress: string) => {
  try {
    // Replace with the actual API endpoint for Keplr balance
    const response = await axios.get(`https://example.com/keplr/balance/${walletAddress}`);
    return response.data;
  } catch (error) {
    throw new Error("Error fetching Keplr balance");
  }
};
