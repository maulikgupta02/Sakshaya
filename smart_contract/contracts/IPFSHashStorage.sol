// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;

import "@openzeppelin/contracts/access/Ownable.sol";

contract IPFSHashStorage is Ownable {
    struct FileDetails {
        string ipfsHash;
        string title;
        uint256 timestamp;
        string notaryName;
    }

    mapping(address => FileDetails[]) private userFiles;

    event HashStored(
        address indexed user,
        string ipfsHash,
        string title,
        uint256 timestamp,
        string notaryName
    );

    constructor() Ownable(msg.sender) {}

    /// @notice Store a file's IPFS hash along with metadata.
    /// @param _ipfsHash The IPFS hash of the file.
    /// @param _title The title of the file.
    /// @param _notaryName Name of the notary associated with the file.
    function storeFile(
        string memory _ipfsHash,
        string memory _title,
        string memory _notaryName
    ) public {
        FileDetails memory newFile = FileDetails({
            ipfsHash: _ipfsHash,
            title: _title,
            timestamp: block.timestamp,
            notaryName: _notaryName
        });

        userFiles[msg.sender].push(newFile);

        emit HashStored(
            msg.sender,
            _ipfsHash,
            _title,
            block.timestamp,
            _notaryName
        );
    }

    /// @notice Retrieve all file details stored by the sender.
    /// @return An array of FileDetails containing IPFS hashes and metadata.
    function getFiles() public view returns (FileDetails[] memory) {
        return userFiles[msg.sender];
    }
}
