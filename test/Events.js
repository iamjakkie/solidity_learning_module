const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (amount) => ethers.parseEther(amount.toString());

const ether = tokens;

describe('Events', () => {
    describe('Example 1', () => {
        let user1, user2;

        beforeEach(async () => {
            let accounts = await ethers.getSigners();
            user1 = accounts[0];
            user2 = accounts[1];
        })

        it('Event emitted', async () => {
            const Contract = await ethers.getContractFactory('Events1');
            let contract = await Contract.deploy()

            let transaction = await contract.updateMessage('Goodbye');
            await transaction.wait()
            await expect(transaction).to.emit(contract, 'MessageChanged').withArgs(user1.address,'Goodbye')
        })

        it('Event stream emitted', async () => {
            const Contract = await ethers.getContractFactory('Events1');
            let contract = await Contract.deploy()

            let transaction = await contract.updateMessage('Goodbye');
            await transaction.wait()

            transaction = await contract.updateMessage('Ho');
            await transaction.wait()

            transaction = await contract.updateMessage('Ha');
            await transaction.wait()

            let eventStream = await contract.queryFilter('MessageChanged')
            expect(eventStream.length).to.equal(3)

            let firstEvent = eventStream[0]
            expect(firstEvent.args[0]).to.equal(user1.address)
            expect(firstEvent.args[1]).to.equal('Goodbye')
        })

        it('Filter for specific indexed events', async () => {
            const Contract = await ethers.getContractFactory('Events1');
            let contract = await Contract.deploy()

            let transaction = await contract.updateMessage('Goodbye');
            await transaction.wait()

            transaction = await contract.connect(user2).updateMessage('Ho');
            await transaction.wait()

            let user2Filter = contract.filters.MessageChanged(user2.address, null)
            let eventStream = await contract.queryFilter(user2Filter)
            expect(eventStream.length).to.equal(1)
            expect(eventStream[0].args[0]).to.equal(user2.address)
            expect(eventStream[0].args[1]).to.equal('Ho')
        })
    })
})