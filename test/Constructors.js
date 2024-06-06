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

    describe("Example 4", () => {
        it("Contract with a payable constructor", async () => {
            const Contract = await ethers.getContractFactory('Constructors4');
            let contract = await Contract.deploy({ value: ether(1) });
            let balance = await ethers.provider.getBalance(contract.target);
            expect(ethers.formatEther(balance)).to.equal('1.0')
        })
    })

    describe("Example 5", () => {
        it("Contract inherits a constructor", async () => {
            const Contract = await ethers.getContractFactory('Constructors5');
            let contract = await Contract.deploy();
            expect(await contract.name()).to.equal('Example 5')
        })

        it("Contract stored value is set", async () => {
            const Contract = await ethers.getContractFactory('Constructors5');
            let contract = await Contract.deploy();
            expect(await contract.description()).to.equal("Inherits from Parent1")
        })
    })

    describe("Example 6", () => {
        it("Contract extends inherited constructor", async () => {
            const Contract = await ethers.getContractFactory('Constructors6');
            let contract = await Contract.deploy("Example 6", "Random description");
            expect(await contract.name()).to.equal('Example 6')
            expect(await contract.description()).to.equal("Random description")
        })
    })
})