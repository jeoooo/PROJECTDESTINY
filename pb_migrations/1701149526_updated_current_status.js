/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    s.school_name,\n  s.acronym as school_acronym,\n    w.website_name,\n    ws.status_code,\n    ws.description\nFROM (\n    SELECT\n        MIN(id) AS id,\n        school_id,\n        website_id,\n        MAX(created) AS max_created\n    FROM website_status\n    GROUP BY school_id, website_id\n) latest_ws\nJOIN website_status ws ON latest_ws.id = ws.id\nJOIN school s ON ws.school_id = s.id\nJOIN website w ON ws.website_id = w.id;\n"
  }

  // remove
  collection.schema.removeField("ull9zusm")

  // remove
  collection.schema.removeField("h2jxbntk")

  // remove
  collection.schema.removeField("aihcdlg3")

  // remove
  collection.schema.removeField("sfvqbnc3")

  // remove
  collection.schema.removeField("bzkr2tfb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0rb5oyq6",
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
    "id": "szuag2bl",
    "name": "school_acronym",
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
    "id": "4z4uwmcx",
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
    "id": "kwdxvpyp",
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
    "id": "cqkvi2yp",
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
    "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    s.school_name,\n  s.acronym,\n    w.website_name,\n    ws.status_code,\n    ws.description\nFROM (\n    SELECT\n        MIN(id) AS id,\n        school_id,\n        website_id,\n        MAX(created) AS max_created\n    FROM website_status\n    GROUP BY school_id, website_id\n) latest_ws\nJOIN website_status ws ON latest_ws.id = ws.id\nJOIN school s ON ws.school_id = s.id\nJOIN website w ON ws.website_id = w.id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ull9zusm",
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
    "id": "h2jxbntk",
    "name": "acronym",
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
    "id": "aihcdlg3",
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
    "id": "sfvqbnc3",
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
    "id": "bzkr2tfb",
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

  // remove
  collection.schema.removeField("0rb5oyq6")

  // remove
  collection.schema.removeField("szuag2bl")

  // remove
  collection.schema.removeField("4z4uwmcx")

  // remove
  collection.schema.removeField("kwdxvpyp")

  // remove
  collection.schema.removeField("cqkvi2yp")

  return dao.saveCollection(collection)
})
