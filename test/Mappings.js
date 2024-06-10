const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (amount) => ethers.parseEther(amount.toString());

const ether = tokens;

describe('Mappings', () => {
    describe('Example 1', () => {
        let contract;

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Mappings1');
            contract = await Contract.deploy();
        })
    })
})