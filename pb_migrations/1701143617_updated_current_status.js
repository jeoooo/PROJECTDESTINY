/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    s.id AS school_id,\n    s.school_name,\n    w.website_name,\n    ws.status_code,\n    ws.description,\n    ws.created\nFROM\n    school s\nJOIN\n    website_status ws ON s.id = ws.school_id\nJOIN\n    website w ON ws.website_id = w.id\nJOIN (\n    SELECT\n        school_id,\n        MAX(created) AS max_created\n    FROM\n        website_status\n    GROUP BY\n        school_id\n) max_created_per_school ON ws.school_id = max_created_per_school.school_id AND ws.created = max_created_per_school.max_created;\n"
  }

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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kniayaeq",
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
    "id": "ndnrdxjh",
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
    "id": "fvwslyws",
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
    "id": "mezjbg3z",
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
    "id": "9arnn9lz",
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
    "query": "WITH LatestStatus AS (\n    SELECT\n        ws1.website_id,\n        ws1.status_code,\n        ws1.created AS status_created\n    FROM\n        website_status ws1\n    WHERE\n        ws1.created = (\n            SELECT\n                MAX(ws2.created)\n            FROM\n                website_status ws2\n            WHERE\n                ws2.website_id = ws1.website_id\n        )\n),\nLatestDescription AS (\n    SELECT\n        ws3.website_id,\n        ws3.description,\n        ws3.created AS description_created\n    FROM\n        website_status ws3\n    WHERE\n        ws3.created = (\n            SELECT\n                MAX(ws4.created)\n            FROM\n                website_status ws4\n            WHERE\n                ws4.website_id = ws3.website_id\n        )\n)\nSELECT\n    (ROW_NUMBER() OVER()) AS id,\n    w.website_name,\n    ls.status_code AS latest_status_code,\n    ls.status_created AS latest_status_created,\n    ld.description AS latest_description,\n    ld.description_created AS latest_description_created\nFROM\n    website w\nLEFT JOIN LatestStatus ls ON w.id = ls.website_id\nLEFT JOIN LatestDescription ld ON w.id = ld.website_id;\n"
  }

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

  // remove
  collection.schema.removeField("kniayaeq")

  // remove
  collection.schema.removeField("ndnrdxjh")

  // remove
  collection.schema.removeField("fvwslyws")

  // remove
  collection.schema.removeField("mezjbg3z")

  // remove
  collection.schema.removeField("9arnn9lz")

  return dao.saveCollection(collection)
})
