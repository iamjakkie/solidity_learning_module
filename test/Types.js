const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Types', () => {
    beforeEach(async () => {
        const Contract = await ethers.getContractFactory('Types');
        contract = await Contract.deploy();
    })

    describe('Example 1', () => {
        it('Boolean values', async () => {
            expect(await contract.boolean1()).to.equal(true);
            expect(await contract.boolean2()).to.equal(false);
        })

        it('Integer values', async () => {
            expect(await contract.uint1()).to.equal(1);
            expect(await contract.uint2()).to.equal(0);
            expect(await contract.uint3()).to.equal(1);
            expect(await contract.uint4()).to.equal(1);
            expect(await contract.myint1()).to.equal(1);
            expect(await contract.myint2()).to.equal(0);
            expect(await contract.myint3()).to.equal(-1);
            expect(await contract.myint4()).to.equal(1);
        })

    })
});