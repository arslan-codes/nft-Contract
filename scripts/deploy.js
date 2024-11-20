const hre = require("hardhat");

async function main() {
  const Contract = await hre.ethers.getContractFactory("MyToken");
  const contract = await Contract.deploy();
  await contract.deployed();
  console.log("contract deployed with address", contract.address);
}

main().catch((Error) => {
  console.log(Error.message);
});
