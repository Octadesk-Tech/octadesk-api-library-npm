module.exports = class Persons {
  constructor(client) {
    this.client = client
    this.baseResource = "/persons/"
  }

  /**
   * GET /{id} from Persons API
   *
   */
  async get(id) {
    let response = await this.client.get(`${this.baseResource}${id}`)
    return response.data
  }

  /**
   * GET / from Persons API
   *
   */
  async getByEmail(email) {
    let response = await this.client.get(`${this.baseResource}?email=${email}`)
    return response.data
  }

  /**
   * POST / from Persons API
   *
   */
  async create(person) {
    let response = await this.client.post(`${this.baseResource}`, person)
    return response.data
  }

  /**
   * PUT /{id} from Persons API
   *
   */
  async update(person) {
    let response = await this.client.put(`${this.baseResource}${person.id}`, person)
    return response.data
  }
}
