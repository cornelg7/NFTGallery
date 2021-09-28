const main = async () => {
  const nftContractFactory = await hre.ethers.getContractFactory('NFTGallery');
  const nftContract = await nftContractFactory.deploy();
  await nftContract.deployed();
  console.log("Contract deployed to:", nftContract.address);

  for (let i = 0; i < 17; i++) {
    console.log(`Minting NFT #${i}...`)
    // Call the function.
    let txn = await nftContract.makeAnEpicNFT()
    // Wait for it to be mined.
    await txn.wait();
    let numberOfMintedNFTs = await nftContract.getTotalNFTsMintedSoFar();
    console.log(numberOfMintedNFTs);
    console.log('----------------------');
  }
};

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

runMain();