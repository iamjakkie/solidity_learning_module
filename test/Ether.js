const { expect } = require('chai');
const { ethers } = require('hardhat');
const { time } = require('@nomicfoundation/hardhat-network-helpers');

const tokens = (amount) => ethers.parseEther(amount.toString());

const ether = tokens;

describe('Ether', () => {
    describe('Example 1', () => {
        it('Ether units', async () => {
            const Contract = await ethers.getContractFactory('Ether1');
            const contract = await Contract.deploy();

            expect(await contract.value1()).to.equal(await contract.value2());
            expect(await contract.value3()).to.equal(await contract.value4());
            expect(await contract.value5()).to.equal(await contract.value6());
        })
    })

    describe('Example 2', () => {
        it('Ether receive function', async () => {
            const Contract = await ethers.getContractFactory('Ether2');
            const contract = await Contract.deploy();

            accounts = await ethers.getSigners();
            owner = accounts[0];

            await owner.sendTransaction({ to: contract.target, value: tokens(1) });
            expect(await ethers.provider.getBalance(contract.target)).to.equal(tokens(1));
        })
    })

    describe('Example 3', () => {
        it('Ether fallback function', async () => {
            const Contract = await ethers.getContractFactory('Ether3');
            const contract = await Contract.deploy();

            accounts = await ethers.getSigners();
            owner = accounts[0];

            await owner.sendTransaction({ to: contract.target, value: tokens(1) });
            expect(await ethers.provider.getBalance(contract.target)).to.equal(tokens(1));
            expect(await contract.count()).to.equal(1);
        })
    })

    describe('Example 4', () => {
        it('Ether transfer function', async () => {
            const Contract = await ethers.getContractFactory('Ether4');
            const contract = await Contract.deploy();

            // random address
            let receiver = '0x5FbDB2315678afecb367f032d93F642f64180aa3';

            // await contract.transfer1(receiver, { value: ether(1) });
            // expect(await ethers.provider.getBalance(receiver)).to.equal(ether(1));

            await contract.transfer2(receiver, { value: ether(1) });
            expect(await ethers.provider.getBalance(receiver)).to.equal(ether(2));
        })
    })
})