// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Operators1 {
    function add(uint a, uint b) external pure returns (uint) {
        return a + b;
    }

    function sub(uint a, uint b) external pure returns (uint) {
        return a - b;
    }

    function mul(uint a, uint b) external pure returns (uint) {
        return a * b;
    }

    function div(uint a, uint b) external pure returns (uint) {
        return a / b;
    }

    function exp(uint a, uint b) external pure returns (uint) {
        return a ** b;
    }

    function mod(uint a, uint b) external pure returns (uint) {
        return a % b;
    }

    function increment(uint a) external pure returns (uint) {
        a++;
        return a;
    }

    function decrement(uint a) external pure returns (uint) {
        a--;
        return a;
    }

    function mathExample() external pure returns (uint) {
        uint a;
        a = a+1;
        a++;
        a *= 2;
        a = a ** 2;
        a /= 2;
        a -= 1;
        a--;
        return a;
    }
}

contract Operators2 {
    function eq(uint a, uint b) external pure returns (bool) {
        return a==b;
    }

    function notEq(uint a, uint b) external pure returns (bool) {
        return a!=b;
    }

    function gt(uint a, uint b) external pure returns (bool) {
        return a>b;
    }

    function lt(uint a, uint b) external pure returns (bool) {
        return a<b;
    }

    function gte(uint a, uint b) external pure returns (bool) {
        return a>=b;
    }

    function lte(uint a, uint b) external pure returns (bool) {
        return a<=b;
    }
}

contract Operators3 {
    function and(bool a, bool b) external pure returns (bool) {
        return a && b;
    }

    function or(bool a, bool b) external pure returns (bool) {
        return a || b;
    }

    function not(bool a) external pure returns (bool) {
        return !a;
    }
}

contract Operators4 {

    /*
    Bitwise AND (&) - Returns a one in each bit position for which the corresponding bits of both operands are ones.
    a = 0x15 = 0001 0101
    b = 0x0F = 0000 1111

    a & b = 0000 0101 = 0x05 = 5
    */
    function and(bytes1 a, bytes1 b) external pure returns (bytes1) {
        return a & b;
    }

    /*
    Bitwise OR (|) - Returns a one in each bit position for which the corresponding bits of either or both operands are ones.
    a = 0x15 = 0001 0101
    b = 0x0F = 0000 1111

    a | b = 0001 1111 = 0x1F = 31
    */
    function or(bytes1 a, bytes1 b) external pure returns (bytes1) {
        return a | b;
    }

    /*
    Bitwise XOR (^) - Returns a one in each bit position for which the corresponding bits of either but not both operands are ones.
    a = 0x15 = 0001 0101
    b = 0x0F = 0000 1111

    a ^ b = 0001 1010 = 0x1A = 26
    */
    function xor(bytes1 a, bytes1 b) external pure returns (bytes1) {
        return a ^ b;
    }

    /*
    Bitwise NOT (~) - Inverts the bits of its operand.
    a = 0x15 = 0001 0101

    ~a = 1110 1010 = 0xEA = 234
    */
    function not(bytes1 a) external pure returns (bytes1) {
        return ~a;
    }

    /*
    Left Shift (<<) - Shifts the bits of its first operand to the left by the number of positions specified in the second operand.
    a = 0x15 = 0001 0101

    a << 1 = 0010 1010 = 0x2A = 42
    */

    function leftShift(bytes1 a) external pure returns (bytes1) {
        return a << 1;
    }

    /*
    Right Shift (>>) - Shifts the bits of its first operand to the right by the number of positions specified in the second operand.
    a = 0x15 = 0001 0101

    a >> 1 = 0000 1010 = 0x0A = 10
    */

    function rightShift(bytes1 a) external pure returns (bytes1) {
        return a >> 1;
    }
}

    