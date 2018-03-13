module.exports = class Workflow {
  constructor(client) {
    this.client = client
    this.baseResource = "/workflow/"
  }

  /**
  * GET /available-status/ from Workflow API
  *
  */
  async getAllAvailableStatus() {
    let response = await this.client.get(`${this.baseResource}available-status/`)
    return response.data
  }

  /**
  * GET /available-status/ from Workflow API
  *
  */
  async getAvailableStatus(idCurrentStatus) {
    let response = await this.client.get(`${this.baseResource}available-status?idCurrentStatus=${idCurrentStatus}`)
    return response.data
  }

  /**
  * GET /available-status/custom/ from Workflow API
  *
  */
  async getCustomAvailableStatus(idTypeStepFlow) {
    let response = await this.client.get(`${this.baseResource}available-status/custom/${idTypeStepFlow}`)
    return response.data
  }
}
