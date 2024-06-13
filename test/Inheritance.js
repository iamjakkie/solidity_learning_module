const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (amount) => ethers.parseEther(amount.toString());

const ether = tokens;

describe('Inheritance', () => {
    describe('Example', () => {
        it('Inherited constructor override', async () => {
            const Contract = await ethers.getContractFactory('Inheritance1');
            let contract = await Contract.deploy();

            expect(await contract.name()).to.equal('Token');
            expect(await contract.symbol()).to.equal('TKN');
            expect(await contract.decimals()).to.equal(18);
            expect(await contract.totalSupply()).to.equal(ether(1000000));
        })
    })

    describe('Example2', () => {
        it('Override parent contract function', async () => {
            const Contract = await ethers.getContractFactory('Inheritance2');
            let contract = await Contract.deploy(1000000);

            expect(await contract.name()).to.equal('Token');
            expect(await contract.symbol()).to.equal('TKN');
            expect(await contract.decimals()).to.equal(18);
            expect(await contract.totalSupply()).to.equal(ether(1000000));
        })
    })
})