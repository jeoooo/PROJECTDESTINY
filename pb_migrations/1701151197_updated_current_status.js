/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    s.school_name,\n    s.acronym as school_acronym,\n    w.website_name,\n    ws.status_code,\n    ws.created AS checked_at,\n    ws.description\nFROM (\n    SELECT\n        MIN(id) AS id,\n        school_id,\n        website_id,\n        MAX(created) AS max_created\n    FROM website_status\n    GROUP BY school_id, website_id\n) latest_ws\nJOIN website_status ws ON latest_ws.id = ws.id\nJOIN school s ON ws.school_id = s.id\nJOIN website w ON ws.website_id = w.id;\n"
  }

  // remove
  collection.schema.removeField("6ilx1w8e")

  // remove
  collection.schema.removeField("3r89wefk")

  // remove
  collection.schema.removeField("flcjtwog")

  // remove
  collection.schema.removeField("moh3dfvc")

  // remove
  collection.schema.removeField("0wwv8rid")

  // remove
  collection.schema.removeField("rveucxte")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6hkorbkn",
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
    "id": "sllsunzw",
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
    "id": "vyu7rxwa",
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
    "id": "fdpydxi8",
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
    "id": "bujdwlka",
    "name": "checked_at",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8ylemffc",
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
    "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    s.school_name,\n  s.acronym as school_acronym,\n    w.website_name,\n    ws.status_code,\n  ws.created AS checked_at,\n    ws.description\nFROM (\n    SELECT\n        MIN(id) AS id,\n        school_id,\n        website_id,\n        MAX(created) AS max_created\n    FROM website_status\n    GROUP BY school_id, website_id\n) latest_ws\nJOIN website_status ws ON latest_ws.id = ws.id\nJOIN school s ON ws.school_id = s.id\nJOIN website w ON ws.website_id = w.id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "6ilx1w8e",
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
    "id": "3r89wefk",
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
    "id": "flcjtwog",
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
    "id": "moh3dfvc",
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
    "id": "0wwv8rid",
    "name": "checked_at",
    "type": "date",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": "",
      "max": ""
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rveucxte",
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
  collection.schema.removeField("6hkorbkn")

  // remove
  collection.schema.removeField("sllsunzw")

  // remove
  collection.schema.removeField("vyu7rxwa")

  // remove
  collection.schema.removeField("fdpydxi8")

  // remove
  collection.schema.removeField("bujdwlka")

  // remove
  collection.schema.removeField("8ylemffc")

  return dao.saveCollection(collection)
})
