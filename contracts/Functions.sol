// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Functions1 {
    string name = "Example";

    function setName(string memory _name) public {
        name = _name;
    }

    function getName() public view returns (string memory) {
        return name;
    }

    function resetName() public {
        name = "Example";
    }
}

contract Functions2 {
    uint public count;

    function increment() public {
        count = add(count, 1);
    }

    function add(uint a, uint b) internal pure returns (uint) {
        return a + b;
    }
}

function addNumbers(uint a, uint b) pure returns(uint) {
    return a+b;
}

contract Functions3 {
    uint public count;

    function increment() public {
        count = addNumbers(count, 1);
    }
}