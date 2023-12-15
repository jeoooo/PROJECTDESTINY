/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h1khcast1x7toc1")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER ()) AS id,\n  website_id,\n  (ROUND(AVG(uptime) * 100, 8) || '%') AS avg_uptime_percentage\nFROM (\n  SELECT\n    website_id,\n    SUM(uptime_seconds) AS uptime\n  FROM (\n    SELECT\n      ws1.website_id,\n      ws1.status_code,\n      ws1.created,\n      (\n        SELECT MIN(created)\n        FROM website_status ws2\n        WHERE ws2.website_id = ws1.website_id AND ws2.created > ws1.created\n      ) AS next_created,\n      CASE\n        WHEN ws1.status_code = 200 THEN\n          strftime('%s', COALESCE((\n            SELECT MIN(created)\n            FROM website_status ws2\n            WHERE ws2.website_id = ws1.website_id AND ws2.created > ws1.created\n          ), datetime('now'))) - strftime('%s', ws1.created)\n        ELSE\n          0\n      END AS uptime_seconds\n    FROM\n      website_status ws1\n  ) AS uptime_data\n  GROUP BY\n    website_id\n) AS average_uptime\nGROUP BY\n  website_id;\n"
  }

  // remove
  collection.schema.removeField("iuaypyov")

  // remove
  collection.schema.removeField("7fikjpnf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7kugm7pv",
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
    "id": "qzto9nlu",
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
    "query": "SELECT\n  (ROW_NUMBER() OVER ()) AS id,\n  website_id,\n  (ROUND(AVG(uptime) * 100, 1) || '%') AS avg_uptime_percentage\nFROM (\n  SELECT\n    website_id,\n    SUM(uptime_seconds) AS uptime\n  FROM (\n    SELECT\n      ws1.website_id,\n      ws1.status_code,\n      ws1.created,\n      (\n        SELECT MIN(created)\n        FROM website_status ws2\n        WHERE ws2.website_id = ws1.website_id AND ws2.created > ws1.created\n      ) AS next_created,\n      CASE\n        WHEN ws1.status_code = 200 THEN\n          strftime('%s', COALESCE((\n            SELECT MIN(created)\n            FROM website_status ws2\n            WHERE ws2.website_id = ws1.website_id AND ws2.created > ws1.created\n          ), datetime('now'))) - strftime('%s', ws1.created)\n        ELSE\n          0\n      END AS uptime_seconds\n    FROM\n      website_status ws1\n  ) AS uptime_data\n  GROUP BY\n    website_id\n) AS average_uptime\nGROUP BY\n  website_id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iuaypyov",
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
    "id": "7fikjpnf",
    "name": "avg_uptime_percentage",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("7kugm7pv")

  // remove
  collection.schema.removeField("qzto9nlu")

  return dao.saveCollection(collection)
})
