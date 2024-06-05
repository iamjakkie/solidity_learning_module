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

    describe('Example 2', () => {
        let contract

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Functions2');
            contract = await Contract.deploy();
        })

        it('Calls a function inside another function', async () => {
            await contract.increment();
            expect(await contract.count()).to.equal(1)
        })
    })

    describe('Example 3', () => {
        let contract

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Functions3');
            contract = await Contract.deploy();
        })

        it('Calls a function outside of the contract', async () => {
            await contract.increment();
            expect(await contract.count()).to.equal(1)
        })
    })

    describe('Example 4', () => {
        let contract

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Functions4');
            contract = await Contract.deploy();
        })

        it('Calls a public function outside of the contract', async () => {
            await contract.increment1();
            expect(await contract.count()).to.equal(1)
        })

        it('Calls a public function from another function', async () => {
            await contract.increment2();
            expect(await contract.count()).to.equal(1)
        })

        it('Cannot call a private function outside of the contract', async () => {
            await expect(contract.increment3).to.be.undefined
        })

        it('Calls a private function from another function', async () => {
            await contract.increment4();
            expect(await contract.count()).to.equal(1)
        })

        it('Calls an external function outside of the contract', async () => {
            await contract.increment5();
            expect(await contract.count()).to.equal(1)
        })

        it('Cannot call an internal function outside of the contract', async () => {
            await expect(contract.increment6).to.be.undefined
        })

        it('Calls an internal function from another function', async () => {
            await contract.increment7();
            expect(await contract.count()).to.equal(1)
        })
    })

    describe('Example 5', () => {
        let contract

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Functions5');
            contract = await Contract.deploy();
        })

        it('Calls a view function', async () => {
            expect(await contract.getName()).to.equal('Example 5')
        })

        it('Calls an add function', async () => {
            expect(await contract.add(1, 2)).to.equal(3)
        })

        it('Calls a payable function', async () => {
            await contract.pay({ value: ether(1) })
            expect(await contract.balance()).to.equal(ether(1))
        })
    })
})