/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n1brup9m8lq7zo5")

  // remove
  collection.schema.removeField("g0d6jid3")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "femznowq",
    "name": "website_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "h659njd7xdqln6c",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("n1brup9m8lq7zo5")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "g0d6jid3",
    "name": "website_name",
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

  // remove
  collection.schema.removeField("femznowq")

  return dao.saveCollection(collection)
})
