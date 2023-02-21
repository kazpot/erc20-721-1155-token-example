# ERC20, ERC721, ERC1155 example

- ERC20, ERC721, ERC1155 example contracts
- Deployment to goerli testnet with hardhat

## Install

```
$ npm install -g yarn
```

## Create .env file

```
ETH_GOERLI_URL={rpc url for ethereum goerli}
POLYGON_MUMBAI_URL={rpc url for polygon mumbai}
PRIVATE_KEY={private key in hex}
```

## Compile smart contracts

```
$ yarn compile
```

## Deploy to goerli testnet

```
// erc20
$ yarn deploy:eth:goerli:erc20

// erc721
$ yarn deploy:eth:goerli:erc721

// erc1155
$ yarn deploy:eth:goerli:erc1155
```

## Test

```
$ yarn test
```
