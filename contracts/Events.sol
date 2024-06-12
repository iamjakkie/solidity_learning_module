// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Events1 {
    string public message = "Hello World";

    event MessageChanged(
        address indexed _user, 
        string message
    );

    function updateMessage(string memory _message) public {
        message = _message;
        emit MessageChanged(msg.sender, _message);
    }
}
