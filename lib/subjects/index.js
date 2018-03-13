module.exports = class Subjects {
  constructor(client) {
    this.client = client
    this.baseResource = "/subjects/"
  }

  /**
 * GET / from Subjects API
 *
 */
  async getAll() {
    let response = await this.client.get(`${this.baseResource}`)
    return response.data
  }

  /**
  * GET /{id} from Subjects API
  *
  */
  async get(id) {
    let response = await this.client.get(`${this.baseResource}${id}`)
    return response.data
  }

  /**
  * GET /search/ from Subjects API
  *
  */
  async search(keyword, onlyEnabledItems = true, invisibleToClient = true) {
    let response = await this.client.get(`${this.baseResource}search?keyword=${keyword}&onlyEnabledItems=${onlyEnabledItems}&invisibleToClient=${invisibleToClient}`)
    return response.data
  }
}
