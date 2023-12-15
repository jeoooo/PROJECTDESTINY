/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y")

  collection.options = {
    "query": "SELECT\n    MIN(ws.id) AS id,\n    s.school_name,\n    w.website_name\nFROM website_status ws\nJOIN school s ON ws.school_id = s.id\nJOIN website w ON ws.website_id = w.id\nGROUP BY ws.school_id, ws.website_id;\n"
  }

  // remove
  collection.schema.removeField("3ptu0tfl")

  // remove
  collection.schema.removeField("spddgd6s")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gumkwlou",
    "name": "school_name",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "udrxuauo",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y")

  collection.options = {
    "query": "SELECT\n    MIN(id) AS id,\n    school_id,\n    website_id\nFROM website_status\nGROUP BY school_id, website_id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3ptu0tfl",
    "name": "school_id",
    "type": "relation",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "collectionId": "ag8jz5n4uk6pmtj",
      "cascadeDelete": false,
      "minSelect": null,
      "maxSelect": 1,
      "displayFields": null
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "spddgd6s",
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

  // remove
  collection.schema.removeField("gumkwlou")

  // remove
  collection.schema.removeField("udrxuauo")

  return dao.saveCollection(collection)
})
