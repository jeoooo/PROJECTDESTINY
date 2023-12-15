/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y")

  collection.options = {
    "query": "SELECT\n(ROW_NUMBER() OVER()) as id,\n    w.id AS website_id,\n    w.website_name,\n    ws_latest_status.status_code AS latest_status_code,\n    ws_latest_description.description AS latest_description,\n    ws_latest_status.created AS latest_status_created,\n    ws_latest_description.created AS latest_description_created\nFROM\n    website w\nLEFT JOIN\n    (\n        SELECT\n            ws1.website_id,\n            ws1.status_code,\n            ws1.created\n        FROM\n            website_status ws1\n        WHERE\n            ws1.created = (\n                SELECT\n                    MAX(ws2.created)\n                FROM\n                    website_status ws2\n                WHERE\n                    ws2.website_id = ws1.website_id\n            )\n    ) ws_latest_status ON w.id = ws_latest_status.website_id\nLEFT JOIN\n    (\n        SELECT\n            ws3.website_id,\n            ws3.description,\n            ws3.created\n        FROM\n            website_status ws3\n        WHERE\n            ws3.created = (\n                SELECT\n                    MAX(ws4.created)\n                FROM\n                    website_status ws4\n                WHERE\n                    ws4.website_id = ws3.website_id\n            )\n    ) ws_latest_description ON w.id = ws_latest_description.website_id;\n"
  }

  // remove
  collection.schema.removeField("ucmbqbym")

  // remove
  collection.schema.removeField("ja6bzizz")

  // remove
  collection.schema.removeField("oga7id5u")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cwdohois",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "rgumjm9m",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "aybja1ah",
    "name": "latest_status_code",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0vgmmppk",
    "name": "latest_description",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dmqpyyys",
    "name": "latest_status_created",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "eyhauxmu",
    "name": "latest_description_created",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    w.website_name,\n    ws_latest_status.status_code AS latest_status_code,\n    ws_latest_description.description AS latest_description\nFROM\n    website w\nLEFT JOIN\n    (\n        SELECT\n            ws1.website_id,\n            ws1.status_code\n        FROM\n            website_status ws1\n        WHERE\n            ws1.created = (\n                SELECT\n                    MAX(ws2.created)\n                FROM\n                    website_status ws2\n                WHERE\n                    ws2.website_id = ws1.website_id\n            )\n    ) ws_latest_status ON w.id = ws_latest_status.website_id\nLEFT JOIN\n    (\n        SELECT\n            ws3.website_id,\n            ws3.description\n        FROM\n            website_status ws3\n        WHERE\n            ws3.created = (\n                SELECT\n                    MAX(ws4.created)\n                FROM\n                    website_status ws4\n                WHERE\n                    ws4.website_id = ws3.website_id\n            )\n    ) ws_latest_description ON w.id = ws_latest_description.website_id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ucmbqbym",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ja6bzizz",
    "name": "latest_status_code",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oga7id5u",
    "name": "latest_description",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("cwdohois")

  // remove
  collection.schema.removeField("rgumjm9m")

  // remove
  collection.schema.removeField("aybja1ah")

  // remove
  collection.schema.removeField("0vgmmppk")

  // remove
  collection.schema.removeField("dmqpyyys")

  // remove
  collection.schema.removeField("eyhauxmu")

  return dao.saveCollection(collection)
})
