module.exports =class Products {
  constructor(client) {
    this.client = client
    this.baseResource = "/products/"
  }

  /**
   * GET /{id} from Products API
   *
   */
  async get(id) {
    let response = await this.client.get(`${this.baseResource}${id}`)
    return response.data
  }

  /**
   * POST / from Products API
   *
   */
  async create(product) {
    let response = await this.client.post(`${this.baseResource}`, product)
    return response.data
  }

   /**
   * PUT /{id} from Products API
   *
   */
  async update(product) {
    let response = await this.client.put(`${this.baseResource}${product.id}`, product)
    return response.data
  }

  /**
   * DELETE /{id} from Products API
   *
   */
  async remove(id) {
    let response = await this.client.delete(`${this.baseResource}${id}`)
    return response.data
  }

  /**
   * GET /search/ from Products API
   *
   */
  async search(keyword, onlyEnabledItems = true) {
    let response = await this.client.get(`${this.baseResource}search?keyword=${keyword}&onlyEnabledItems=${onlyEnabledItems}`)
    return response.data
  }

  /**
   * GET /search/{idProductGroup}/ from Products API
   *
   */
  async search(idProductGroup, keyword, onlyEnabledItems = true) {
    let response = await this.client.get(`${this.baseResource}search/${idProductGroup}?keyword=${keyword}&onlyEnabledItems=${onlyEnabledItems}`)
    return response.data
  }

  /**
   * GET /search/{idProductGroup}/{fieldName} from Products API
   *
   */
  async search(idProductGroup, fieldName, keyword, onlyEnabledItems = true) {
    let response = await this.client.get(`${this.baseResource}search/${idProductGroup}/${fieldName}?keyword=${keyword}&onlyEnabledItems=${onlyEnabledItems}`)
    return response.data
  }
}
