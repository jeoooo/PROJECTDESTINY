/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlivjho6av2jsmr")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  s.school_name,\n  s.acronym,\n  s.logo,\n  s.description,\n  GROUP_CONCAT(w.website_name, ', ') AS website_names,\n  GROUP_CONCAT(w.type, ', ') AS types,\n  GROUP_CONCAT(w.url, ', ') AS raw_urls\nFROM\n  school s\nJOIN\n  website w ON s.id = w.school_id\nGROUP BY\n  s.id;\n"
  }

  // remove
  collection.schema.removeField("agqolcn8")

  // remove
  collection.schema.removeField("wtb8xbzs")

  // remove
  collection.schema.removeField("frnusez8")

  // remove
  collection.schema.removeField("q1yccmaz")

  // remove
  collection.schema.removeField("riejd4jp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "ljmyrzis",
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
    "id": "e15edfrp",
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
    "id": "tddyps9l",
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
    "id": "qau21nkr",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "mjjgzyno",
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
    "id": "hd7rrurs",
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
    "id": "y9alqygl",
    "name": "raw_urls",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("jlivjho6av2jsmr")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n  s.school_name,\n  s.acronym,\n  GROUP_CONCAT(w.website_name, ', ') AS website_names,\n  GROUP_CONCAT(w.type, ', ') AS types,\n  GROUP_CONCAT(w.url, ', ') AS raw_urls\nFROM\n  school s\nJOIN\n  website w ON s.id = w.school_id\nGROUP BY\n  s.id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "agqolcn8",
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
    "id": "wtb8xbzs",
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
    "id": "frnusez8",
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
    "id": "q1yccmaz",
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
    "id": "riejd4jp",
    "name": "raw_urls",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("ljmyrzis")

  // remove
  collection.schema.removeField("e15edfrp")

  // remove
  collection.schema.removeField("tddyps9l")

  // remove
  collection.schema.removeField("qau21nkr")

  // remove
  collection.schema.removeField("mjjgzyno")

  // remove
  collection.schema.removeField("hd7rrurs")

  // remove
  collection.schema.removeField("y9alqygl")

  return dao.saveCollection(collection)
})
