const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (amount) => ethers.parseEther(amount.toString());

const ether = tokens;

describe('Conditionals', () => {
    describe('Example 1', () => {
        let contract;

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Conditionals1');
            contract = await Contract.deploy();
        })

        it('Contract with basic if else statement', async () => {
            expect(await contract.evenOrOdd1(2)).to.equal('even')
            expect(await contract.evenOrOdd1(3)).to.equal('odd')
        })

        it('Contract with just if statement', async () => {
            expect(await contract.evenOrOdd2(2)).to.equal('even')
            expect(await contract.evenOrOdd2(3)).to.equal('odd')
        })

        it('Contract with return ternary operator', async () => {
            expect(await contract.evenOrOdd3(2)).to.equal('even')
            expect(await contract.evenOrOdd3(3)).to.equal('odd')
        })
    })

    describe('Example 2', () => {
        let contract;

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Conditionals2');
            contract = await Contract.deploy();
        })

        it('Contract with complex if else statement', async () => {
            expect(await contract.checkNumber(9)).to.equal(0)
            expect(await contract.checkNumber(10)).to.equal(1)
            expect(await contract.checkNumber(100)).to.equal(2)
        })
    })
})