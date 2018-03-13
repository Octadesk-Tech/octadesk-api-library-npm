module.exports = class SmartForms {
  constructor(client) {
    this.client = client
    this.baseResource = "/smart-forms/"
  }

  /**
   * GET / from SmartForms API
   *
   */
  async getAll() {
    let response = await this.client.get(`${this.baseResource}`)
    return response.data
  }

  /**
  * GET /{id} from SmartForms API
  *
  */
  async get(id) {
    let response = await this.client.get(`${this.baseResource}${id}`)
    return response.data
  }
}
