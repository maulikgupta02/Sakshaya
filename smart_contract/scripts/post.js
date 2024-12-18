const hre = require("hardhat");
require("dotenv").config();

// Replace with your deployed smart contract address
const contractAddress = "0xBa3B917f02D0b01498533747c67B279178F6303a";

// Corrected ABI matching the contract functions
const abi = [
  "function storeFile(string memory _ipfsHash, string memory _title, string memory _notaryName) public",
  "function getFiles() public view returns (tuple(string ipfsHash, string title, uint256 timestamp, string notaryName)[] memory)"
];

// Function to store a file's details on the blockchain
const storeFileOnBlockchain = async (ipfsHash, title, notaryName) => {
  try {
    // Connect to the Ethereum network using Infura
    const provider = new hre.ethers.JsonRpcProvider(
      `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
    );

    // Load wallet using private key
    const wallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, provider);

    // Connect to the smart contract
    const contract = new hre.ethers.Contract(contractAddress, abi, wallet);

    console.log("Storing file details on the blockchain...");

    // Send transaction to store the file details
    const tx = await contract.storeFile(ipfsHash, title, notaryName);
    await tx.wait();

    console.log("File details stored successfully! Transaction Hash:", tx.hash);
  } catch (error) {
    console.error("Error storing file details on blockchain: ", error.message);
  }
};

// Example usage
const ipfsHash = "QmYourIPFSHashHere";
const title = "Document Title";
const notaryName = "Notary Name";

storeFileOnBlockchain(ipfsHash, title, notaryName);