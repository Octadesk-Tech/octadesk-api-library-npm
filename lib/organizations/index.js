module.exports =class Organizations {
  constructor(client) {
    this.client = client
    this.baseResource = "/organizations/"
  }

  /**
   * GET /{id} from Organizations API
   *
   */
  async get(id) {
    let response = await this.client.get(`${this.baseResource}${id}`)
    return response.data
  }

  /**
   * POST / from Organizations API
   *
   */
  async create(organization) {
    let response = await this.client.get(`${this.baseResource}`, organization)
    return response.data
  }

  /**
   * PUT /{id} from Organizations API
   *
   */
  async update(organization) {
    let response = await this.client.get(`${this.baseResource}${organization.id}`, organization)
    return response.data
  }
}
