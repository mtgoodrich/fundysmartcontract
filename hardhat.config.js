require("@nomiclabs/hardhat-waffle");
const fs = require("fs");
const privateKey = fs.readFileSync(".secret").toString();
const projectId = "8d89be08e82f47a89a2a847cfc7b69e6";
require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.0",
    networks: {
        rinkeby: {
            url: `https://rinkeby.infura.io/v3/${projectId}`,
            accounts: [privateKey],
        },
        mainnet: {
            url: `https://mainnet.infura.io/v3/${projectId}`,
            accounts: [privateKey],
        },
    },
};
