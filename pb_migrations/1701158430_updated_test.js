/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h1khcast1x7toc1")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    s.id AS school_id,\n    s.school_name,\n    AVG(julianday(end_time) - julianday(start_time)) AS average_uptime_duration\nFROM\n    school s\nLEFT JOIN (\n    SELECT\n        w.school_id,\n        MAX(ws.created) AS end_time,\n        MAX(CASE WHEN ws.status_code != 'OK' THEN ws.created END) AS start_time\n    FROM\n        website w\n    LEFT JOIN\n        website_status ws ON w.id = ws.website_id\n    GROUP BY\n        w.school_id, w.id\n) AS uptime_periods ON s.id = uptime_periods.school_id\nGROUP BY\n    s.id, s.school_name;\n"
  }

  // remove
  collection.schema.removeField("hhbskzfq")

  // remove
  collection.schema.removeField("sfbr8xgz")

  // remove
  collection.schema.removeField("a2witgev")

  // remove
  collection.schema.removeField("43inunhe")

  // remove
  collection.schema.removeField("su3rhux2")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qkjcnv48",
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
    "id": "g6oeblah",
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
    "id": "jxzewcge",
    "name": "average_uptime_duration",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h1khcast1x7toc1")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    s.id AS school_id,\n    s.school_name,\n    COUNT(DISTINCT w.id) AS total_websites,\n    COUNT(DISTINCT CASE WHEN ws.status_code = 'OK' THEN w.id END) AS uptime_websites,\n    (COUNT(DISTINCT CASE WHEN ws.status_code = 'OK' THEN w.id END) * 100.0 / COUNT(DISTINCT w.id)) AS uptime_percentage\nFROM\n    school s\nLEFT JOIN\n    website w ON s.id = w.school_id\nLEFT JOIN\n    website_status ws ON w.id = ws.website_id\nGROUP BY\n    s.id, s.school_name;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "hhbskzfq",
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
    "id": "sfbr8xgz",
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
    "id": "a2witgev",
    "name": "total_websites",
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
    "id": "43inunhe",
    "name": "uptime_websites",
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
    "id": "su3rhux2",
    "name": "uptime_percentage",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("qkjcnv48")

  // remove
  collection.schema.removeField("g6oeblah")

  // remove
  collection.schema.removeField("jxzewcge")

  return dao.saveCollection(collection)
})
