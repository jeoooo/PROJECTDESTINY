/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlivjho6av2jsmr")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    s.school_name,\n  s.acronym,\n\n\n    w.website_name,\n    w.type,\n    w.url AS raw_url\nFROM\n    school s\nJOIN\n    website w ON s.id = w.school_id;\n"
  }

  // remove
  collection.schema.removeField("pb4uykno")

  // remove
  collection.schema.removeField("booszrxn")

  // remove
  collection.schema.removeField("392exuyo")

  // remove
  collection.schema.removeField("xllx87tb")

  // remove
  collection.schema.removeField("tbuwnxed")

  // remove
  collection.schema.removeField("d7n3tuds")

  // remove
  collection.schema.removeField("3ynphujj")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xopyotcq",
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
    "id": "mlxo32ac",
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
    "id": "noi107me",
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
    "id": "bggtuehu",
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
    "id": "n4wxwq4y",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlivjho6av2jsmr")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  s.school_name,\n  s.acronym,\n  s.logo,\n  s.description AS school_description,\n  GROUP_CONCAT(w.website_name, ', ') AS website_names,\n  GROUP_CONCAT(w.type, ', ') AS types,\n  GROUP_CONCAT(w.url, ', ') AS raw_urls\nFROM\n  school s\nJOIN\n  website w ON s.id = w.school_id\nGROUP BY\n  s.id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "pb4uykno",
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
    "id": "booszrxn",
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
    "id": "392exuyo",
    "name": "logo",
    "type": "file",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "maxSelect": 1,
      "maxSize": 5242880,
      "mimeTypes": [
        "image/webp",
        "image/png",
        "image/vnd.mozilla.apng",
        "image/jpeg"
      ],
      "thumbs": [],
      "protected": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "xllx87tb",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tbuwnxed",
    "name": "website_names",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "d7n3tuds",
    "name": "types",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "3ynphujj",
    "name": "raw_urls",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("xopyotcq")

  // remove
  collection.schema.removeField("mlxo32ac")

  // remove
  collection.schema.removeField("noi107me")

  // remove
  collection.schema.removeField("bggtuehu")

  // remove
  collection.schema.removeField("n4wxwq4y")

  return dao.saveCollection(collection)
})
