/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y")

  collection.options = {
    "query": "WITH LatestStatus AS (\n    SELECT\n        ws1.website_id,\n        ws1.status_code,\n        ws1.created AS status_created\n    FROM\n        website_status ws1\n    WHERE\n        ws1.created = (\n            SELECT\n                MAX(ws2.created)\n            FROM\n                website_status ws2\n            WHERE\n                ws2.website_id = ws1.website_id\n        )\n),\nLatestDescription AS (\n    SELECT\n        ws3.website_id,\n        ws3.description,\n        ws3.created AS description_created\n    FROM\n        website_status ws3\n    WHERE\n        ws3.created = (\n            SELECT\n                MAX(ws4.created)\n            FROM\n                website_status ws4\n            WHERE\n                ws4.website_id = ws3.website_id\n        )\n)\nSELECT\n    (ROW_NUMBER() OVER()) AS id,\n    w.website_name,\n    ls.status_code AS latest_status_code,\n    ls.status_created AS latest_status_created,\n    ld.description AS latest_description,\n    ld.description_created AS latest_description_created\nFROM\n    website w\nLEFT JOIN LatestStatus ls ON w.id = ls.website_id\nLEFT JOIN LatestDescription ld ON w.id = ld.website_id;\n"
  }

  // remove
  collection.schema.removeField("30fzofuo")

  // remove
  collection.schema.removeField("olpsfgcu")

  // remove
  collection.schema.removeField("pdocrmqc")

  // remove
  collection.schema.removeField("gotqnclt")

  // remove
  collection.schema.removeField("xek9mnrm")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "udzg7fbg",
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
    "id": "ovtdhlix",
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
    "id": "vkrveeec",
    "name": "latest_status_created",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yllfvgqi",
    "name": "latest_description",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ohvsms9n",
    "name": "latest_description_created",
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
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\n    -- w.id AS website_id,\n    w.website_name,\n    ws_latest_status.status_code AS latest_status_code,\n    ws_latest_description.description AS latest_description,\n    ws_latest_status.created AS latest_status_created,\n    ws_latest_description.created AS latest_description_created\nFROM\n    website w\nLEFT JOIN\n    (\n        SELECT\n            ws1.website_id,\n            ws1.status_code,\n            ws1.created\n        FROM\n            website_status ws1\n        WHERE\n            ws1.created = (\n                SELECT\n                    MAX(ws2.created)\n                FROM\n                    website_status ws2\n                WHERE\n                    ws2.website_id = ws1.website_id\n            )\n    ) ws_latest_status ON w.id = ws_latest_status.website_id\nLEFT JOIN\n    (\n        SELECT\n            ws3.website_id,\n            ws3.description,\n            ws3.created\n        FROM\n            website_status ws3\n        WHERE\n            ws3.created = (\n                SELECT\n                    MAX(ws4.created)\n                FROM\n                    website_status ws4\n                WHERE\n                    ws4.website_id = ws3.website_id\n            )\n    ) ws_latest_description ON w.id = ws_latest_description.website_id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "30fzofuo",
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
    "id": "olpsfgcu",
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
    "id": "pdocrmqc",
    "name": "latest_description",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gotqnclt",
    "name": "latest_status_created",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xek9mnrm",
    "name": "latest_description_created",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("udzg7fbg")

  // remove
  collection.schema.removeField("ovtdhlix")

  // remove
  collection.schema.removeField("vkrveeec")

  // remove
  collection.schema.removeField("yllfvgqi")

  // remove
  collection.schema.removeField("ohvsms9n")

  return dao.saveCollection(collection)
})
