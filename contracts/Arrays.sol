// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Arrays1 {
    uint[] public array1 = [1,2,3];
    uint[] public array2;
    uint[10] public array3;

    function getArray1() public view returns (uint[] memory) {
        return array1;
    }

    function getArray2() public view returns (uint[] memory) {
        return array2;
    }

    function getArray3() public view returns (uint[10] memory) {
        return array3;
    }
}

contract Arrays2 {
    uint[] public array;

    function get(uint i) public view returns (uint) {
        return array[i];
    }

    function getArray() public view returns (uint[] memory) {
        return array;
    }

    function addToArray(uint i) public {
        array.push(i);
    }

    function length() public view returns (uint) {
        return array.length;
    }
}