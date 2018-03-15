const config = require('./test-config')
const assert = require('chai').assert

const Octadesk = require('..')

const baseUrl = config.get("API_BASEURL")

const octadesk = new Octadesk(baseUrl, config.get("API_TOKEN"))

describe('api.tags', () => {
  describe('get', () => {
    it('should send GET request to /tags?keyword=teste', (done) => {

      octadesk.tags.get("teste")
        .then(tags => {
          assert.isOk(tags.length)
          assert.isOk(tags.find(tag => tag.name.indexOf("teste") >= 0))
          done()
        })
    }).timeout(5000)

    it('should send GET request to /tags/', (done) => {

      octadesk.tags.get("")
        .then(tags => {
          assert.isOk(tags.length)
          assert.isOk(tags.find(tag => tag.name.indexOf("") >= 0))
          done()
        });
    }).timeout(5000)
  })

  describe('create', () => {
    it('should send POST request to /tags/', (done) => {
      let randomStr = Math.random().toString(36).substring(7)
      octadesk.tags.create(randomStr)
        .then(response => {
          assert.isOk(response.success)

          octadesk.tags.get(randomStr)
            .then(tags => {
              assert.isOk(tags.length)
              done()
            })
        });
    }).timeout(5000)
  })
})

