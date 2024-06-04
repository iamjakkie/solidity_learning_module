// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Variables1 {
    string public name = "Example 1";
}

contract Variables2 {
    string public name;

    constructor(string memory _name) {
        name = _name;
    }
}

contract Variables3 {
    string name;

    function setName(string memory _name) public {
        name = _name;
    }

    function getName() public view returns (string memory) {
        return name;
    }
}

contract Variables4 {
    string constant NAME = "Example 4";
    address immutable OWNER;

    constructor() {
        OWNER = msg.sender;
    }

    function getName() public pure returns (string memory) {
        return NAME;
    }

    function getOwner() public view returns (address) {
        return OWNER;
    }
}

contract Variables5 {
    address public contractAddress;
    address public payer;
    address public origin;
    uint public amount;

    constructor() {
        contractAddress = address(this);
    }

    function pay() public payable {
        payer = msg.sender;
        origin = tx.origin;
        amount = msg.value;
    }

    function getBlockInfo() public view returns (uint, uint, uint) {
        return (block.number, block.timestamp, block.chainid);
    }
}

contract Variables6 {
    string name1 = "Name1";
    string private name2 = "Name2";
    string internal name2 = "Name3";
    string public name4 = "Name4";
}
