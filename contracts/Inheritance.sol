// SPDX-License-Identifier: Unlicense
pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract Token1 {
    uint public totalSupply;

    constructor (uint _totalSupply) {
        totalSupply = _totalSupply;
    }
}
contract Inheritance1 is Token1 {
    string public name;
    string public symbol;
    uint public decimals;

    constructor() Token1(1000000 * (10 ** 18)) {
        name = 'Token';
        symbol = 'TKN';
        decimals = 18;
    }
}

contract Token2 {
    uint public totalSupply;
    string public name;
    string public symbol;
    uint public decimals;

    mapping(address => uint) balances;

    constructor (uint _totalSupply) {
        totalSupply = _totalSupply * (10 ** 18);
        balances[msg.sender] = totalSupply;
    }

    function balanceOf(address _owner) virtual public view returns (uint) {
        return balances[_owner];
    }
}

contract Inheritance2 is Token2 {
    constructor(uint _totalSupply) Token2(_totalSupply) {
        name = 'Token';
        symbol = 'TKN';
        decimals = 18;
    }

    function balanceOf(address _account) virtual override public view returns (uint) {
        uint balance = super.balanceOf(_account);
        return balance * 10;
    }
}