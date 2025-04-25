// scripts/deploy.js

const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("🚀 Deploying contracts with the account:", deployer.address);

  const BuyMeCoffee = await hre.ethers.getContractFactory("0x7A6fd0Da4A063C5563546A9C86B1328cb1d6f4b5");
  const contract = await BuyMeCoffee.deploy();
  await contract.waitForDeployment();

  console.log("✅ BuyMeCoffee deployed to:", await contract.getAddress());
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
