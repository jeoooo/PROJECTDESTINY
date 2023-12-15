/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("svklp3jhctmfnxi")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ygtyjvnd",
    "name": "field",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("svklp3jhctmfnxi")

  // remove
  collection.schema.removeField("ygtyjvnd")

  return dao.saveCollection(collection)
})
