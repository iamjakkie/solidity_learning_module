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

    function evenOrOdd2(uint x) public pure returns (string memory) {
        if (x % 2 == 0) {
            return "even";
        }
        return "odd";
    }

    function evenOrOdd3(uint x) public pure returns (string memory) {
        return x % 2 == 0 ? "even" : "odd";
    }
}

contract Conditionals2 {
    function checkNumber(uint x) public pure returns (uint) {
        if (x < 10) {
            return 0;
        } else if (x < 100) {
            return 1;
        } else {
            return 2;
        }
    }
}