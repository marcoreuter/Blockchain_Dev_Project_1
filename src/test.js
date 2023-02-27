const SHA256 = require('crypto-js/sha256');
const BlockClass = require('./block.js');
const BlockchainClass = require('./blockchain.js');
const bitcoinMessage = require('bitcoinjs-message');
const chain = new BlockchainClass.Blockchain;
//console.log(chain)
//const testblock = new BlockClass.Block("test");
//chain._addBlock(testblock)
//console.log(chain)
submission = {
    "address":"1GinGZmkF1edSM9eN5NMczREWvW73WWjxp",
    "signature":"H6+mBDOfuez2Mk+sGWpYFGSlkcpHAIFTySF5dDmQTmnyIOL7EEUHcwjaGheYtHjS3HKEJJAncW0T065HPo1n32A=",
    "message":"1GinGZmkF1edSM9eN5NMczREWvW73WWjxp:1677512551:starRegistry",
    "star":"dumbassstar"
  }
chain.submitStar(submission.address,submission.message,submission.signature,submission.star)
//console.log(chain.getBlockByHeight(1))
//console.log(chain)
//console.log(testblock);
//chain._addBlock(testblock);
//chain.validateChain();
//console.log(chain);
chain.getStarsbyWalletAddress('1GinGZmkF1edSM9eN5NMczREWvW73WWjxp')
  .then((stars) => {
    console.log(stars);
  })
  .catch((error) => {
    console.error(error);
  });