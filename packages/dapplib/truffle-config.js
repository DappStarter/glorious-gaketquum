require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'guess gloom symptom spot warrior ridge remain umbrella hidden close brisk two'; 
let testAccounts = [
"0x2695e1b178e686c80c3f63017e7bb77e3360a143777e6ec2c6054685ade14125",
"0x9b1b865d133bb84c156335bd30eee6ba400f00b2452a84d8a6b4e77b69e56d17",
"0xbb6b5c5114b74f224b1a97e58655a67be34517c5d524413034621c3a3ae6d776",
"0x87422ef828a46a9be387bb913c1400738761c30152d209de532f5e493110c810",
"0xe5e3b445631244b3110f218d70ddbd456765678ffb840a633ef3824f5bb165e2",
"0x35ee3da11cc1d482f4146d8b5e434eba951a855f78890910e4497f4d13c1a2fb",
"0xb15cd987ab41de835d3fdb5b69c097cdb815ebbc62403cd776ee2888db89a74b",
"0x2228fd705151c34e1a7119b921f8ba9077c91e71d37421b31cbfb077b39b2bfb",
"0xe67c67563f95b6d48a0058b028d1026ee9be1c6d7acfa20dd237e7d68a1591e3",
"0x57172356833c5ba0f77c5b2fc0ef125e09a42b058d1613e2c0dc436aba5c8302"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

