// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Mappings1 {
    mapping(uint => string) public names;
    mapping(uint => address) public addresses;
    mapping(address => uint) public balances;

    constructor() {
        names[1] = "Adam";
        names[2] = "Ben";
    }

    function myFunction() {

    }
}