import { ethers } from "hardhat";

async function main() {
  const factory = await ethers.getContractFactory("ArtNft");
  const [owner] = await ethers.getSigners();
  const contract = await factory.deploy();

  await contract.deployed();

  console.log("Contract deployed to: ", contract.address);
  console.log("Contract deployed by: ", owner.address, "\n");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
