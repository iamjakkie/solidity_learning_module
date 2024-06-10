const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (amount) => ethers.parseEther(amount.toString());

const ether = tokens;

describe('Array', () => {
    describe('Example 1', () => {
        let contract;

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Arrays1');
            contract = await Contract.deploy();
        })

        it('Contract with declared and initialized array', async () => {
            expect(await contract.array1(0)).to.equal(1);
            expect(await contract.array1(1)).to.equal(2);
            expect(await contract.array1(2)).to.equal(3);
        })

        it('Contract with declared and not initialized array', async () => {
            expect(await contract.getArray2()).to.deep.equal([]);
        })

        it('Contract with declared and initialized array with fixed size', async () => {
            expect(await contract.getArray3()).to.deep.equal([0, 0, 0, 0, 0, 0, 0, 0, 0, 0])
        })

    })

    describe('Example 2', () => {
        let contract;

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Arrays2');
            contract = await Contract.deploy();
        })

        it('Add to array', async () => {
            await contract.addToArray(1)
            await contract.addToArray(2)
            await contract.addToArray(3)
            expect(await contract.get(0)).to.equal(1)
            expect(await contract.get(1)).to.equal(2)
            expect(await contract.get(2)).to.equal(3)
        })

        it('Get array', async () => {
            await contract.addToArray(1)
            await contract.addToArray(2)
            await contract.addToArray(3)
            expect(await contract.getArray()).to.deep.equal([1, 2, 3])
        })
    })
})