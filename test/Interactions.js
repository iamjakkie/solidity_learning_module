const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (amount) => ethers.parseEther(amount.toString());

const ether = tokens;

describe('Inheritance', () => {