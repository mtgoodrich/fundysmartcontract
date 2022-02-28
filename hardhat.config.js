// https://rinkeby.infura.io/v3/8d89be08e82f47a89a2a847cfc7b69e6

require("@nomiclabs/hardhat-waffle");

module.exports = {
    solidity: "0.8.0",
    networks: {
        rinkeby: {
            url: "https://rinkeby.infura.io/v3/8d89be08e82f47a89a2a847cfc7b69e6",
            accounts: [
                "ca602d5152e08f6a1bd05e85678be08915b3650531f39a910f61396792451a27",
            ],
        },
    },
};
