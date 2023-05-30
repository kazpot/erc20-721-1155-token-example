require('dotenv').config();
import { HardhatUserConfig } from 'hardhat/config';
import '@nomicfoundation/hardhat-toolbox';

const { ETH_GOERLI_URL, POLYGON_MUMBAI_URL, OASIS_EMERALD_URL, PRIVATE_KEY } =
  process.env;
const config: HardhatUserConfig = {
  solidity: '0.8.17',
  defaultNetwork: 'goerli',
  networks: {
    hardhat: {},
    goerli: {
      url: ETH_GOERLI_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    mumbai: {
      url: POLYGON_MUMBAI_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
    emerald: {
      url: OASIS_EMERALD_URL,
      accounts: [`0x${PRIVATE_KEY}`],
    },
  },
};

export default config;
