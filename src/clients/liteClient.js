import Client from "./client.js";
import { liteConfig } from "../config/index.js";

export default class LiteClient extends Client {
  constructor(config = {}) {
    config.abi = config?.rpcUrl || liteConfig.abi;
    config.rpcUrl = config?.rpcUrl || liteConfig.rpcUrl;
    config.contractAddress =
      config?.contractAddress || liteConfig.contractAddress;
    config.privateKey = config?.privateKey || liteConfig.privateKey;
    config.chainId = config?.chainId || liteConfig.chainId;
    super(config);
  }

  async MODE() {
    return this.read("MODE");
  }
}
