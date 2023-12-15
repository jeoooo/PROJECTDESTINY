/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cwwavm0el2xmbay")

  collection.options = {
    "query": "WITH RankedWebsiteStatus AS (\n    SELECT\n        ws.website_id,\n        ws.status_code,\n        ws.description,\n        ws.created,\n        LAG(ws.created) OVER (PARTITION BY ws.website_id ORDER BY ws.created) AS prev_created,\n        ROW_NUMBER() OVER (PARTITION BY ws.website_id ORDER BY ws.created DESC) AS row_num\n    FROM\n        website_status ws\n)\nSELECT\n    (ROW_NUMBER() OVER ()) as id,\n    w.website_name,\n    w.type,\n    w.url AS raw_url,\n    rws.status_code,\n    rws.description as status_description,\n    strftime('%Y-%m-%d %H:%M:%S', rws.created) AS last_status_time,\n    s.description AS school_description\nFROM\n    website w\nJOIN\n    RankedWebsiteStatus rws ON w.id = rws.website_id AND rws.row_num = 1\nJOIN\n    school s ON w.school_id = s.id;"
  }

  // remove
  collection.schema.removeField("scmmhtsl")

  // remove
  collection.schema.removeField("dr3uuxmk")

  // remove
  collection.schema.removeField("4gg5m14p")

  // remove
  collection.schema.removeField("9yfswqsf")

  // remove
  collection.schema.removeField("g2ij96sz")

  // remove
  collection.schema.removeField("ksx15lsq")

  // remove
  collection.schema.removeField("boc7ib4g")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "kazs7rdz",
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
    "id": "ufrmisoh",
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
    "id": "znpf5mmj",
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
    "id": "2uzs0uef",
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
    "id": "27mwmw57",
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
    "id": "jodjxpov",
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
    "id": "usw5r1bi",
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
    "query": "WITH RankedWebsiteStatus AS (\n    SELECT\n        ws.website_id,\n        ws.status_code,\n        ws.description,\n        ws.created,\n        LAG(ws.created) OVER (PARTITION BY ws.website_id ORDER BY ws.created) AS prev_created,\n        ROW_NUMBER() OVER (PARTITION BY ws.website_id ORDER BY ws.created DESC) AS row_num\n    FROM\n        website_status ws\n)\nSELECT\n    (ROW_NUMBER() OVER ()) as id,\n    w.website_name,\n    w.type,\n    w.url AS raw_url,\n    rws.status_code,\n    rws.description as status_description,\n    strftime('%Y-%m-%d %H:%M:%S', rws.created) AS last_status_time,\n    s.description AS school_description\nFROM\n    website w\nJOIN\n    RankedWebsiteStatus rws ON w.id = rws.website_id AND rws.row_num = 1\nJOIN\n    school s ON w.school_id = s.id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "scmmhtsl",
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
    "id": "dr3uuxmk",
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
    "id": "4gg5m14p",
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
    "id": "9yfswqsf",
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
    "id": "g2ij96sz",
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
    "id": "ksx15lsq",
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
    "id": "boc7ib4g",
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
  collection.schema.removeField("kazs7rdz")

  // remove
  collection.schema.removeField("ufrmisoh")

  // remove
  collection.schema.removeField("znpf5mmj")

  // remove
  collection.schema.removeField("2uzs0uef")

  // remove
  collection.schema.removeField("27mwmw57")

  // remove
  collection.schema.removeField("jodjxpov")

  // remove
  collection.schema.removeField("usw5r1bi")

  return dao.saveCollection(collection)
})
