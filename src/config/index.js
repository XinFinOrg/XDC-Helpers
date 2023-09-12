import validatorABI from "../abi/validatorABI.json" assert { type: "json" };
import liteABI from "../abi/liteABI.json" assert { type: "json" };
import fullABI from "../abi/fullABI.json" assert { type: "json" };
//all is default config

export const validatorConfig = {
  contractAddress: "0x0000000000000000000000000000000000000088",
  rpcUrl: "https://devnetstats.apothem.network/subnet",
  chainId: 9507,
  abi: validatorABI,
  privateKey:
    "0x1234567890123456789012345678901234567890123456789012345678901234",
};

export const fullConfig = {
  contractAddress: "0x0000000000000000000000000000000000000088",
  rpcUrl: "https://devnetstats.apothem.network/devnet",
  chainId: 9507,
  abi: fullABI,
  privateKey:
    "0x1234567890123456789012345678901234567890123456789012345678901234",
};

export const liteConfig = {
  contractAddress: "0x0000000000000000000000000000000000000088",
  rpcUrl: "https://devnetstats.apothem.network/devnet",
  chainId: 9507,
  abi: liteABI,
  privateKey:
    "0x1234567890123456789012345678901234567890123456789012345678901234",
};
