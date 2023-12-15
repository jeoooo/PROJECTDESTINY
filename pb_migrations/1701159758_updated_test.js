/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h1khcast1x7toc1")

  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    w.school_id,\n    w.id AS website_id,\n    w.website_name,\n    AVG(CASE WHEN ws.status_code = 200 THEN 1 ELSE 0 END) AS avg_uptime_percentage\nFROM\n    website w\nJOIN\n    website_status ws ON w.id = ws.website_id\nGROUP BY\n    w.school_id, w.id, w.website_name;\n"
  }

  // remove
  collection.schema.removeField("cqhh7vto")

  // remove
  collection.schema.removeField("sh0nmd06")

  // remove
  collection.schema.removeField("x5jqbdkg")

  // remove
  collection.schema.removeField("hiw07mdf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "yajcq0rw",
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
    "id": "yx1btisv",
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
    "id": "yku2v2xa",
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
    "id": "qpj3dhtj",
    "name": "avg_uptime_percentage",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h1khcast1x7toc1")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    w.school_id,\n    w.id AS website_id,\n    w.website_name,\n    AVG(ws.status_code) AS avg_status_code\nFROM\n    website w\nJOIN\n    website_status ws ON w.id = ws.website_id\nGROUP BY\n    w.school_id, w.id, w.website_name;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "cqhh7vto",
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
    "id": "sh0nmd06",
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
    "id": "x5jqbdkg",
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
    "id": "hiw07mdf",
    "name": "avg_status_code",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("yajcq0rw")

  // remove
  collection.schema.removeField("yx1btisv")

  // remove
  collection.schema.removeField("yku2v2xa")

  // remove
  collection.schema.removeField("qpj3dhtj")

  return dao.saveCollection(collection)
})
