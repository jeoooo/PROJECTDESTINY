/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h1khcast1x7toc1")

  collection.name = "uptime"
  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    w.school_id,\n    w.id AS website_id,\n    w.website_name,\n    FORMAT(AVG(CASE WHEN ws.status_code = 200 THEN 1 ELSE 0 END), 4) AS avg_uptime_percentage_alltime\nFROM\n    website w\nJOIN\n    website_status ws ON w.id = ws.website_id\nGROUP BY\n    w.school_id, w.id, w.website_name;\n"
  }

  // remove
  collection.schema.removeField("xwefpq2e")

  // remove
  collection.schema.removeField("jatl2hhn")

  // remove
  collection.schema.removeField("lsvswjzq")

  // remove
  collection.schema.removeField("25ntk7vf")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mqjtuxqz",
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
    "id": "wi1rk5t7",
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
    "id": "qe9rqmun",
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
    "id": "grqarel9",
    "name": "avg_uptime_percentage_alltime",
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

  collection.name = "test"
  collection.options = {
    "query": "SELECT\n    (ROW_NUMBER() OVER()) as id,\n    w.school_id,\n    w.id AS website_id,\n    w.website_name,\n    FORMAT(AVG(CASE WHEN ws.status_code = 200 THEN 1 ELSE 0 END), 4) AS avg_uptime_percentage\nFROM\n    website w\nJOIN\n    website_status ws ON w.id = ws.website_id\nGROUP BY\n    w.school_id, w.id, w.website_name;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xwefpq2e",
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
    "id": "jatl2hhn",
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
    "id": "lsvswjzq",
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
    "id": "25ntk7vf",
    "name": "avg_uptime_percentage",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("mqjtuxqz")

  // remove
  collection.schema.removeField("wi1rk5t7")

  // remove
  collection.schema.removeField("qe9rqmun")

  // remove
  collection.schema.removeField("grqarel9")

  return dao.saveCollection(collection)
})
