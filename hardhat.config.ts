require("dotenv").config();
import "@nomicfoundation/hardhat-toolbox";

const {
  ETH_GOERLI_URL,
  ETH_SEPOLIA_URL,
  POLYGON_MUMBAI_URL,
  OASIS_EMERALD_URL,
  FUJI_URL,
  FUJI_LT0_URL,
  PRIVATE_KEY,
  FUJI_PRIVATE_KEY,
} = process.env;

module.exports = {
  defaultNetwork: "hardhat",
  networks: {
    local: {
      chainId: 31337,
      url: "http://127.0.0.1:8545/",
      account: PRIVATE_KEY,
    },
    goerli: {
      url: ETH_GOERLI_URL,
      accounts: [PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    sepolia: {
      url: ETH_SEPOLIA_URL,
      accounts: [PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    mumbai: {
      url: POLYGON_MUMBAI_URL,
      accounts: [PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    emerald: {
      url: OASIS_EMERALD_URL,
      accounts: [PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 8000000000,
    },
    fuji: {
      url: FUJI_URL,
      accounts: [FUJI_PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 225000000000,
    },
    lt0: {
      url: FUJI_LT0_URL,
      accounts: [FUJI_PRIVATE_KEY],
      gas: 2100000,
      gasPrice: 225000000000,
    },
  },
  solidity: {
    version: "0.8.17",
    settings: {
      optimizer: {
        enabled: true,
        runs: 200,
      },
    },
  },
};
