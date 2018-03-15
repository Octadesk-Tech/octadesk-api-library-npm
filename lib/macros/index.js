module.exports = class Macros {
  constructor(client) {
    this.client = client
    this.baseResource = "/macros/"
  }

  /**
   * GET / from Macros API
   *
   */
  async getAll() {
    let response = await this.client.get(this.baseResource)
    return response.data
  }

  /**
   * GET /{id} from Macros API
   *
   */
  async get(id) {
    let response = await this.client.get(`${this.baseResource}${id}`)
    return response.data
  }

  /**
   * GET /all/{idOwner}/{includeExcludedRecords} from Macros API
   *
   */
  async getByOwner(idOwner, includeExcludedRecords = true) {
    let response = await this.client.get(`${this.baseResource}${idOwner}/${includeExcludedRecords}`)
    return response.data
  }

  /**
   * GET /{idOwner}/{status} from Macros API
   *
   */
  async getByOwnerAndStatus(idOwner, status, name) {
    let response = await this.client.get(`${this.baseResource}${idOwner}/${status}?name=${name}`)
    return response.data
  }

  /**
   * POST / from Macros API
   *
   */
  async create(macro) {
    let response = await this.client.post(`${this.baseResource}`, macro)
    return response.data
  }

  /**
   * PUT / from Macros API
   *
   */
  async update(macro) {
    let response = await this.client.put(`${this.baseResource}`, macro)
    return response.data
  }/**
   * PUT / from Macros API
   *
   */
  async update(macro) {
    let response = await this.client.put(`${this.baseResource}`, macro)
    return response.data
  }

  /**
   * DELETE /{id} from Macros API
   *
   */
  async remove(id) {
    let response = await this.client.delete(`${this.baseResource}${id}`)
    return response.data
  }

  /**
  * GET /{id}/execute from Macros API
  *
  */
  async execute(id, ticket = undefined) {
    if (ticket) {
      let response = await this.client.post(`${this.baseResource}${id}/execute`, ticket)
      return response.data
    }
    else {
      let response = await this.client.get(`${this.baseResource}${id}/execute`)
      return response.data
    }
  }
}
