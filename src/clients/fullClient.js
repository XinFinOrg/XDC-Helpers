import Client from "./client.js";
import { fullConfig } from "../config/index.js";

export default class FullClient extends Client {
  constructor(config = {}) {
    config.abi = config?.abi || fullConfig.abi;
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

  async INIT_STATUS() {
    return this.read("INIT_STATUS");
  }
  async INIT_GAP() {
    return this.read("INIT_GAP");
  }
  async INIT_EPOCH() {
    return this.read("INIT_EPOCH");
  }

  async receiveHeader(headers) {
    return this.write("receiveHeader", [headers]);
  }

  async getHeader(blockHash) {
    return this.read("getHeader", [blockHash]);
  }

  async getHeaderByNumber(number) {
    return this.read("getHeaderByNumber", [number]);
  }

  async getLatestBlocks() {
    return this.read("getLatestBlocks");
  }

  async getCurrentValidators() {
    return this.read("getCurrentValidators");
  }
}
