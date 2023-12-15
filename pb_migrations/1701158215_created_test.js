/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "h1khcast1x7toc1",
    "created": "2023-11-28 07:56:55.951Z",
    "updated": "2023-11-28 07:56:55.951Z",
    "name": "test",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "su3rhux2",
        "name": "uptime_percentage",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    s.id AS school_id,\n    s.school_name,\n    COUNT(DISTINCT w.id) AS total_websites,\n    COUNT(DISTINCT CASE WHEN ws.status_code = 'OK' THEN w.id END) AS uptime_websites,\n    (COUNT(DISTINCT CASE WHEN ws.status_code = 'OK' THEN w.id END) * 100.0 / COUNT(DISTINCT w.id)) AS uptime_percentage\nFROM\n    school s\nLEFT JOIN\n    website w ON s.id = w.school_id\nLEFT JOIN\n    website_status ws ON w.id = ws.website_id\nGROUP BY\n    s.id, s.school_name;\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("h1khcast1x7toc1");

  return dao.deleteCollection(collection);
})
