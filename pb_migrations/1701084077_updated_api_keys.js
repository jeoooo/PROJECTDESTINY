/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zv93o2rruoxg6vg")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7nnnye3e",
    "name": "type",
    "type": "text",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "pattern": ""
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("zv93o2rruoxg6vg")

  // remove
  collection.schema.removeField("7nnnye3e")

  return dao.saveCollection(collection)
})
