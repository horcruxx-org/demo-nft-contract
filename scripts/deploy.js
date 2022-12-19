async function main() {
  // We get the contract to deploy
  const MangoSeries = await ethers.getContractFactory("MangoSeries");
  const mangoSeries = await MangoSeries.deploy();

}

main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error);
    process.exit(1);
  });
