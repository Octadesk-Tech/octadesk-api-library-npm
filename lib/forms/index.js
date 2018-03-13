class FormsFields{
  constructor(client) {
    this.client = client
    this.baseResource = "/forms/fields/"
  }

   /**
   * GET /fields/ from Forms API
   *
   */
  async get(domain = 'Ticket') {
    let response = await this.client.get(`${this.baseResource}${domain}?area=${area}`)
    return response.data
  }
}

class FormsRender{
  constructor(client) {
    this.client = client
    this.baseResource = "/forms/render/"
  }

  /**
   * GET /render/{domain} from Forms API
   *
   */
  async getByDomain(domain = 'Ticket', area = 'Ticket') {
    let response = await this.client.get(`${this.baseResource}${domain}?area=${area}`)
    return response.data
  }

  /**
   * GET /render/{id}/{area} from Forms API
   *
   */
  async getById(id, area = 'Ticket') {
    let response = await this.client.get(`${this.baseResource}${id}/${area}`)
    return response.data
  }
}

module.exports = class Forms {
  constructor(client) {
    this.client = client
    this.baseResource = "/forms/"
    this.render = new FormsRender(client)
    this.fields = new FormsFields(client)
  }

  /**
   * GET / from Forms API
   *
   */
  async getAll() {
    let response = await this.client.get(this.baseResource)
    return response.data
  }

  /**
   * GET /{id} from Forms API
   *
   */
  async get(id) {
    let response = await this.client.get(`${this.baseResource}${id}`)
    return response.data
  }

  /**
   * GET /default/ from Forms API
   *
   */
  async getDefault(domain = 'Ticket') {
    let response = await this.client.get(`${this.baseResource}default?domain=${domain}`)
    return response.data
  }

  /**
   * POST / from Forms API
   *
   */
  async create(form) {
    let response = await this.client.post(`${this.baseResource}`, form)
    return response.data
  }

  /**
   * PUT / from Forms API
   *
   */
  async update(form) {
    let response = await this.client.put(`${this.baseResource}${form.id}`, form)
    return response.data
  }

  /**
   * GET /default/ from Forms API
   *
   */
  async remove(id) {
    let response = await this.client.delete(`${this.baseResource}${domain}`)
    return response.data
  }

}
