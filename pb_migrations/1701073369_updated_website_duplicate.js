/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("2k7ovt20szeovwr")

  collection.name = "website_current_status"

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0y9yxmxw",
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
  const collection = dao.findCollectionByNameOrId("2k7ovt20szeovwr")

  collection.name = "website_duplicate"

  // remove
  collection.schema.removeField("0y9yxmxw")

  return dao.saveCollection(collection)
})
