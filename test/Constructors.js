const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (amount) => ethers.parseEther(amount.toString());

const ether = tokens;

describe('Constructors', () => {
    describe("Example 1", () => {

        it('Contract without constructor', async () => {
            const Contract = await ethers.getContractFactory('Constructors1');
            let contract = await Contract.deploy();
            expect(await contract.name()).to.equal('Example 1')
        })
    })

    describe("Example 2", () => {
        it('Contract with constructor without arguments', async () => {
            const Contract = await ethers.getContractFactory('Constructors2');
            let contract = await Contract.deploy();
            expect(await contract.name()).to.equal('Example 2')
        })
    })

    describe("Example 3", () => {
        it('Contract with constructor with arguments', async () => {
            const Contract = await ethers.getContractFactory('Constructors3');
            let contract = await Contract.deploy('Example 3');
            expect(await contract.name()).to.equal('Example 3')
        })
    })

})