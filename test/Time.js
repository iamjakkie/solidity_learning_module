const { expect } = require('chai');
const { ethers } = require('hardhat');
const { time } = require('@nomicfoundation/hardhat-network-helpers');

const tokens = (amount) => ethers.parseEther(amount.toString());

const ether = tokens;

describe('Time', () => {
    describe('Example 1', () => {
         it('Time restriction with block.timestamp', async () => {
            let now = await time.latest();
            let depositStartTime = now + 1000;
            let withdrawStartTime = depositStartTime + 1000;

            const Contract = await ethers.getContractFactory('Time1');
            const contract = await Contract.deploy(depositStartTime, withdrawStartTime);

            await expect(contract.deposit({ value: ether(1) })).to.be.revertedWith('deposit not started');

            await time.increase(1001);

            await contract.deposit({ value: ether(1) });
            expect(await ethers.provider.getBalance(contract.target)).to.equal(ether(1));

            await expect(contract.withdraw()).to.be.revertedWith('withdraw not enabled');

            await time.increaseTo(withdrawStartTime + 1);

            await contract.withdraw();
            expect(await ethers.provider.getBalance(contract.target)).to.equal(0);
         })
    })
})