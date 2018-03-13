const { Client, AuthenticateClient } = require('./http-utils')

const apis = {
  company: require('./company'),
  customfields: require('./custom-fields'),
  forms: require('./forms'),
  groups: require('./groups'),
  helpcenter: require('./help-center'),
  macros: require('./macros'),
  organizations: require('./organizations'),
  persons: require('./persons'),
  products: require('./products'),
  smartforms: require('./smart-forms'),
  subjects: require('./subjects'),
  tags: require('./tags'),
  tickets: require('./tickets'),
  workflow: require('./workflow')
}

class Octadesk {
  constructor(baseURL, accessToken) {
    this.baseURL = baseURL

    if (accessToken) {
      this._client = new Client(baseURL, accessToken)
      this._initializeSubApis()
    }
  }

  async authenticate(subdomain, username, password) {
    let client = new AuthenticateClient(this.baseURL, subdomain)
    const response = await client.login(username, password)

    if (response && response.token) {
      this._client = new Client(this.baseURL, response.token)
      this._initializeSubApis()
      return response.token
    } else {
      return Error("Credentials invalid")
    }
  }

  async _initializeSubApis() {
    for (var name in apis) {
      let clax = apis[name]
      this[name] = new clax(this._client)
    }
  }
}

module.exports = Octadesk
