import {
  createPublicClient,
  createWalletClient,
  http,
  defineChain,
} from "viem";

import { privateKeyToAccount } from "viem/accounts";

export default class Client {
  constructor(config = {}) {
    this.rpcUrl = config?.rpcUrl || "";
    this.contractAddress = config?.contractAddress || "";
    this.account = privateKeyToAccount(config?.privateKey || "");
    this.abi = config?.abi || "";

    const chain = defineChain({
      id: Number(config.chainId),
      name: "XDC",
      network: "XDC",
      nativeCurrency: {
        decimals: 18,
        name: "XDC",
        symbol: "XDC",
      },
      rpcUrls: {
        default: {
          http: [this.rpcUrl],
        },
      },
    });

    this.publicClient = createPublicClient({
      chain: chain,
      transport: http(),
    });
    this.walletClient = createWalletClient({
      chain: chain,
      transport: http(),
    });
  }

  async write(functionName, args = [], value = 0) {
    const { walletClient, contractAddress, account, abi } = this;
    return await walletClient.writeContract({
      address: contractAddress,
      abi,
      functionName,
      args,
      account,
      value,
    });
  }

  async read(functionName, args = []) {
    const { publicClient, contractAddress, abi } = this;
    return publicClient.readContract({
      address: contractAddress,
      abi,
      functionName,
      args,
    });
  }
}
