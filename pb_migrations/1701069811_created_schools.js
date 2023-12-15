/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "8rzkuw3379f85yd",
    "created": "2023-11-27 07:23:31.216Z",
    "updated": "2023-11-27 07:23:31.218Z",
    "name": "schools",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gan8djj0",
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
        "id": "gxcypbld",
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
      }
    ],
    "indexes": [],
    "listRule": null,
    "viewRule": null,
    "createRule": null,
    "updateRule": null,
    "deleteRule": null,
    "options": {
      "query": "SELECT\n    (ROW_NUMBER() OVER()) AS id,\n   school_name,\n  acronym\nFROM\n    school\n\n"
    }
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("8rzkuw3379f85yd");

  return dao.deleteCollection(collection);
})
