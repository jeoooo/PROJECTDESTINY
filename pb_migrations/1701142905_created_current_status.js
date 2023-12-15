/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "f4m5nolotvmtj7y",
    "created": "2023-11-28 03:41:45.923Z",
    "updated": "2023-11-28 03:41:45.923Z",
    "name": "current_status",
    "type": "view",
    "system": false,
    "schema": [
      {
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
      },
      {
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
      },
      {
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
      },
      {
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
      },
      {
        "system": false,
        "id": "ojp6hxn9",
        "name": "status_code",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "rvwbrlxp",
        "name": "description",
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
      "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    s.id AS school_id,\n    s.school_name,\n    w.id AS website_id,\n    w.website_name,\n    ws.status_code,\n    ws.description\nFROM\n    school s\nJOIN\n    website w ON s.id = w.school_id\nJOIN\n    (\n        SELECT\n            ws1.school_id,\n            ws1.website_id,\n            ws1.status_code,\n            ws1.description,\n            ROW_NUMBER() OVER (PARTITION BY ws1.school_id, ws1.website_id ORDER BY ws1.created DESC) AS row_num\n        FROM\n            website_status ws1\n    ) ws ON s.id = ws.school_id AND w.id = ws.website_id\nWHERE\n    ws.row_num = 1;\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y");

  return dao.deleteCollection(collection);
})
