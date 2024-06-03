const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Types', () => {

    it('Default Variable values', async () => {
        const Contract = await ethers.getContractFactory('Variables1');
        contract = await Contract.deploy();
        expect(await contract.name()).to.equal('Example 1')
    })

    it('Constructor defined variable', async () => {
        const Contract = await ethers.getContractFactory('Variables2');
        contract = await Contract.deploy('Example 2');
        expect(await contract.name()).to.equal('Example 2')
    })

    it('Non public variable', async () => {
        let contract 

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Variables3');
            contract = await Contract.deploy();
        })

        it('Blank name by default', async () => {
            expect(await contract.name()).to.equal('')
        })

        it('Set name updates variable', async () => {
            await contract.setName('Example 3')
            expect(await contract.name()).to.equal('Example 3')
        })

        it('Does not expose name() function', async () => {
            expect(contract.name).to.be.undefined
        })
    })

});