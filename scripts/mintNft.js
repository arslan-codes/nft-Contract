const hre = require("hardhat");

async function main() {
  const Nft = await hre.ethers.getContractAt(
    "MyToken",
    "0xdB97d9053Ea96B313A8B6721ca89046a0a90981a"
  );

  const [deployer] = await hre.ethers.getSigners();
  console.log("Deployer Address:", deployer.address);

  const initialBalance = await Nft.balanceOf(deployer.address);
  console.log("Initial Balance:", initialBalance.toString());

  // Mint the NFT
  const metadataURI =
    "https://white-ready-chimpanzee-987.mypinata.cloud/ipfs/QmXMXJyJpAbBfJPhu44aS2BXhycWhU3sK1AURs5Rv1hebh";
  const tx = await Nft.safeMint(deployer.address, metadataURI);
  console.log("Mint Transaction Hash:", tx.hash);
  await tx.wait();

  const updatedBalance = await Nft.balanceOf(deployer.address);
  console.log("Updated Balance:", updatedBalance.toString());

  const tokenId = 0;
  const owner = await Nft.ownerOf(tokenId);
  console.log("Owner of Token ID 0:", owner);

  const uri = await Nft.tokenURI(tokenId);
  console.log("Token URI:", uri);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
