// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Time1 {
    address public owner;
    uint public depositStartTime;
    uint public withdrawStartTime;

    constructor(uint _depositStartTime, uint _withdrawStartTime) {
        owner = msg.sender;
        depositStartTime = _depositStartTime;
        withdrawStartTime = _withdrawStartTime;
    }

    function depost() public payable {
        require(block.timestamp >= depositStartTime, "deposit not started");
        
    }
}