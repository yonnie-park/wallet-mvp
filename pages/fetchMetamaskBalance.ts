import { BaseProvider } from "@ethersproject/providers";

export interface FetchMetamaskBalanceProps {
  provider: BaseProvider;
  address: string;
}
export const fetchMetamaskBalance = async ({ provider, address }: FetchMetamaskBalanceProps) => {
  const result = await provider.getBalance(address);
  return {
    balance: result.toString(),
  };
};
