> UML 4in1
> https://drive.google.com/file/d/1SJJL8wUG8MHUvPvGo0eH5ZNaAIacKaly/view

> init 
```shell
npm install 
npm install -g truffle
npm install web3
npm install @truffle/hdwallet-provider

$ truffle version
> Truffle v5.5.27 (core: 5.5.27)
> Ganache v7.4.0
> Solidity v0.5.16 (solc-js)
> Node v16.13.1
> Web3.js v1.7.4
```
> [truffle-assertions](https://www.npmjs.com/package/truffle-assertions) This package adds additional assertions that can be used to test Ethereum smart contracts inside Truffle tests.
> 
`npm install tr​​uffle-assertions`

`truffle console`
```
(console)$ test -- -t "harvestItem"

(console)$ migrate --reset --network rinkeby

```
> log
```
   Deploying 'SupplyChain'
   -----------------------
   > transaction hash:    0x94a60d5318b932f967e170165ff88ffb0d38bae505e835ba23e06bf8e3dd3e47
   > Blocks: 3            Seconds: 42
   > contract address:    0x1A686697A178951c05885E56bcb2c7a1D514bE1a
   > block number:        11239368
   > block timestamp:     1661056225
   > account:             0x10720731cd2379a6826Ee206B8f161f236399619
   > balance:             0.477758862492291831
   > gas used:            2492072 (0x2606a8)
   > gas price:           10 gwei
   > value sent:          0 ETH
   > total cost:          0.02492072 ETH
```
```
Transaction History
Harvested - 0xb26b62926adaa0b9e34b2a507f22ecff21e0bfea417111449e54bf075ef170f6
Processed - 0x85857d6311ac61557f46372be12bcf9c63bbf0ec11070f5dca1c70cad303fbd4
Packed - 0x8c54a402ceaa30dba76b9b0343b83d06c20f1f6fb5a17d886cc059b0735019f0
ForSale - 0xc9e69fd4e77784b75a60f17e5c750a2bab7fb95dc4b9ccac56f76edcd28afbba
Sold - 0x81ccbbb57fcfd4b38381a6884a1df47e9547ad2f542a43138e02c5963983e313
Shipped - 0xe188a235ebc1e403ff1f12901956605c1645685531d9f9556fb4a4911828f89b
Received - 0x5687dba8b749cfd87ceb913e106f5c32a9c94437fc68903ded31464d68af3f0c
Purchased - 0x49f96d48bb333350c201b8213feee884ff94f23ef158526e4667ddcf8c0fd2a4
````