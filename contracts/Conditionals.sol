// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Conditionals1 {
    
    function evenOrOdd1(uint x) public pure returns (string memory) {
        if (x % 2 == 0) {
            return "even";
        } else {
            return "odd";
        }
    }
}