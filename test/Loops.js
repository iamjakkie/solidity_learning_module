const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (amount) => ethers.parseEther(amount.toString());

const ether = tokens;

describe('Loops', () => {
    describe('Example 1', () => {
        let contract;

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Loops1');
            contract = await Contract.deploy();
        })

        it('Calculate Even numbers in loop', async () => {
            expect(await contract.countEvenNumbers()).to.equal(5);
        })
    })

    describe('Example 2', () => {
        it('Calculate Even numbers in loop', async () => {
            const Contract = await ethers.getContractFactory('Loops2');
            const contract = await Contract.deploy();
            let transaction = await contract.logNumbers()
            let receipt = await transaction.wait()
            await expect(transaction).to.emit(contract, 'LogNumber').withArgs(0)
            await expect(transaction).to.emit(contract, 'LogNumber').withArgs(1)
            await expect(transaction).to.emit(contract, 'LogNumber').withArgs(2)
            await expect(transaction).to.emit(contract, 'LogNumber').withArgs(3)
            await expect(transaction).to.emit(contract, 'LogNumber').withArgs(4)
        })
    })
})