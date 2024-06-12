// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Time1 {
    address public owner;
    uint public depositStartTime;
    uint public withdrawStartTime;

    modifier onlyOwner {
        require(msg.sender == owner, "only owner");
        _;
    }

    modifier afterWithdrawEnabled {
        require(
            block.timestamp >= withdrawStartTime,
            "withdraw not enabled"
        );
        _;
    }

    constructor(uint _depositStartTime, uint _withdrawStartTime) {
        owner = msg.sender;
        depositStartTime = _depositStartTime;
        withdrawStartTime = _withdrawStartTime;
    }

    function deposit() public payable {
        require(block.timestamp >= depositStartTime, "deposit not started");
    }

    function withdraw() public onlyOwner afterWithdrawEnabled{
        uint256 value = address(this).balance;
        (bool sent, ) = owner.call{value: value}("");
        require(sent, "Failed to send Ether");
    }
}