import Client from "./client.js";
import { fullConfig } from "../config/index.js";

export default class FullClient extends Client {
  constructor(config = {}) {
    config.abi = config?.rpcUrl || fullConfig.abi;
    config.rpcUrl = config?.rpcUrl || fullConfig.rpcUrl;
    config.contractAddress =
      config?.contractAddress || fullConfig.contractAddress;
    config.privateKey = config?.privateKey || fullConfig.privateKey;
    config.chainId = config?.chainId || fullConfig.chainId;
    super(config);
  }

  async MODE() {
    return this.read("MODE");
  }
}
