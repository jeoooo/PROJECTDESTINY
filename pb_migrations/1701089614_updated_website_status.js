/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th5lov3d2sbey0o")

  collection.createRule = "@collection.api_keys.api_key ?= @request.data.api_key"
  collection.updateRule = "@collection.api_keys.api_key ?= @request.data.api_key"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("th5lov3d2sbey0o")

  collection.createRule = ""
  collection.updateRule = ""

  return dao.saveCollection(collection)
})
