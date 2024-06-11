const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (amount) => ethers.parseEther(amount.toString());

const ether = tokens;

describe('Structs', () => {
    describe('Example 1', () => {
        let contract;

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Structs1');
            contract = await Contract.deploy();
            await contract.add1('A Tale of Two Cities', 'Charles Dickens')
            await contract.add2('Les Misérables', 'Victor Hugo')
            await contract.add3('The Hobbit', 'J.R.R. Tolkien')
        })

        it('Get struct', async () => {
            let result = await contract.get(0);
            expect(result.author).to.equal('Charles Dickens')
            expect(result.title).to.equal('A Tale of Two Cities')
            expect(result.completed).to.equal(false)
        })

        it('Complete struct', async () => {
            await contract.complete(0)
            let result = await contract.get(0);
            expect(result.completed).to.equal(true)
        })
    })
})