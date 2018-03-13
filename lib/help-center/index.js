class HelpCenter {
  constructor(client) {
    this.client = client
    this.baseResource = "/company/helpcenter/"
  }

  /**
   * GET /helpcenter/ from Company API
   *
   */
  async get() {
    let response = await this.client.get(this.baseResource)
    return response.data
  }

  /**
   * GET /helpcenter/ from Company API
   *
   */
  async update(helpcenter) {
    let response = await this.client.post(this.baseResource, helpcenter)
    return response.data
  }
}

module.exports = HelpCenter
