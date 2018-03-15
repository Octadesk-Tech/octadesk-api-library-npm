# octadesk-api
Node proxy to Octadesk APIs

[![npm version](https://badge.fury.io/js/octadesk-api.svg)](https://badge.fury.io/js/octadesk-api)

## Install
```
npm install octadesk-api
```

## Usage
Use your API Token or your Octadesk credentials.

```
const octadeskAPI = require('octadesk-api')

let octadesk = new octadeskAPI('https://api.octadesk.services', 'YOUR_API_TOKEN')

/* or */

let octadesk = new octadeskAPI('https://api.octadesk.services')
await octadesk.authenticate('YOUR_USERNAME', 'YOUR_PASSWORD')

/* then */

octadesk.tags.get("")
    .then(tags => {
        tags.forEach(tag => {
            console.log(tag.name)
        })
    })
 ```

## Functions

### Company (octadesk.company)

- company.get() - [GET /](https://api.octadesk.services/docs/#/Company/Get)

### Custom Fields (octadesk.customfields)

- customfields.getAll() - [GET /](https://api.octadesk.services/docs/#/CustomField/Get)
- customfields.get(id) - [GET /{id}](https://api.octadesk.services/docs/#/CustomField/ByIdGet)
- customfields.getByFieldId(id, domainType) - [GET /{fieldId}/{domainType}](https://api.octadesk.services/docs/#/CustomField/ByFieldIdByDomainTypeGet)
- customfields.create(customField) - [POST /](https://api.octadesk.services/docs/#/CustomField/Post)
- customfields.update(customField) - [PUT /](https://api.octadesk.services/docs/#/CustomField/ByIdPut)
- customfields.remove(id) - [DELETE /{id}](https://api.octadesk.services/docs/#/CustomField/ByIdDelete)
- customfields.reoderFields(customFields) - [POST /reorder](https://api.octadesk.services/docs/#/CustomField/ReorderPost)
- customfields.getAllFieldsBySystemType(domainType, showEnabledItems = true) - [GET /system-type/{systemType}](https://api.octadesk.services/docs/#/CustomField/System_typeBySystemTypeGet)
- customfields.getFiltersFields() - [GET /filters](https://api.octadesk.services/docs/#/CustomField/FiltersGet)
- customfields.getSetterFields() - [GET /setters](https://api.octadesk.services/docs/#/CustomField/SettersGet)
- customfields.getOutputsFields() - [GET /outputs](https://api.octadesk.services/docs/#/CustomField/OutputsGet)

### Forms (octadesk.forms)

- forms.getAll() - [GET /]()
- forms.get(id) - [GET /{id}]()
- forms.getDefault(domain) - [GET /default](https://api.octadesk.services/docs/#/Forms/DefaultGet)
- forms.create(form) - [POST /](https://api.octadesk.services/docs/#/Forms/Post)
- forms.update(form) - [PUT /](https://api.octadesk.services/docs/#/Forms/ByIdPut)
- forms.remove(id) - [DELETE /](https://api.octadesk.services/docs/#/Forms/ByIdDelete)
- forms.render.getByDomain(domain = 'Ticket', area = 'Ticket') - [GET /render/{domain}](https://api.octadesk.services/docs/#/Render/RenderByDomainGet)
- forms.render.getById(id, area = 'Ticket') - [GET /render/{domain}](https://api.octadesk.services/docs/#/Render/RenderByIdByFormAreaGet)
- forms.fields.get(domain = 'Ticket') - [GET /fields](https://api.octadesk.services/docs/#/Fields/FieldsGet)

### Groups (octadesk.groups)

- groups.getAll() - [GET /](https://api.octadesk.services/docs/#/groups/getAll)
- groups.get(id) - [GET /{id}](https://api.octadesk.services/docs/#/groups/getById)

### Help Center (octadesk.helpcenter)

- helpcenter.get() - [GET /helpcenter](https://api.octadesk.services/docs/#/HelpCenter/HelpcenterGet)
- helpcenter.update(helpcenter) - [PUT /helpcenter](https://api.octadesk.services/docs/#/HelpCenter/HelpcenterPut)

### Macros (octadesk.macros)

- macros.getAll() - [GET /](https://api.octadesk.services/docs/#/Macro/Get)
- macros.get(id) - [GET /{id}](https://api.octadesk.services/docs/#/Macro/ByIdGet)
- macros.getByOwner(idOwner, includeExcludedRecords = true) - [GET /all/{idOwner}/{includeExcludedRecords}](https://api.octadesk.services/docs/#/Macro/AllByIdOwnerByIncludeExcludedRecordsGet)
- macros.getByOwnerAndStatus(idOwner, status, name) - [GET /{idOwner}/{status}](https://api.octadesk.services/docs/#/Macro/ByIdOwnerByStatusGet)
- macros.create(macro) - [POST /](https://api.octadesk.services/docs/#/Macro/Post)
- macros.update(macro) - [PUT /](https://api.octadesk.services/docs/#/Macro/Put)
- macros.remove(id) - [DELETE /](https://api.octadesk.services/docs/#/Macro/ByIdDelete)
- macros.execute(id, ticket = undefined) - [GET /{id/execute}](https://api.octadesk.services/docs/#/Macro/ByIdExecuteGet)

### Organizations (octadesk.organizations)

- organizations.get(id) - [GET /{id}](https://api.octadesk.services/docs/#/organizations/get)
- organizations.create(organization) - [POST /](https://api.octadesk.services/docs/#/organizations/create)
- organizations.update(organization) - [PUT /{id}](https://api.octadesk.services/docs/#/organizations/update)

### Persons (octadesk.persons)

- persons.get(id) - [GET /{id}](https://api.octadesk.services/docs/#/person/getPerson)
- persons.getByEmail(email) - [GET /?email=](https://api.octadesk.services/docs/#/person/getPerson)
- persons.create(person) - [POST /](https://api.octadesk.services/docs/#/person/createPerson)
- persons.update(person) - [PUT /{id}](https://api.octadesk.services/docs/#/person/updatePerson)

### Products (octadesk.products)

- products.get(id) - [GET /{id}](https://api.octadesk.services/docs/#/Product/ByIdGet)
- products.create(product) - [POST /](https://api.octadesk.services/docs/#/Product/Post)
- products.update(product) - [PUT /{id}](https://api.octadesk.services/docs/#/Product/ByIdPut)
- products.remove(id) - [DELETE /{id}](https://api.octadesk.services/docs/#/Product/ByIdDelete)
- products.search(keyword, onlyEnabledItems = true) - [GET /search](https://api.octadesk.services/docs/#/Product/SearchGet)
- products.search(idProductGroup, keyword, onlyEnabledItems = true) - [GET /search/{idProductGroup}](https://api.octadesk.services/docs/#/Product/SearchByIdProductGroupGet)
- products.search(idProductGroup, fieldName, keyword, onlyEnabledItems = true) - [GET /search/{idProductGroup/{fieldName}](https://api.octadesk.services/docs/#/Product/SearchByIdProductGroupByFieldNameGet)

### Smart Forms (octadesk.smartforms)

- smartforms.getAll() - [GET /](https://api.octadesk.services/docs/#/SmartForms/Get)
- smartforms.get(id) - [GET /{id}](https://api.octadesk.services/docs/#/SmartForms/ByIdGet)

### Subjects (octadesk.subjects)

- subjects.getAll() - [GET /](https://api.octadesk.services/docs/#/Subjects/Get)
- subjects.get(id) - [GET /{id}](https://api.octadesk.services/docs/#/Subjects/ByIdGet)
- subjects.search(keyword, onlyEnabledItems = true, invisibleToClient = true) - [GET /search](https://api.octadesk.services/docs/#/Subjects/SearchGet)

### Tags (octadesk.tags)

- tags.get(keyword = "") - [GET /?keyword=](https://api.octadesk.services/docs/#/tags/getTags)
- tags.create(tagName) - [POST /](https://api.octadesk.services/docs/#/tags/addTag)

### Tickets (octadesk.tickets)

- tickets.get(number) - [GET /{number}](https://api.octadesk.services/docs/#/Tickets/get)
- tickets.getByRequester(idRequester, lastNumber = 0) - [GET /?idRequester=&lastNumber=](https://api.octadesk.services/docs/#/Tickets/searchRequesterTickets)
- tickets.getInteractions(number) - [GET /{number}/interactions](https://api.octadesk.services/docs/#/Tickets/getInteractions)
- tickets.create(ticket) - [POST /](https://api.octadesk.services/docs/#/Tickets/create)
- tickets.update(ticket) - [PUT /{number}](https://api.octadesk.services/docs/#/Tickets/update)
- tickets.getCustomLists() - [GET /custom-lists](https://api.octadesk.services/docs/#/Tickets_Lists/getCustomTicketLists)
- tickets.getCustomListsCounts() - [GET /custom-lists/counts](https://api.octadesk.services/docs/#/Tickets_Lists/countCustomTicketLists)
- tickets.getCustomList(idList) - [GET /custom-list/{idList}](https://api.octadesk.services/docs/#/Tickets_Lists/getCustomTicketList)
- tickets.getCustomListCount(idList) - [GET /custom-list/{idList}/count](https://api.octadesk.services/docs/#/Tickets_Lists/countCustomTicketList)
- tickets.executeList(idList, options = {}) - [POST /list/{idList/execute}](https://api.octadesk.services/docs/#/Tickets_Lists/executeTicketList)
- tickets.getDefaultLists() - [GET /default-lists](https://api.octadesk.services/docs/#/Tickets_Lists/getTicketsSummary)
- tickets.search(options) - [GET /search?status=&lastDateUpdate=&openDate=&lastTicketReference=](https://api.octadesk.services/docs/#/Search_Tickets/searchTickets)

### Workflow (octadesk.workflow)

- workflow.getAllAvailableStatus() - [GET /available-status](https://api.octadesk.services/docs/#/Workflow/Available_statusGet)
- workflow.getAvailableStatus(idCurrentStatus) - [GET /available-status?idCurrentStatus=](https://api.octadesk.services/docs/#/Workflow/Available_statusGet)
- workflow.getCustomAvailableStatus(idTypeStepFlow) - [GET /available-status/custom/{idTypeStepFlow}](https://api.octadesk.services/docs/#/Workflow/Available_statusCustomByIdTypeStepFlowGet)
