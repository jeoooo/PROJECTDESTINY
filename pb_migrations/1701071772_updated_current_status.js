/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf5nb9ro72rq34f")

  // remove
  collection.schema.removeField("zxocts9c")

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cf5nb9ro72rq34f")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zxocts9c",
    "name": "timestamp",
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
})
