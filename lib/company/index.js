module.exports = class Company {
  constructor(client) {
    this.client = client
    this.baseResource = "/company/"
  }

  /**
   * GET / from Company API
   *
   */
  async get() {
    let response = await this.client.get(this.baseResource)
    return response.data
  }
}
