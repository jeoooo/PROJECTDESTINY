/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th5lov3d2sbey0o")

  collection.createRule = "@collection.api_keys.api_key = api_key && @collection.api_keys.type = \"CREATE/INSERT DATA IN STATUS\""
  collection.updateRule = "@collection.api_keys.api_key = api_key && @collection.api_keys.type ?= \"UPDATE DATA IN STATUS\""

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th5lov3d2sbey0o")

  collection.createRule = "api_key = @collection.api_keys.api_key && @collection.api_keys.type ?= \"CREATE/INSERT DATA IN STATUS\""
  collection.updateRule = "api_key = @collection.api_keys.api_key && @collection.api_keys.type ?= \"UPDATE DATA IN STATUS\""

  return dao.saveCollection(collection)
})
