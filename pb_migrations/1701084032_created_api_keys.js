/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "zv93o2rruoxg6vg",
    "created": "2023-11-27 11:20:32.723Z",
    "updated": "2023-11-27 11:20:32.723Z",
    "name": "api_keys",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "hwinukeo",
        "name": "api_key",
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
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("zv93o2rruoxg6vg");

  return dao.deleteCollection(collection);
})
