/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tgq5s4hclqrhkc")

  collection.name = "current_stats"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tgq5s4hclqrhkc")

  collection.name = "current_status_duplicate"

  return dao.saveCollection(collection)
})
