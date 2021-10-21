const Web3 = require('web3')
const web3 = new Web3(new Web3.providers.HttpProvider("https://api.avax-test.network/ext/bc/C/rpc") )



web3.eth.subscribe(
    'logs',
    {
        address : '0xfe2239288Ab37b8bCCFb4ebD156463fb14EFC1e9',
        topics : ['Keccak-256 hash(PositionLiquidated(address, address, int256, uint256, int256))']
    },
    function(error,result){
        if(!error)
            console.log(result);
    }
)

.on("connected",function(subscriptionId){
    print(subscriptionId);
})

.on("data",function(transactionHash){
    web3.eth.getTransaction(transactionHash)
        .then(function(transaction){
            console.log(transaction);
        })
})


