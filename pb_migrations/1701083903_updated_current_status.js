/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cwwavm0el2xmbay")

  collection.options = {
    "query": "WITH RankedWebsiteStatus AS (\n    SELECT\n        ws.website_id,\n        ws.status_code,\n        ws.description,\n        ws.created,\n        LAG(ws.created) OVER (PARTITION BY ws.website_id ORDER BY ws.created) AS prev_created,\n        ROW_NUMBER() OVER (PARTITION BY ws.website_id ORDER BY ws.created DESC) AS row_num\n    FROM\n        website_status ws\n)\nSELECT\n    (ROW_NUMBER() OVER ()) as id,\n    w.website_name,\n    w.type,\n    w.url AS raw_url,\n    rws.status_code,\n    rws.description as status_description,\n    strftime('%Y-%m-%d %H:%M:%S', rws.created) AS last_status_time,\n    s.description AS school_description\nFROM\n    website w\nJOIN\n    RankedWebsiteStatus rws ON w.id = rws.website_id AND rws.row_num = 1\nJOIN\n    school s ON w.school_id = s.id;\n"
  }

  // remove
  collection.schema.removeField("043xogyf")

  // remove
  collection.schema.removeField("qoqtf9wl")

  // remove
  collection.schema.removeField("kncyyyeh")

  // remove
  collection.schema.removeField("93c0dvvn")

  // remove
  collection.schema.removeField("gv8s3ire")

  // remove
  collection.schema.removeField("sqwmxfso")

  // remove
  collection.schema.removeField("qudo0p7t")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "7rcxo4u3",
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
    "id": "oy5khqkk",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "onfbbkok",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nzs0vbu8",
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
    "id": "vndz1pdu",
    "name": "status_description",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dpmxch8d",
    "name": "last_status_time",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mu8meeds",
    "name": "school_description",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cwwavm0el2xmbay")

  collection.options = {
    "query": "WITH RankedWebsiteStatus AS (\n    SELECT\n        ws.website_id,\n        ws.status_code,\n        ws.description,\n        ws.created,\n        LAG(ws.created) OVER (PARTITION BY ws.website_id ORDER BY ws.created) AS prev_created,\n        ROW_NUMBER() OVER (PARTITION BY ws.website_id ORDER BY ws.created DESC) AS row_num\n    FROM\n        website_status ws\n)\nSELECT\n    (ROW_NUMBER() OVER ()) as id,\n    w.website_name,\n    w.type,\n    w.url AS raw_url,\n    rws.status_code,\n    rws.description,\n    strftime('%Y-%m-%d %H:%M:%S', rws.created) AS last_status_time,\n    s.description AS school_description\nFROM\n    website w\nJOIN\n    RankedWebsiteStatus rws ON w.id = rws.website_id AND rws.row_num = 1\nJOIN\n    school s ON w.school_id = s.id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "043xogyf",
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
    "id": "qoqtf9wl",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kncyyyeh",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "93c0dvvn",
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
    "id": "gv8s3ire",
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
    "id": "sqwmxfso",
    "name": "last_status_time",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "qudo0p7t",
    "name": "school_description",
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
  collection.schema.removeField("7rcxo4u3")

  // remove
  collection.schema.removeField("oy5khqkk")

  // remove
  collection.schema.removeField("onfbbkok")

  // remove
  collection.schema.removeField("nzs0vbu8")

  // remove
  collection.schema.removeField("vndz1pdu")

  // remove
  collection.schema.removeField("dpmxch8d")

  // remove
  collection.schema.removeField("mu8meeds")

  return dao.saveCollection(collection)
})
