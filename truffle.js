// truffle.js config for klaytn.

const PrivateKeyConnector= require('connect-privkey-to-provider')
const NETWORK_ID ='1001'
const GASLIMIT ='20000000'
const URL = 'https://api.baobab.klaytn.net:8651'
const PRIVATE_KEY= '0x7fd553c3323b13bffd9c2a4809befe598c86d9debdb5c082f8a805bfdd33a8bf'

module.exports = {
    networks:{
        klaytn: {
            provider : new PrivateKeyConnector(PRIVATE_KEY,URL),
            network_id: NETWORK_ID,
            gas: GASLIMIT,
            gasPrice: null,
        }
    },
}
