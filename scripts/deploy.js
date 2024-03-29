const { ethers } = require('hardhat')
require('dotenv').config({ path: '.env' })

async function main () {
  const whitelistContract = process.env.NEXT_PUBLIC_WHITELIST_CONTRACT_ADDRESS
  const metadataURL = process.env.NEXT_PUBLIC_METADATA_URL

  /*
  A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
  so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
  */
  const cryptoDevsContract = await ethers.getContractFactory('CryptoDevs')

  // deploy the contract
  const deployedCryptoDevsContract = await cryptoDevsContract.deploy(
    metadataURL,
    whitelistContract
  )

  // Wait for it to finish deploying
  await deployedCryptoDevsContract.deployed()

  // print the address of the deployed contract
  console.log(
    'Crypto Devs Contract Address:',
    deployedCryptoDevsContract.address
  )
}

// Call the main function and catch if there is any error
main()
  .then(() => process.exit(0))
  .catch(error => {
    console.error(error)
    process.exit(1)
  })
