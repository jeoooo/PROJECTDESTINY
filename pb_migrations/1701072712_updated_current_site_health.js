/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf5nb9ro72rq34f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "5qydpvza",
    "name": "last_checked",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf5nb9ro72rq34f")

  // remove
  collection.schema.removeField("5qydpvza")

  return dao.saveCollection(collection)
})
