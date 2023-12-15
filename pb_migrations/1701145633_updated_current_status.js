/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    s.school_name,\n    w.website_name,\n    ws.status_code,\n    ws.description\nFROM (\n    SELECT\n        MIN(id) AS id,\n        school_id,\n        website_id,\n        MAX(created) AS max_created\n    FROM website_status\n    GROUP BY school_id, website_id\n) latest_ws\nJOIN website_status ws ON latest_ws.id = ws.id\nJOIN school s ON ws.school_id = s.id\nJOIN website w ON ws.website_id = w.id;\n"
  }

  // remove
  collection.schema.removeField("9dzlb782")

  // remove
  collection.schema.removeField("fbv9fjif")

  // remove
  collection.schema.removeField("8cw7f96e")

  // remove
  collection.schema.removeField("lju10soq")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xdgicusc",
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
    "id": "6sbzyif5",
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
    "id": "snfxaawa",
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
    "id": "u0xvhmnf",
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
    "query": "SELECT\n    ws.id,\n    s.school_name,\n    w.website_name,\n    ws.status_code,\n    ws.description\nFROM (\n    SELECT\n        MIN(id) AS id,\n        school_id,\n        website_id,\n        MAX(created) AS max_created\n    FROM website_status\n    GROUP BY school_id, website_id\n) latest_ws\nJOIN website_status ws ON latest_ws.id = ws.id\nJOIN school s ON ws.school_id = s.id\nJOIN website w ON ws.website_id = w.id;\n"
  }

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

  // remove
  collection.schema.removeField("xdgicusc")

  // remove
  collection.schema.removeField("6sbzyif5")

  // remove
  collection.schema.removeField("snfxaawa")

  // remove
  collection.schema.removeField("u0xvhmnf")

  return dao.saveCollection(collection)
})
