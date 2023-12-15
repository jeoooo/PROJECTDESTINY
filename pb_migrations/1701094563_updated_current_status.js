/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cwwavm0el2xmbay")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER ()) AS id,\n    s.school_name,\n    w.website_name,\n    w.type,\n    w.url,\n    COALESCE(ws.status_code, 0) AS status_code,\n    COALESCE(ws.description, '0') AS description\nFROM\n    school s\nJOIN\n    website w ON s.id = w.school_id\nLEFT JOIN (\n    SELECT\n        website_id,\n        status_code,\n        description,\n        created\n    FROM\n        website_status ws1\n    WHERE\n        created = (\n            SELECT\n                MAX(created)\n            FROM\n                website_status ws2\n            WHERE\n                ws1.website_id = ws2.website_id\n        )\n) ws ON w.id = ws.website_id\nORDER BY\n    s.school_name, w.website_name;\n"
  }

  // remove
  collection.schema.removeField("z4smuwez")

  // remove
  collection.schema.removeField("01rxbgh8")

  // remove
  collection.schema.removeField("sjcpya6b")

  // remove
  collection.schema.removeField("ohnvxsdj")

  // remove
  collection.schema.removeField("lndat86u")

  // remove
  collection.schema.removeField("qx7qw2s4")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gn72nryz",
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
    "id": "ogcfssfa",
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
    "id": "ceyvyexr",
    "name": "type",
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
    "id": "1gcb0pbs",
    "name": "url",
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
    "id": "srh2dcke",
    "name": "status_code",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xokd5sk6",
    "name": "description",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cwwavm0el2xmbay")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER ()) AS id,\n    s.school_name,\n    w.website_name,\n    w.type,\n    w.url,\n    COALESCE(ws.status_code, 200) AS status_code,\n    COALESCE(ws.description, 'OK') AS description\nFROM\n    school s\nJOIN\n    website w ON s.id = w.school_id\nLEFT JOIN (\n    SELECT\n        website_id,\n        status_code,\n        description,\n        created\n    FROM\n        website_status ws1\n    WHERE\n        created = (\n            SELECT\n                MAX(created)\n            FROM\n                website_status ws2\n            WHERE\n                ws1.website_id = ws2.website_id\n        )\n) ws ON w.id = ws.website_id\nORDER BY\n    s.school_name, w.website_name;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "z4smuwez",
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
    "id": "01rxbgh8",
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
    "id": "sjcpya6b",
    "name": "type",
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
    "id": "ohnvxsdj",
    "name": "url",
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
    "id": "lndat86u",
    "name": "status_code",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qx7qw2s4",
    "name": "description",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("gn72nryz")

  // remove
  collection.schema.removeField("ogcfssfa")

  // remove
  collection.schema.removeField("ceyvyexr")

  // remove
  collection.schema.removeField("1gcb0pbs")

  // remove
  collection.schema.removeField("srh2dcke")

  // remove
  collection.schema.removeField("xokd5sk6")

  return dao.saveCollection(collection)
})
