/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cwwavm0el2xmbay")

  collection.options = {
    "query": "WITH RankedWebsiteStatus AS (\n    SELECT\n        ws.website_id,\n        ws.status_code,\n        ws.description,\n        ws.created,\n        LAG(ws.created) OVER (PARTITION BY ws.website_id ORDER BY ws.created) AS prev_created,\n        ROW_NUMBER() OVER (PARTITION BY ws.website_id ORDER BY ws.created DESC) AS row_num\n    FROM\n        website_status ws\n)\nSELECT\n    (ROW_NUMBER() OVER ()) as id,\n    w.website_name,\n    w.type,\n    w.url,\n    rws.status_code,\n    rws.description,\n    rws.created AS last_status_time,\n    COALESCE(\n        strftime('%s', rws.created) - strftime('%s', rws.prev_created),\n        0\n    ) AS downtime_duration_seconds,\n    strftime('%d days %H hours %M minutes', 'now', '-' || (strftime('%s', rws.created) - strftime('%s', rws.prev_created)) || ' seconds') AS formatted_downtime_duration\nFROM\n    website w\nJOIN\n    RankedWebsiteStatus rws ON w.id = rws.website_id AND rws.row_num = 1;\n"
  }

  // remove
  collection.schema.removeField("adfitgz7")

  // remove
  collection.schema.removeField("bk3gpm4e")

  // remove
  collection.schema.removeField("ycvqzlfb")

  // remove
  collection.schema.removeField("oegrtwcb")

  // remove
  collection.schema.removeField("0zklabhc")

  // remove
  collection.schema.removeField("k3ftvifv")

  // remove
  collection.schema.removeField("9durcnhw")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "dwpzgia6",
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
    "id": "spprlvtp",
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
    "id": "98lxod3t",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "k31h35kb",
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
    "id": "eyjkqvwx",
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
    "id": "cpar5eyu",
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
    "id": "uywjpwel",
    "name": "downtime_duration_seconds",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "vhrnoyqa",
    "name": "formatted_downtime_duration",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cwwavm0el2xmbay")

  collection.options = {
    "query": "WITH RankedWebsiteStatus AS (\n    SELECT\n        ws.website_id,\n        ws.status_code,\n        ws.description,\n        ws.created,\n        LAG(ws.created) OVER (PARTITION BY ws.website_id ORDER BY ws.created) AS prev_created,\n        ROW_NUMBER() OVER (PARTITION BY ws.website_id ORDER BY ws.created DESC) AS row_num\n    FROM\n        website_status ws\n)\nSELECT\n    (ROW_NUMBER() OVER ()) as id,\n    w.website_name,\n    w.type,\n    w.url,\n    rws.status_code,\n    rws.description,\n    rws.created AS last_status_time,\n    COALESCE(\n        strftime('%s', rws.created) - strftime('%s', rws.prev_created),\n        0\n    ) AS downtime_duration\nFROM\n    website w\nJOIN\n    RankedWebsiteStatus rws ON w.id = rws.website_id AND rws.row_num = 1;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "adfitgz7",
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
    "id": "bk3gpm4e",
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
    "id": "ycvqzlfb",
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

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "oegrtwcb",
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
    "id": "0zklabhc",
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
    "id": "k3ftvifv",
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
    "id": "9durcnhw",
    "name": "downtime_duration",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("dwpzgia6")

  // remove
  collection.schema.removeField("spprlvtp")

  // remove
  collection.schema.removeField("98lxod3t")

  // remove
  collection.schema.removeField("k31h35kb")

  // remove
  collection.schema.removeField("eyjkqvwx")

  // remove
  collection.schema.removeField("cpar5eyu")

  // remove
  collection.schema.removeField("uywjpwel")

  // remove
  collection.schema.removeField("vhrnoyqa")

  return dao.saveCollection(collection)
})
