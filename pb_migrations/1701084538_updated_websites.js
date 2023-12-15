/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlivjho6av2jsmr")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    s.school_name,\n  s.acronym,\n    w.id AS website_id,\n    w.url\nFROM\n    school s\nJOIN\n    website w ON s.id = w.school_id;\n"
  }

  // remove
  collection.schema.removeField("kvzckssm")

  // remove
  collection.schema.removeField("k85vvlpi")

  // remove
  collection.schema.removeField("5fk4ipwe")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "scyxnjnx",
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
    "id": "rmfqc80t",
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
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vv5ynzgq",
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
    "id": "xqorhfqx",
    "name": "url",
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
  const collection = dao.findCollectionByNameOrId("jlivjho6av2jsmr")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    s.school_name,\n    w.id AS website_id,\n    w.url\nFROM\n    school s\nJOIN\n    website w ON s.id = w.school_id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kvzckssm",
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
    "id": "k85vvlpi",
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
    "id": "5fk4ipwe",
    "name": "url",
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
  collection.schema.removeField("scyxnjnx")

  // remove
  collection.schema.removeField("rmfqc80t")

  // remove
  collection.schema.removeField("vv5ynzgq")

  // remove
  collection.schema.removeField("xqorhfqx")

  return dao.saveCollection(collection)
})
