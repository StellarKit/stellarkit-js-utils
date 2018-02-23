## Stellar JS Utils  


Build:
```
npm install
npm run dist
```

### High level calls to Stellar JS SDK

Collection of Stellar APIs and useful dialogs

Includes:
+ Donate dialog with Ledger nano support.
+ Bifrost dialog for buying tokens.
+ High level JS API for Stellar

See [Stellar Client](https://github.com/StellarKit/stellar-client) for an example of using this package

The UI part uses Vuetify and VueJS, so these dialogs will only work within a vuetify v-app tag
The JS API doesn't require anything

Don't worry Vue and Vuetify are awesome and it should be simple to integrate within any website.

Check out https://vuetifyjs.com for more details.

### JS API

server()
serverURL()
horizonMetrics()
accountInfo(publicKey)
balances(publicKey)
mergeAccount(sourceSecret, destKey)
manageOffer(sourceSecret, buying, selling, amount, price, offerID = 0)
changeTrust(sourceSecret, asset, limit)
allowTrust(sourceSecret, trustor, asset, authorize)
makeMultiSig(sourceSecret, publicKey)
sendAsset(sourceSecret, destKey, amount, asset = null, memo = null, additionalSigners = null)
hasAssetTrustline(account, asset)
buyTokens(sourceSecret, sendAsset, destAsset, sendMax, destAmount)
lockAccount(sourceSecret)
setDomain(sourceSecret, domain)
getFlags(publicKey)
setFlags(sourceSecret, flags)
clearFlags(sourceSecret, flags)
setInflationDestination(sourceSecret, inflationDest)
createAccount(sourceSecret, destinationKey, startingBalance)
setOptions(sourceSecret, options)


Pull requests welcome!

### Donations
If you like the code, a donation would be appreciated. Even a single XLM!

Click here for the [`donation page`](https://stellarkit.io/#/donate). Ledger nano supported!

```
XLM: GCYQSB3UQDSISB5LKAL2OEVLAYJNIR7LFVYDNKRMLWQKDCBX4PU3Z6JP
```
