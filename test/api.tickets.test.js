const config = require('./test-config')
const assert = require('chai').assert

const Octadesk = require('..')

const baseUrl = config.get("API_BASEURL")

const octadesk = new Octadesk(baseUrl, config.get("API_TOKEN"))

describe('api.tickets', () => {
  describe('search', () => {
    it('should send GET request to /search?status', (done) => {
      let options = {
        status: ["novo", "pendente"]
      }
      octadesk.tickets.search(options)
        .then(response => {
          assert.isOk(response.data.length)

          //paginating
          if (response.options.lastTicketReference) {
            octadesk.tickets.search(response.options)
              .then(response => {
                assert.isOk(response.data.length)
                done()
              })
          }
        })
    })

    it('should send GET request to /search?status=novo|pendente&openDate=<2018-03-01', (done) => {
      let options = {
        openDate: ['<' + (new Date('2018-03-01')).toISOString()],
        status: ['novo', 'pendente']
      }
      octadesk.tickets.search(options)
        .then(response => {
          assert.isOk(response.data.length)

          //paginating
          if (response.options.lastTicketReference) {
            octadesk.tickets.search(response.options)
              .then(response => {
                assert.isOk(response.data.length)
                done()
              })
          }
        })
    })
  })
})

