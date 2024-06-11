const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (amount) => ethers.parseEther(amount.toString());

const ether = tokens;

describe('Enums', () => {
    describe('Example 1', () => {
        let contract;

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Enums1');
            contract = await Contract.deploy();
        })
        it('Get enum', async () => {
            expect(await contract.get()).to.equal(0)
        })

        it('Set enum', async () => {
            await contract.set(1)
            expect(await contract.get()).to.equal(1)
        })

        it('Complete', async () => {
            await contract.complete()
            expect(await contract.get()).to.equal(2)
        })

        it('Reset', async () => {
            await contract.reset()
            expect(await contract.get()).to.equal(0)
        })
    })
})