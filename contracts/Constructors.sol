// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Constructors1 {
    string public name = 'Example 1';
}

contract Constructors2 {
    string public name;

    constructor() {
        name = 'Example 2';
    }
}

contract Constructors3 {
    string public name;

    constructor(string memory _name) {
        name = _name;
    }
}