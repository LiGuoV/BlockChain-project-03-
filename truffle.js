require('dotenv').config()

const HDWalletProvider = require('truffle-hdwallet-provider');
module.exports = {
    networks: {
        development: {
            host: "127.0.0.1",
            port: 8545,
            network_id: "*"
        },
        rinkeby: {
            provider: function () {
                return new HDWalletProvider(process.env.PRIVATE_KEY, `https://rinkeby.infura.io/v3/${process.env.INFURA_KEY}`,);
            },
            network_id: 4,
            gas: 4500000,
            gasPrice: 10000000000
        }

    },
    mocha: {
        timeout: 100000
      },
    compilers: {
        solc: {
            // version: "^0.4.24"
        }
    }
};