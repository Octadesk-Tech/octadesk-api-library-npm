module.exports = class Tickets {
  constructor(client) {
    this.client = client
    this.baseResource = "/tickets/"
  }

  /**
 * GET /{number} from Tickets API
 *
 */
  async get(number) {
    let response = await this.client.get(`${this.baseResource}${number}`)
    return response.data
  }

  /**
 * GET / from Tickets API
 *
 */
  async getByRequester(idRequester, lastNumber = 0) {
    let resource = `${this.baseResource}?idRequester=${idRequester}`
    if (lastNumber > 0) {
      resource += `&lastNumber=${lastNumber}`
    }

    let response = await this.client.get(resource)
    return response.data
  }

  /**
  * GET /{number}/interactions from Tickets API
  *
  */
  async getInteractions(number) {
    let response = await this.client.get(`${this.baseResource}${number}/interactions`)
    return response.data
  }

  /**
    * POST / from Tickets API
    *
    */
  async create(ticket) {
    let response = await this.client.post(`${this.baseResource}`, ticket)
    return response.data
  }

  /**
  * PUT /{number} from Tickets API
  *
  */
  async update(ticket) {
    let response = await this.client.put(`${this.baseResource}${ticket.number}`, ticket)
    return response.data
  }

  /**
  * GET /custom-lists/ from Tickets API
  *
  */
  async getCustomLists() {
    let response = await this.client.get(`${this.baseResource}custom-lists/`)
    return response.data
  }

  /**
  * GET /custom-lists/counts from Tickets API
  *
  */
  async getCustomListsCounts() {
    let response = await this.client.get(`${this.baseResource}custom-lists/counts`)
    return response.data
  }

  /**
  * GET /custom-lists/{idList} from Tickets API
  *
  */
  async getCustomList(idList) {
    let response = await this.client.get(`${this.baseResource}custom-list/${idList}`)
    return response.data
  }

  /**
  * GET /custom-lists/{idList}/count from Tickets API
  *
  */
  async getCustomListCount(idList) {
    let response = await this.client.get(`${this.baseResource}custom-list/${idList}/count`)
    return response.data
  }

  /**
  * POST /list/{idList}/execute from Tickets API
  *
  */
  async executeList(idList, options = {}) {
    let response = await this.client.post(`${this.baseResource}list/${idList}/execute`, options)
    return response.data
  }

  /**
  * GET /default-lists from Tickets API
  *
  */
  async getDefaultLists() {
    let response = await this.client.get(`${this.baseResource}default-lists`)
    return response.data
  }

  async search(options) {
    let builder = {}
    if (options) {
      if (options.status)
        builder.status = options.status.join('|')

      if (options.lastDateUpdate)
        builder.lastDateUpdate = options.lastDateUpdate.join(',')

      if (options.openDate)
        builder.openDate = options.openDate.join(',')

      if (options.lastTicketReference)
        builder.lastTicketReference = options.lastTicketReference
    }

    let response = await this.client.get(`${this.baseResource}search`)
  }
}