/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ag8jz5n4uk6pmtj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "r8ntyoki",
    "name": "websites",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "h659njd7xdqln6c",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": null,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ag8jz5n4uk6pmtj")

  // remove
  collection.schema.removeField("r8ntyoki")

  return dao.saveCollection(collection)
})
