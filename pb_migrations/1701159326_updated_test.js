/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h1khcast1x7toc1")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER ()) AS id,\n  website_id,\n  (ROUND(AVG(uptime) * 10, 4) || '%') AS avg_uptime_percentage\nFROM (\n  SELECT\n    website_id,\n    SUM(uptime_seconds) AS uptime\n  FROM (\n    SELECT\n      ws1.website_id,\n      ws1.status_code,\n      ws1.created,\n      (\n        SELECT MIN(created)\n        FROM website_status ws2\n        WHERE ws2.website_id = ws1.website_id AND ws2.created > ws1.created\n      ) AS next_created,\n      CASE\n        WHEN ws1.status_code = 200 THEN\n          strftime('%s', COALESCE((\n            SELECT MIN(created)\n            FROM website_status ws2\n            WHERE ws2.website_id = ws1.website_id AND ws2.created > ws1.created\n          ), datetime('now'))) - strftime('%s', ws1.created)\n        ELSE\n          0\n      END AS uptime_seconds\n    FROM\n      website_status ws1\n  ) AS uptime_data\n  GROUP BY\n    website_id\n) AS average_uptime\nGROUP BY\n  website_id;\n"
  }

  // remove
  collection.schema.removeField("mdh4upii")

  // remove
  collection.schema.removeField("aaqabpzu")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7xhnbi0z",
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
    "id": "ii9itnyu",
    "name": "avg_uptime_percentage",
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
    "query": "SELECT\n  (ROW_NUMBER() OVER ()) AS id,\n  website_id,\n  (ROUND(AVG(uptime) * 1000, 4) || '%') AS avg_uptime_percentage\nFROM (\n  SELECT\n    website_id,\n    SUM(uptime_seconds) AS uptime\n  FROM (\n    SELECT\n      ws1.website_id,\n      ws1.status_code,\n      ws1.created,\n      (\n        SELECT MIN(created)\n        FROM website_status ws2\n        WHERE ws2.website_id = ws1.website_id AND ws2.created > ws1.created\n      ) AS next_created,\n      CASE\n        WHEN ws1.status_code = 200 THEN\n          strftime('%s', COALESCE((\n            SELECT MIN(created)\n            FROM website_status ws2\n            WHERE ws2.website_id = ws1.website_id AND ws2.created > ws1.created\n          ), datetime('now'))) - strftime('%s', ws1.created)\n        ELSE\n          0\n      END AS uptime_seconds\n    FROM\n      website_status ws1\n  ) AS uptime_data\n  GROUP BY\n    website_id\n) AS average_uptime\nGROUP BY\n  website_id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mdh4upii",
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
    "id": "aaqabpzu",
    "name": "avg_uptime_percentage",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("7xhnbi0z")

  // remove
  collection.schema.removeField("ii9itnyu")

  return dao.saveCollection(collection)
})
