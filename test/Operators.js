const { expect } = require('chai');
const { ethers } = require('hardhat');

const tokens = (amount) => ethers.parseEther(amount.toString());

const ether = tokens;

describe('Operators', () => {
    describe('Example 1', () => {
        it('Basic maths operators', async () => {
            const Contract = await ethers.getContractFactory('Operators1');
            contract = await Contract.deploy();
            expect(await contract.add(1,1)).to.equal(2)
            expect(await contract.sub(1,1)).to.equal(0)
            expect(await contract.mul(2,2)).to.equal(4)
            expect(await contract.div(4,2)).to.equal(2)
            expect(await contract.exp(2,3)).to.equal(8)
            expect(await contract.mod(5,2)).to.equal(1)
            expect(await contract.increment(1)).to.equal(2)
            expect(await contract.decrement(1)).to.equal(0)
            expect(await contract.mathExample()).to.equal(6)
        })
    })

    describe('Example 2', () => {
        it('Comparison operators', async () => {
            const Contract = await ethers.getContractFactory('Operators2');
            contract = await Contract.deploy();
            expect(await contract.eq(1,1)).to.equal(true)
            expect(await contract.notEq(1,1)).to.equal(false)
            expect(await contract.gt(2,1)).to.equal(true)
            expect(await contract.lt(1,2)).to.equal(true)
            expect(await contract.gte(2,1)).to.equal(true)
            expect(await contract.lte(1,2)).to.equal(true)
        })
    })

    describe('Example 3', () => {
        it('Logical operators', async () => {
            const Contract = await ethers.getContractFactory('Operators3');
            contract = await Contract.deploy();
            expect(await contract.and(true,true)).to.equal(true)
            expect(await contract.or(true,false)).to.equal(true)
            expect(await contract.not(true)).to.equal(false)
        })
    })

    describe('Example 4', () => {
        it('Bitwise operators', async () => {
            const Contract = await ethers.getContractFactory('Operators4');
            contract = await Contract.deploy();
            expect(await contract.and(ethers.hexlify(21),ethers.hexlify(15))).to.equal(5)
            // expect(await contract.or(0x15,0x0F)).to.equal(0x1F)
            // expect(await contract.xor(0x15,0x0F)).to.equal(0x1A)
            // expect(await contract.not(0x15)).to.equal(0xEA)
            // expect(await contract.leftShift(0x15)).to.equal(0x2A)
            // expect(await contract.rightShift(0x15)).to.equal(0x0A)
        })
    })
})