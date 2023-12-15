/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    w.website_name,\n    ws_latest_status.status_code AS latest_status_code,\n    ws_latest_description.description AS latest_description\nFROM\n    website w\nLEFT JOIN\n    (\n        SELECT\n            ws1.website_id,\n            ws1.status_code\n        FROM\n            website_status ws1\n        WHERE\n            ws1.created = (\n                SELECT\n                    MAX(ws2.created)\n                FROM\n                    website_status ws2\n                WHERE\n                    ws2.website_id = ws1.website_id\n            )\n    ) ws_latest_status ON w.id = ws_latest_status.website_id\nLEFT JOIN\n    (\n        SELECT\n            ws3.website_id,\n            ws3.description\n        FROM\n            website_status ws3\n        WHERE\n            ws3.created = (\n                SELECT\n                    MAX(ws4.created)\n                FROM\n                    website_status ws4\n                WHERE\n                    ws4.website_id = ws3.website_id\n            )\n    ) ws_latest_description ON w.id = ws_latest_description.website_id;\n"
  }

  // remove
  collection.schema.removeField("dexleteh")

  // remove
  collection.schema.removeField("0rauzicj")

  // remove
  collection.schema.removeField("kgtxpalv")

  // remove
  collection.schema.removeField("zrcvb9k9")

  // remove
  collection.schema.removeField("ojp6hxn9")

  // remove
  collection.schema.removeField("rvwbrlxp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ucmbqbym",
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
    "id": "ja6bzizz",
    "name": "latest_status_code",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oga7id5u",
    "name": "latest_description",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    s.id AS school_id,\n    s.school_name,\n    w.id AS website_id,\n    w.website_name,\n    ws.status_code,\n    ws.description\nFROM\n    school s\nJOIN\n    website w ON s.id = w.school_id\nJOIN\n    (\n        SELECT\n            ws1.school_id,\n            ws1.website_id,\n            ws1.status_code,\n            ws1.description,\n            ROW_NUMBER() OVER (PARTITION BY ws1.school_id, ws1.website_id ORDER BY ws1.created DESC) AS row_num\n        FROM\n            website_status ws1\n    ) ws ON s.id = ws.school_id AND w.id = ws.website_id\nWHERE\n    ws.row_num = 1;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dexleteh",
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
    "id": "0rauzicj",
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
    "id": "kgtxpalv",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zrcvb9k9",
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
    "id": "ojp6hxn9",
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
    "id": "rvwbrlxp",
    "name": "description",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("ucmbqbym")

  // remove
  collection.schema.removeField("ja6bzizz")

  // remove
  collection.schema.removeField("oga7id5u")

  return dao.saveCollection(collection)
})
