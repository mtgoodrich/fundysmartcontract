# Transactions Hardhat Project

This project deploys a transactions contract to the ethereum rinkeby testnet or mainnet (requires a projectId and secret (you can't use mine)).

To deploy the script:

```shell
npx hardhat run scripts/deploy.js --network rinkeby
```

Make note of the contract id to use on the front end (e.g. constants -> contractAddress).
You must also move a copy of the Transactions.json from the artifacts directory (artifacts > contracts > Transactions.so. > Transactions.json) to the front end's utils directory.

!Important: Contract Address and Transactions.json need to match.

Default hardhat stuff...

Try running some of the following tasks:

```shell
npx hardhat accounts
npx hardhat compile
npx hardhat clean
npx hardhat test
npx hardhat node
node scripts/sample-script.js
npx hardhat help
```
