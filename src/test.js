const SHA256 = require('crypto-js/sha256');
const BlockClass = require('./block.js');
const BlockchainClass = require('./blockchain.js');
const bitcoinMessage = require('bitcoinjs-message');

chain = new BlockchainClass.Blockchain
testblock = new BlockClass.Block("test")
chain._addBlock(testblock)
chain.validateChain()
chain.submitStar('1GinGZmkF1edSM9eN5NMczREWvW73WWjxp', `1GinGZmkF1edSM9eN5NMczREWvW73WWjxp:1677419143:starRegistry`, 'IPhD5+rmn+so8LeNK1I1+ctNZjF7mJEk3s9qteORKB1VeTHtODfxscW9/6nOjN1XUGI0OkHBIk2oz9PgEbNrtdU=',"test")
chain.getStarsbyWallet('1GinGZmkF1edSM9eN5NMczREWvW73WWjxp')
  .then(stars => {
    console.log(stars); // logs the array of stars owned by '1GinGZmkF1edSM9eN5NMczREWvW73WWjxp'
  })
  .catch(error => {
    console.log(error); // logs any errors that occur during Promise resolution
  });
//console.log(chain.chain[2].getBData().owner)
