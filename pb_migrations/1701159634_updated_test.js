/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h1khcast1x7toc1")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    w.school_id,\n    w.id AS website_id,\n    w.website_name,\n    AVG(ws.status_code) AS avg_status_code\nFROM\n    website w\nJOIN\n    website_status ws ON w.id = ws.website_id\nGROUP BY\n    w.school_id, w.id, w.website_name;\n"
  }

  // remove
  collection.schema.removeField("1tvcfark")

  // remove
  collection.schema.removeField("0yigpwzi")

  // remove
  collection.schema.removeField("8niaaquz")

  // remove
  collection.schema.removeField("9t5lr9ny")

  // remove
  collection.schema.removeField("zhtq92l5")

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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("h1khcast1x7toc1")

  collection.options = {
    "query": "WITH WebsiteStatusWithID AS (\n  SELECT\n    (ROW_NUMBER() OVER ()) AS id,\n    school_id,\n    website_id,\n    status_code,\n    description\n  FROM\n    website_status\n)\n\nSELECT\n  id,\n  school_id,\n  website_id,\n  status_code,\n  description,\n  ROUND((COUNT(*) FILTER (WHERE status_code = 'up') * 100.0) / COUNT(*), 2) AS uptime_percentage\nFROM\n  WebsiteStatusWithID\nGROUP BY\n  id, school_id, website_id, status_code, description;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "1tvcfark",
    "name": "school_id",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "0yigpwzi",
    "name": "website_id",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "8niaaquz",
    "name": "status_code",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "9t5lr9ny",
    "name": "description",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "zhtq92l5",
    "name": "uptime_percentage",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("cqhh7vto")

  // remove
  collection.schema.removeField("sh0nmd06")

  // remove
  collection.schema.removeField("x5jqbdkg")

  // remove
  collection.schema.removeField("hiw07mdf")

  return dao.saveCollection(collection)
})
