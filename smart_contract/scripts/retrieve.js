const hre = require("hardhat");
require("dotenv").config();

// Replace with your deployed smart contract address
const contractAddress = "0xBa3B917f02D0b01498533747c67B279178F6303a";

// Corrected ABI matching the contract functions
const abi = [
  "function storeFile(string memory _ipfsHash, string memory _title, string memory _notaryName) public",
  "function getFiles() public view returns (tuple(string ipfsHash, string title, uint256 timestamp, string notaryName)[] memory)"
];


const getFilesFromBlockchain = async () => {
  try {
    const provider = new hre.ethers.JsonRpcProvider(
      `https://sepolia.infura.io/v3/${process.env.INFURA_PROJECT_ID}`
    );

    const wallet = new hre.ethers.Wallet(process.env.PRIVATE_KEY, provider);
    const contract = new hre.ethers.Contract(contractAddress, abi, wallet);

    console.log("Retrieving file details from the blockchain...");

    const files = await contract.getFiles();
    console.log("Stored Files:");
    files.forEach((file, index) => {
      const timestamp = Number(file.timestamp); // Convert BigInt to Number
      console.log(
        `File ${index + 1} - IPFS Hash: ${file.ipfsHash}, Title: ${file.title}, Timestamp: ${new Date(
          timestamp * 1000
        ).toLocaleString()}, Notary Name: ${file.notaryName}`
      );
    });
  } catch (error) {
    console.error("Error retrieving files: ", error.message);
  }
};


getFilesFromBlockchain();