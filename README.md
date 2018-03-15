# octadesk-api
Node proxy to Octadesk APIs

npm install octadesk-api


const octadeskAPI = require('octadesk-api')

let proxy = new octadeskAPI('https://api.octadesk.services', 'YOUR_ACCESS_TOKEN')

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
