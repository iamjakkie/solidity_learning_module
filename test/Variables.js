const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (amount) => ethers.parseEther(amount.toString());

const ether = tokens;

describe('Variables', () => {

    describe('Default Variable values', () => {
        let contract 

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Variables1');
            contract = await Contract.deploy();
        })
        
        it('Hardcoded value', async () => {
            expect(await contract.name()).to.equal('Example 1')
        })
    })

    describe('Constructor defined variable', () => {
        let contract

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Variables2');
            contract = await Contract.deploy('Example 2');
        })

        it('Constructor value', async () => {
            expect(await contract.name()).to.equal('Example 2')
        })
    })

    describe('Non public variable', () => {
        let contract 

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Variables3');
            contract = await Contract.deploy();
        })

        it('Blank name by default', async () => {
            expect(await contract.getName()).to.equal('')
        })

        it('Set name updates variable', async () => {
            await contract.setName('Example 3')
            expect(await contract.getName()).to.equal('Example 3')
        })

        it('Does not expose name() function', async () => {
            expect(contract.name).to.be.undefined
        })
    })

    describe('Constant vs Immutable', () => {
        let contract;

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Variables4');
            contract = await Contract.deploy();
        })

        it('Has a NAME constant', async () => {
            expect(await contract.getName()).to.equal('Example 4')
        })

        it('Tracks the owner as immutable', async () => {
            let accounts = await ethers.getSigners();
            expect(await contract.getOwner()).to.equal(accounts[0].address)
        })
    })

    describe('Global variables', () => {
        let contract

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Variables5');
            contract = await Contract.deploy();
        })

        it('"This" global variable', async() => {
            expect(await contract.contractAddress()).to.equal(contract.target)
        })

        it('"msg" and "tx" global variables', async () => {
            await contract.pay({ value: ether(1) })
            expect(await contract.amount()).to.equal(ether(1))
            let accounts = await ethers.getSigners();
            expect(await contract.payer()).to.equal(accounts[0].address)
            expect(await contract.origin()).to.equal(accounts[0].address)
        })
    })

});