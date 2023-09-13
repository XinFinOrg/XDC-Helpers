import Client from "./client.js";
import { liteConfig } from "../config/index.js";

export default class LiteClient extends Client {
  constructor(config = {}) {
    config.abi = liteConfig.abi;
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

  async commitHeaderByNumber(number, headers) {
    return this.write("receiveHeader", [number, headers]);
  }

  async commitHeader(hashToCommit, headers) {
    return this.write("commitHeader", [hashToCommit, headers]);
  }

  async getUnCommittedHeader(blockHash) {
    return this.read("getUnCommittedHeader", [blockHash]);
  }

  async getCurrentEpochBlockByIndex(idx) {
    return this.read("getCurrentEpochBlockByIndex", [idx]);
  }
}
