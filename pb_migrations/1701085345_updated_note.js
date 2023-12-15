/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("svklp3jhctmfnxi")

  collection.name = "test_table"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("svklp3jhctmfnxi")

  collection.name = "note"

  return dao.saveCollection(collection)
})
