class Tags {
  constructor(client) {
    this.client = client
    this.baseResource = "/tags/"
  }

  /**
   * GET / from Tags API
   *
   * @param {String} keyword
   */
  async get(keyword = "") {
    var path = `${this.baseResource}`

    if (keyword) {
      path = `${this.baseResource}?keyword=${keyword}`
    }

    let response = await this.client.get(path)
    return response.data
  }

  /**
   * POST / from Tags API
   *
   * @param {String} tagName
   */
  async create(tagName) {
    let response = await this.client.post(`${this.baseResource}`, { name: tagName })
    return response.data
  }
}

module.exports = Tags
