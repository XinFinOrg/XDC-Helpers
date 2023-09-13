# XDC-Helpers

XDC-Helpers is a robust Node.js SDK designed to facilitate interactions with the validator、liteCSC and fullCSC contracts on the chain. With a streamlined setup process and easy-to-use functionalities, it simplifies the process of requesting the validator on the chain. Here's a quick guide to get you started:

## Installation

Install the package using npm with the following command:

```shell
npm install xdc-helpers
```

## Quick Start

Get started swiftly with a few simple steps. First, import the necessary modules and set up your client. Next, begin consuming actions as demonstrated below:

```javascript
// Step 1: Import the necessary modules.
import { ValidatorClient } from "xdc-helpers";

// Step 2: Set up your client with the default configurations.
const validator = new ValidatorClient();

// Step 3: Begin consuming actions. Here's how to get the candidates:
const candidates = await validator.getCandidates();
```

The configurations are set to default values initially. To view or modify them, click [here](https://github.com/XinFinOrg/XDC-Helpers/blob/the-first-version-for-sdk/src/config/index.js "defaultConfig").

## Customization

Customize your setup by configuring various parameters such as RPC URL, chain ID, ABI, contract address, and your wallet's private key. Here's a template to help you set up a custom configuration:

```javascript
import { ValidatorClient } from "xdc-helpers";

const config = {
  rpcUrl: "https://....", // Specify the RPC URL of the chain
  chainId: 0, // Indicate the chain ID of the chain
  contractAddress: "0x....", // Provide the contract address of the client
  privateKey: "0x.....", // Enter the private key of your wallet
};

const validator = new ValidatorClient({ ...config });
```

Feel free to modify the `config` object with your values to tailor the setup to your needs.
