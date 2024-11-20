const { expect } = require("chai");
const { wordlists } = require("ethers");
const { ethers } = require("hardhat");

describe("MyToken", function () {
  let MyToken, token, owner, addr1, addr2;
  beforeEach(async function () {
    MyToken = await ethers.getContractFactory("MyToken");
    token = await MyToken.deploy();
    await token.deployed();
    [owner, addr1, addr2] = await ethers.getSigners();
  });
});
