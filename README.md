# XDC-Helpers

### Overview

```javascript
import { ValidatorClient } from "xdc-helpers";

const validator = new ValidatorClient();
const candidates = await validator.getCandidates();
```

All configurations have default values, if you want to check,click
[here](https://github.com/XinFinOrg/XDC-Helpers/blob/the-first-version-for-sdk/src/config/index.js "defaultConfig")

### Customize

```javascript
import { ValidatorClient } from "xdc-helpers";

const config = {
  rpcUrl: "https://....", // rpc url of the chain
  chainId: 0, // chain id of the chain
  abi: [], // abi of the contract
  contractAddress: "0x....", // contract address of the client
  privateKey: "0x.....", // private key of your wallet
};
const validator = new ValidatorClient({ ...config });
```

