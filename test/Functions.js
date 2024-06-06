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

    describe('Example 6', () => {
        let contract, owner, account1

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Functions6');
            contract = await Contract.deploy();
            let accounts = await ethers.getSigners()
            owner = accounts[0]
            account1 = accounts[1]
        })

        it('Owner can call onlyOwner function', async () => {
            await contract.connect(owner).setName1('xyz');
            expect(await contract.name()).to.equal('xyz')
        })

        it('Non-owner cannot call onlyOwner function', async () => {
            await expect(contract.connect(account1).setName1('xyz')).to.be.reverted
        })

        it('Owner can call function only once', async () => {
            await contract.connect(owner).setName2('xyz');
            expect(await contract.name()).to.equal('xyz')
            await expect(contract.connect(owner).setName2('abc')).to.be.reverted
        })
    })

    describe('Example 7', () => {
        let contract

        beforeEach(async () => {
            const Contract = await ethers.getContractFactory('Functions7');
            contract = await Contract.deploy();
        })

        it('Explicit return value', async () => {
            expect(await contract.getName1()).to.equal('Example 7')
        })

        it('Implicit return value', async () => {
            expect(await contract.getName2()).to.equal('')
        })

        it('Returns the value of another function', async () => {
            expect(await contract.getName3()).to.equal('Example 7')
        })

        it('Returns a named variable without declaration', async () => {
            expect(await contract.getName4()).to.equal('Another name')
        })

        it('Returns a named variable from another function', async () => {
            expect(await contract.getName5()).to.equal('Another name')
        })

        it('Returns multiple values', async () => {
            let [name1, name2] = await contract.getName6()
            expect(name1).to.equal('Example 7')
            expect(name2).to.equal('New name')
        })

        it('Returns multiple values from another function', async () => {
            let [name1, name2] = await contract.getName6()
            expect(name1).to.equal('Example 7')
            expect(name2).to.equal('New name')
        })

        it('Returns event from a function', async () => {
            let transaction = await contract.setName1();
            let result = await transaction.wait()
            expect(transaction).to.emit(contract, 'NameChanged').withArgs('New name')
        })
    })
})
