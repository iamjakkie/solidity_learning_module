// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Variables1 {
    string public name = 'Example 1';
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
    string constant NAME = 'Example 4';
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