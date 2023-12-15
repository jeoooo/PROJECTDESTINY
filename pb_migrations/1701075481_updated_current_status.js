/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cwwavm0el2xmbay")

  collection.options = {
    "query": "WITH RankedWebsiteStatus AS (\n    SELECT\n        ws.website_id,\n        ws.status_code,\n        ws.description,\n        ws.created,\n        LAG(ws.created) OVER (PARTITION BY ws.website_id ORDER BY ws.created) AS prev_created,\n        ROW_NUMBER() OVER (PARTITION BY ws.website_id ORDER BY ws.created DESC) AS row_num\n    FROM\n        website_status ws\n)\nSELECT\n    (ROW_NUMBER() OVER ()) as id,\n    w.website_name,\n    w.type,\n    w.url,\n    rws.status_code,\n    rws.description,\n    rws.created AS last_status_time\nFROM\n    website w\nJOIN\n    RankedWebsiteStatus rws ON w.id = rws.website_id AND rws.row_num = 1;\n"
  }

  // remove
  collection.schema.removeField("s8cqnbli")

  // remove
  collection.schema.removeField("6tz2cave")

  // remove
  collection.schema.removeField("yq89bjql")

  // remove
  collection.schema.removeField("kflpugyf")

  // remove
  collection.schema.removeField("vojkmrba")

  // remove
  collection.schema.removeField("h9btzzs9")

  // remove
  collection.schema.removeField("3ehurljb")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b43yg80z",
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
    "id": "lzjtwqrh",
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
    "id": "ilogicpv",
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
    "id": "wsrjisnp",
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
    "id": "izg0kdxo",
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
    "id": "jidxud7d",
    "name": "last_status_time",
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
    "query": "WITH RankedWebsiteStatus AS (\n    SELECT\n        ws.website_id,\n        ws.status_code,\n        ws.description,\n        ws.created,\n        LAG(ws.created) OVER (PARTITION BY ws.website_id ORDER BY ws.created) AS prev_created,\n        ROW_NUMBER() OVER (PARTITION BY ws.website_id ORDER BY ws.created DESC) AS row_num\n    FROM\n        website_status ws\n)\nSELECT\n    (ROW_NUMBER() OVER ()) as id,\n    w.website_name,\n    w.type,\n    w.url,\n    rws.status_code,\n    rws.description,\n    rws.created AS last_status_time,\n    COALESCE(\n        strftime('%s', rws.created) - strftime('%s', rws.prev_created),\n        0\n    ) AS downtime_duration_seconds\nFROM\n    website w\nJOIN\n    RankedWebsiteStatus rws ON w.id = rws.website_id AND rws.row_num = 1;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "s8cqnbli",
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
    "id": "6tz2cave",
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
    "id": "yq89bjql",
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
    "id": "kflpugyf",
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
    "id": "vojkmrba",
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
    "id": "h9btzzs9",
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
    "id": "3ehurljb",
    "name": "downtime_duration_seconds",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("b43yg80z")

  // remove
  collection.schema.removeField("lzjtwqrh")

  // remove
  collection.schema.removeField("ilogicpv")

  // remove
  collection.schema.removeField("wsrjisnp")

  // remove
  collection.schema.removeField("izg0kdxo")

  // remove
  collection.schema.removeField("jidxud7d")

  return dao.saveCollection(collection)
})
