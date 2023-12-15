/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf5nb9ro72rq34f")

  collection.name = "current_status"

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf5nb9ro72rq34f")

  collection.name = "website_status_duplicate"

  return dao.saveCollection(collection)
})
