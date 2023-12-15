/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("4tgq5s4hclqrhkc")

  // remove
  collection.schema.removeField("n59wu5sw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iqiwwpix",
    "name": "website",
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
  const collection = dao.findCollectionByNameOrId("4tgq5s4hclqrhkc")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "n59wu5sw",
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
  collection.schema.removeField("iqiwwpix")

  return dao.saveCollection(collection)
})
