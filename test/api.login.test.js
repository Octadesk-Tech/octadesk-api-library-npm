const config = require('./test-config')
const assert = require('chai').assert

const Octadesk = require('..')

describe('api.login', () => {
  describe('post', () => {
    it('should send POST request to /login', (done) => {
      const baseUrl = config.get("API_BASEURL")
      const octadesk = new Octadesk(baseUrl)

      octadesk.authenticate(config.get("API_SUBDOMAIN"),
        config.get("API_USERNAME"),
        config.get("API_PASSWORD"))
        .then(token => {
          assert.isOk(token)
          done()
        })
    }).timeout(5000)
  })
})
