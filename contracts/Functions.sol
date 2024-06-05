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

contract Functions4 {
    uint public count;

    function increment1() public {
        count = count + 1;
    }

    function increment2() public {
        increment1();
    }

    function increment3() private {
        count = count + 1;
    }

    function increment4() public {
        increment3();
    }

    function increment5() external {
        count = count + 1;
    }

    function increment6() internal {
        count = count + 1;
    }

    function increment7() public {
        increment6();
    }
}

contract Functions5 {
    string public name = 'Example 5';
    uint public balance;

    function getName() public view returns (string memory) {
        return name;
    }

    function add(uint a, uint b) public pure returns (uint) {
        return a + b;
    }

    function pay() public payable {
        balance = msg.value;
    }
}