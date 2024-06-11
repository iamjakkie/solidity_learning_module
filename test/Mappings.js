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

        it('Assigned names', async () => {
            expect(await contract.names(1)).to.equal('Adam')
            expect(await contract.names(2)).to.equal('Ben')
        })
    })

    describe('Example 2', () => {
        let contract;

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Mappings2');
            contract = await Contract.deploy();
        })

        it('Assigned custom structs', async () => {
            let result = await contract.books(1)
            expect(result[0]).to.equal('Leo Tolstoy')
            expect(result[1]).to.equal('War and Peace')

            result = await contract.books(2)
            expect(result[0]).to.equal('F. Scott Fitzgerald')
            expect(result[1]).to.equal('The Great Gatsby')
        })
    })

    describe('Example 3', () => {
        let contract;

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Mappings3');
            contract = await Contract.deploy();
            await contract.set(1, 'one')
            await contract.set(2, 'two')
        })

        it('Getting and setting values', async () => {
            expect(await contract.get(1)).to.equal('one')
            expect(await contract.get(2)).to.equal('two')
        })

        it('Remove value', async () => {
            await contract.remove(1)
            expect(await contract.get(1)).to.equal('')
        })
    })
})