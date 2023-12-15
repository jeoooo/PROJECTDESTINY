/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "cwwavm0el2xmbay",
    "created": "2023-11-27 08:49:34.812Z",
    "updated": "2023-11-27 08:49:34.812Z",
    "name": "current_status",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "p4lv0int",
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
        "id": "pkpwpnzf",
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
        "id": "ydbwnpkd",
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
        "id": "p3j4rn9f",
        "name": "status_code",
        "type": "json",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {}
      },
      {
        "system": false,
        "id": "tqbdkrs0",
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
      "query": "WITH RankedWebsiteStatus AS (\n    SELECT\n        ws.website_id,\n        ws.status_code,\n        ws.description,\n        ROW_NUMBER() OVER (PARTITION BY ws.website_id ORDER BY ws.created DESC) AS row_num\n    FROM\n        website_status ws\n)\nSELECT\n  (ROW_NUMBER() OVER()) as id,\n    w.website_name,\n    w.type,\n    w.url,\n    rws.status_code,\n    rws.description\nFROM\n    website w\nJOIN\n    RankedWebsiteStatus rws ON w.id = rws.website_id AND rws.row_num = 1;\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("cwwavm0el2xmbay");

  return dao.deleteCollection(collection);
})
