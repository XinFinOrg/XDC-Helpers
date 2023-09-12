import { validatorConfig } from "../config/index.js";
import Client from "./client.js";

export default class ValidatorClient extends Client {
  constructor(config = {}) {
    config.abi = config?.rpcUrl || validatorConfig.abi;
    config.rpcUrl = config?.rpcUrl || validatorConfig.rpcUrl;
    config.contractAddress =
      config?.contractAddress || validatorConfig.contractAddress;
    config.privateKey = config?.privateKey || validatorConfig.privateKey;
    config.chainId = config?.chainId || validatorConfig.chainId;
    super(config);
  }

  async candidateCount() {
    return this.read("candidateCount");
  }

  async propose(candidate, cap) {
    return this.write("propose", [candidate], cap);
  }

  async vote(candidate, cap) {
    return this.write("vote", [candidate], cap);
  }

  async unvote(candidate, cap) {
    return this.write("unvote", [candidate, cap]);
  }

  async resign(candidate) {
    return this.write("resign", [candidate]);
  }

  async uploadKYC(kychash) {
    return this.write("uploadKYC", [kychash]);
  }

  async getCandidates() {
    return this.read("getCandidates");
  }

  async getGrandMasters() {
    return this.read("getGrandMasters");
  }

  async getCandidateCap() {
    return this.read("getCandidateCap");
  }

  async getCandidateOwner(candidate) {
    return this.read("getCandidateOwner", [candidate]);
  }

  async getVoterCap(candidate, voter) {
    return this.read("getVoterCap", [candidate, voter]);
  }

  async getVoters(candidate) {
    return this.read("getVoters", [candidate]);
  }

  async isCandidate(candidate) {
    return this.read("isCandidate", [candidate]);
  }

  async getWithdrawBlockNumbers() {
    return this.read("getWithdrawBlockNumbers");
  }

  async getWithdrawCap(blockNumber) {
    return this.read("getWithdrawCap", [blockNumber]);
  }

  async voteInvalidKYC(invalidCandidate) {
    return this.read("voteInvalidKYC", [invalidCandidate]);
  }

  async invalidPercent(invalidCandidate) {
    return this.read("invalidPercent", [invalidCandidate]);
  }

  async getOwnerCount() {
    return this.read("getOwnerCount");
  }

  async getLatestKYC() {
    return this.read("getLatestKYC");
  }

  async getHashCount() {
    return this.read("getHashCount");
  }

  async getHashCount() {
    return this.read("getHashCount");
  }

  async withdraw(blockNumber, index) {
    return this.write("withdraw", [blockNumber, index]);
  }

  async getOwnerToCandidateLength() {
    return this.read("getOwnerToCandidateLength");
  }
}
