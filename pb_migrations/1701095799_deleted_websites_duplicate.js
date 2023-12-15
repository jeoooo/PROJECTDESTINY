/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("o4gmkynirlz0hyq");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "o4gmkynirlz0hyq",
    "created": "2023-11-27 14:36:31.124Z",
    "updated": "2023-11-27 14:36:31.124Z",
    "name": "websites_duplicate",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "jmvjanbb",
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
        "id": "ofy8ahqc",
        "name": "acronym",
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
        "id": "1ciek4zw",
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
        "id": "ereyfibh",
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
        "id": "nfic6leb",
        "name": "raw_url",
        "type": "text",
        "required": false,
        "presentable": false,
        "unique": false,
        "options": {
          "min": null,
          "max": null,
          "pattern": ""
        }
      }
    ],
    "indexes": [],
    "listRule": "",
    "viewRule": "",
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    s.school_name,\n  s.acronym,\n\n    w.website_name,\n    w.type,\n    w.url AS raw_url\nFROM\n    school s\nJOIN\n    website w ON s.id = w.school_id;\n"
    }
  });

  return Dao(db).saveCollection(collection);
})
