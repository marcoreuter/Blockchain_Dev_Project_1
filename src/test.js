const SHA256 = require('crypto-js/sha256');
const BlockClass = require('./block.js');
const BlockchainClass = require('./blockchain.js');
const bitcoinMessage = require('bitcoinjs-message');

chain = new BlockchainClass.Blockchain
testblock = new BlockClass.Block("test")
chain._addBlock(testblock)
chain.validateChain()
console.log(chain)