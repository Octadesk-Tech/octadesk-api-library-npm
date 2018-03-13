module.exports = class Groups {
  constructor(client) {
    this.client = client
    this.baseResource = "/groups/"
  }

  /**
   * GET / from Groups API
   *
   */
  async getAll() {
    let response = await this.client.get(this.baseResource)
    return response.data
  }

    /**
   * GET /{id} from Groups API
   *
   */
  async get(id) {
    let response = await this.client.get(`${this.baseResource}${id}`)
    return response.data
  }
}
