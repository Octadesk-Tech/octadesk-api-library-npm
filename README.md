# octadesk-api
Node proxy to Octadesk APIs

[![npm version](https://badge.fury.io/js/octadesk-api.svg)](https://badge.fury.io/js/octadesk-api)

## Install
```
npm install octadesk-api
```

## Usage
Use your API Token or your Octadesk credentials.

```
const octadeskAPI = require('octadesk-api')

let proxy = new octadeskAPI('https://api.octadesk.services', 'YOUR_API_TOKEN')

/* or */

let proxy = new octadeskAPI('https://api.octadesk.services')
await proxy.authenticate('YOUR_USERNAME', 'YOUR_PASSWORD')

/* then */

proxy.tags.get("")
    .then(tags => {
        tags.forEach(tag => {
            console.log(tag.name)
        })
    })
 ```
