/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db);
  const collection = dao.findCollectionByNameOrId("vavmdkml7r5yaax");

  return dao.deleteCollection(collection);
}, (db) => {
  const collection = new Collection({
    "id": "vavmdkml7r5yaax",
    "created": "2023-11-27 07:57:50.612Z",
    "updated": "2023-11-27 07:58:29.736Z",
    "name": "current_status",
    "type": "view",
    "system": false,
    "schema": [
      {
        "system": false,
        "id": "gt4rb9r8",
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
        "id": "7p4qq0lq",
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
        "id": "h0qigp2s",
        "name": "status_code",
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
        "id": "iuyfkiyf",
        "name": "description",
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
      "query": "SELECT \n(ROW_NUMBER() OVER()) as id,\nschool_id,\nwebsite_id,\n  status_code,\n  description\nFROM\ncurrent_site_health"
    }
  });

  return Dao(db).saveCollection(collection);
})
