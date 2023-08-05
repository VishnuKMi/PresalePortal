"use strict";

var _require = require('hardhat'),
    ethers = _require.ethers;

require('dotenv').config({
  path: '.env'
});

function main() {
  var whitelistContract, metadataURL, cryptoDevsContract, deployedCryptoDevsContract;
  return regeneratorRuntime.async(function main$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          whitelistContract = process.env.NEXT_PUBLIC_WHITELIST_CONTRACT_ADDRESS;
          metadataURL = process.env.NEXT_PUBLIC_METADATA_URL;
          /*
          A ContractFactory in ethers.js is an abstraction used to deploy new smart contracts,
          so cryptoDevsContract here is a factory for instances of our CryptoDevs contract.
          */

          _context.next = 4;
          return regeneratorRuntime.awrap(ethers.getContractFactory('CryptoDevs'));

        case 4:
          cryptoDevsContract = _context.sent;
          _context.next = 7;
          return regeneratorRuntime.awrap(cryptoDevsContract.deploy(metadataURL, whitelistContract));

        case 7:
          deployedCryptoDevsContract = _context.sent;
          _context.next = 10;
          return regeneratorRuntime.awrap(deployedCryptoDevsContract.deployed());

        case 10:
          // print the address of the deployed contract
          console.log('Crypto Devs Contract Address:', deployedCryptoDevsContract.address);

        case 11:
        case "end":
          return _context.stop();
      }
    }
  });
} // Call the main function and catch if there is any error


main().then(function () {
  return process.exit(0);
})["catch"](function (error) {
  console.error(error);
  process.exit(1);
});