const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (amount) => ethers.parseEther(amount.toString());

const ether = tokens;

describe('Functions', () => {
    describe("Example 1", () => {
        let contract, deployer

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Functions1');
            contract = await Contract.deploy();
            let accounts = await ethers.getSigners();
            deployer = accounts[0]
        })

        it('Read function', async () => {
            expect(await contract.getName()).to.equal('Example')
        })

        it('Check cost of read function', async () => {
            let balanceBefore = await ethers.provider.getBalance(deployer.address)
            await contract.getName()
            let balanceAfter = await ethers.provider.getBalance(deployer.address)
            expect(balanceBefore).to.equal(balanceAfter)
        })

        it('Write function with arguments', async () => {
            await contract.setName('New Name')
            expect(await contract.getName()).to.equal('New Name')
        })
    })
})