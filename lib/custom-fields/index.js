module.exports = class CustomFields {
  constructor(client) {
    this.client = client
    this.baseResource = "/custom-fields/"
  }

  /**
   * GET / from CustomFields API
   *
   */
  async getAll() {
    let response = await this.client.get(this.baseResource)
    return response.data
  }

  /**
   * GET /{id} from CustomFields API
   *
   */
  async get(id) {
    let response = await this.client.get(`${this.baseResource}${id}`)
    return response.data
  }

  /**
   * GET /{fieldId}/{domainType} from CustomFields API
   */
  async getByFieldId(id, domainType) {
    let response = await this.client.get(`${this.baseResource}${fieldId}/${domainType}`)
    return response.data
  }

  /**
   * POST / from CustomFields API
   */
  async create(customField) {
    let response = await this.client.post(`${this.baseResource}`, customField)
    return response.data
  }

  /**
   * PUT / from CustomFields API
   */
  async update(customField) {
    let response = await this.client.put(`${this.baseResource}${customField.id}`, customField)
    return response.data
  }

  /**
   * DELETE /{id} from CustomFields API
   */
  async remove(id) {
    let response = await this.client.delete(`${this.baseResource}${id}`)
    return response.data
  }

  /**
   * POST /reorder/ from CustomFields API
   */
  async reoderFields(customFields) {
    await this.client.post(`${this.baseResource}'reorder'`, customFields)
  }

  /**
   * GET /system-type/{systemType}/ from CustomFields API
   */
  async getAllFieldsBySystemType(domainType, showEnabledItems = true) {
    await this.client.get(`${this.baseResource}'system-type/${domainType}?showEnabledItem=${(showEnabledItems + '').ToLower()}'`)
  }

  /**
   * GET /filters/ from CustomFields API
   */
  async getFiltersFields() {
    await this.client.get(`${this.baseResource}filters`)
  }

   /**
   * GET /setters/ from CustomFields API
   */
  async getSetterFields() {
    await this.client.get(`${this.baseResource}setters`)
  }

  /**
   * GET /outputs/ from CustomFields API
   */
  async getSetterFields() {
    await this.client.get(`${this.baseResource}outputs`)
  }
}
