/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cwwavm0el2xmbay");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "cwwavm0el2xmbay",
    "created": "2023-11-27 08:49:34.812Z",
    "updated": "2023-11-27 14:16:03.721Z",
    "name": "current_status",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "srh2dcke",
        "name": "status_code",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "xokd5sk6",
        "name": "description",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n    (ROW_NUMBER() OVER ()) AS id,\n    s.school_name,\n    w.website_name,\n    w.type,\n    w.url,\n    COALESCE(ws.status_code, 0) AS status_code,\n    COALESCE(ws.description, '0') AS description\nFROM\n    school s\nJOIN\n    website w ON s.id = w.school_id\nLEFT JOIN (\n    SELECT\n        website_id,\n        status_code,\n        description,\n        created\n    FROM\n        website_status ws1\n    WHERE\n        created = (\n            SELECT\n                MAX(created)\n            FROM\n                website_status ws2\n            WHERE\n                ws1.website_id = ws2.website_id\n        )\n) ws ON w.id = ws.website_id\nORDER BY\n    s.school_name, w.website_name;\n"
    }
  });

  return Dao(db).saveCollection(collection);
})
