# ERC20, ERC721, ERC1155 example

- ERC20, ERC721, ERC1155 example contracts
- Deployment to goerli testnet with hardhat

## Install

```
$ npm install -g yarn
```

## Create .env file

```
API_URL={rpc url}
PRIVATE_KEY={private key in hex}
```

## Compile smart contracts

```
$ yarn compile
```

## Deploy to goerli testnet

```
// erc20
$ yarn deploy:erc20

// erc721
$ yarn deploy:erc721

// erc1155
$ yarn deploy:erc20
```

## Test

```
$ yarn test
```
