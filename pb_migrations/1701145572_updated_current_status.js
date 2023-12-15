/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y")

  collection.options = {
    "query": "SELECT\n    ws.id,\n    s.school_name,\n    w.website_name,\n    ws.status_code,\n    ws.description\nFROM (\n    SELECT\n        MIN(id) AS id,\n        school_id,\n        website_id,\n        MAX(created) AS max_created\n    FROM website_status\n    GROUP BY school_id, website_id\n) latest_ws\nJOIN website_status ws ON latest_ws.id = ws.id\nJOIN school s ON ws.school_id = s.id\nJOIN website w ON ws.website_id = w.id;\n"
  }

  // remove
  collection.schema.removeField("gumkwlou")

  // remove
  collection.schema.removeField("udrxuauo")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9dzlb782",
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
    "id": "fbv9fjif",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8cw7f96e",
    "name": "status_code",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "lju10soq",
    "name": "description",
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
    "query": "SELECT\n    MIN(ws.id) AS id,\n    s.school_name,\n    w.website_name\nFROM website_status ws\nJOIN school s ON ws.school_id = s.id\nJOIN website w ON ws.website_id = w.id\nGROUP BY ws.school_id, ws.website_id;\n"
  }

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

  // remove
  collection.schema.removeField("9dzlb782")

  // remove
  collection.schema.removeField("fbv9fjif")

  // remove
  collection.schema.removeField("8cw7f96e")

  // remove
  collection.schema.removeField("lju10soq")

  return dao.saveCollection(collection)
})
