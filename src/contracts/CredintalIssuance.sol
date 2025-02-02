// SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract HealthCredential {
    struct Credential {
        address issuer;
        address owner;
        string encryptedData;
        bool valid;
    }

    mapping(address => Credential) public credentials;
    address public admin;

    event CredentialIssued(address indexed owner, address indexed issuer);
    event CredentialRevoked(address indexed owner);

    modifier onlyAdmin() {
        require(msg.sender == admin, "Not authorized");
        _;
    }

    modifier onlyIssuer(address owner) {
        require(credentials[owner].issuer == msg.sender, "Not credential issuer");
        _;
    }

    constructor() {
        admin = msg.sender;
    }

    function issueCredential(address owner, string memory encryptedData) public {
        require(credentials[owner].owner == address(0), "Credential already exists");
        credentials[owner] = Credential(msg.sender, owner, encryptedData, true);
        emit CredentialIssued(owner, msg.sender);
    }

    function revokeCredential(address owner) public onlyIssuer(owner) {
        require(credentials[owner].valid, "Credential not valid");
        credentials[owner].valid = false;
        emit CredentialRevoked(owner);
    }

    function verifyCredential(address owner) public view returns (bool, string memory) {
        Credential memory cred = credentials[owner];
        return (cred.valid, cred.encryptedData);
    }
}
