// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Enums1 {
    enum Status {
        Todo,
        InProgress,
        Done
    }

    Status public status;

    function get() public view returns (Status) {
        return status;
    }

    function set(Status _status) public {
        status = _status;
    }

    function complete() public {
        status = Status.Done;
    }

    function reset() public {
        delete status;
    }
}