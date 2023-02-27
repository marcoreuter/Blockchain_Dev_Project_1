const SHA256 = require('crypto-js/sha256');
const BlockClass = require('./block.js');
const BlockchainClass = require('./blockchain.js');
const bitcoinMessage = require('bitcoinjs-message');

chain = new BlockchainClass.Blockchain
testblock = new BlockClass.Block("test")
chain._addBlock(testblock)
chain.validateChain()
console.log(chain)
//chain.submitStar('1GinGZmkF1edSM9eN5NMczREWvW73WWjxp', `1GinGZmkF1edSM9eN5NMczREWvW73WWjxp:1677419143:starRegistry`, 'IPhD5+rmn+so8LeNK1I1+ctNZjF7mJEk3s9qteORKB1VeTHtODfxscW9/6nOjN1XUGI0OkHBIk2oz9PgEbNrtdU=',"test")
let starsformywallet = chain.getStarsbyWalletAddress('1GinGZmkF1edSM9eN5NMczREWvW73WWjxp')
console.log(starsformywallet)