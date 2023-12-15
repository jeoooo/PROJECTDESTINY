/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ag8jz5n4uk6pmtj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vs7uiiek",
    "name": "logo",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/webp",
        "image/png",
        "image/vnd.mozilla.apng",
        "image/jpeg"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("ag8jz5n4uk6pmtj")

  // remove
  collection.schema.removeField("vs7uiiek")

  return dao.saveCollection(collection)
})
