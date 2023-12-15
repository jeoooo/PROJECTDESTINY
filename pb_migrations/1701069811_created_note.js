/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const collection = new Collection({
    "id": "svklp3jhctmfnxi",
    "created": "2023-11-27 07:23:31.216Z",
    "updated": "2023-11-27 07:23:31.216Z",
    "name": "note",
    "type": "base",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "trthbhop",
        "name": "note",
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
    "createRule": "",
    "updateRule": "",
    "deleteRule": "",
    "options": {}
  });

  return Dao(db).saveCollection(collection);
}, (db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("svklp3jhctmfnxi");

  return dao.deleteCollection(collection);
})
