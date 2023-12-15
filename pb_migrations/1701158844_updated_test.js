/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h1khcast1x7toc1")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  website_id,\n  AVG(uptime) AS avg_uptime\nFROM (\n  SELECT\n    website_id,\n    SUM(uptime_seconds) AS uptime\n  FROM (\n    SELECT\n      ws1.website_id,\n      ws1.status_code,\n      ws1.created,\n      (\n        SELECT MIN(created)\n        FROM website_status ws2\n        WHERE ws2.website_id = ws1.website_id AND ws2.created > ws1.created\n      ) AS next_created,\n      CASE\n        WHEN ws1.status_code = 200 THEN\n          strftime('%s', COALESCE((\n            SELECT MIN(created)\n            FROM website_status ws2\n            WHERE ws2.website_id = ws1.website_id AND ws2.created > ws1.created\n          ), datetime('now'))) - strftime('%s', ws1.created)\n        ELSE\n          0\n      END AS uptime_seconds\n    FROM\n      website_status ws1\n  ) AS uptime_data\n  GROUP BY\n    website_id\n) AS average_uptime\nGROUP BY\n  website_id;\n"
  }

  // remove
  collection.schema.removeField("qkjcnv48")

  // remove
  collection.schema.removeField("g6oeblah")

  // remove
  collection.schema.removeField("jxzewcge")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zz5vt2fc",
    "name": "website_id",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "2ggbcbuw",
    "name": "avg_uptime",
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
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    s.id AS school_id,\n    s.school_name,\n    AVG(julianday(end_time) - julianday(start_time)) AS average_uptime_duration\nFROM\n    school s\nLEFT JOIN (\n    SELECT\n        w.school_id,\n        MAX(ws.created) AS end_time,\n        MAX(CASE WHEN ws.status_code != 'OK' THEN ws.created END) AS start_time\n    FROM\n        website w\n    LEFT JOIN\n        website_status ws ON w.id = ws.website_id\n    GROUP BY\n        w.school_id, w.id\n) AS uptime_periods ON s.id = uptime_periods.school_id\nGROUP BY\n    s.id, s.school_name;\n"
  }

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

  // remove
  collection.schema.removeField("zz5vt2fc")

  // remove
  collection.schema.removeField("2ggbcbuw")

  return dao.saveCollection(collection)
})
