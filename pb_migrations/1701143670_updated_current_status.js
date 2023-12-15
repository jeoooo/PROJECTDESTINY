/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  website_status.school_id\n  FROM website_status\n\n\n"
  }

  // remove
  collection.schema.removeField("kniayaeq")

  // remove
  collection.schema.removeField("ndnrdxjh")

  // remove
  collection.schema.removeField("fvwslyws")

  // remove
  collection.schema.removeField("mezjbg3z")

  // remove
  collection.schema.removeField("9arnn9lz")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qvk2hxu4",
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
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    s.id AS school_id,\n    s.school_name,\n    w.website_name,\n    ws.status_code,\n    ws.description,\n    ws.created\nFROM\n    school s\nJOIN\n    website_status ws ON s.id = ws.school_id\nJOIN\n    website w ON ws.website_id = w.id\nJOIN (\n    SELECT\n        school_id,\n        MAX(created) AS max_created\n    FROM\n        website_status\n    GROUP BY\n        school_id\n) max_created_per_school ON ws.school_id = max_created_per_school.school_id AND ws.created = max_created_per_school.max_created;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kniayaeq",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ndnrdxjh",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "fvwslyws",
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
    "id": "mezjbg3z",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9arnn9lz",
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
  }))

  // remove
  collection.schema.removeField("qvk2hxu4")

  return dao.saveCollection(collection)
})
