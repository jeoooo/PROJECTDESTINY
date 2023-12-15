/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("cwwavm0el2xmbay")

  collection.options = {
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    s.school_name,\n    w.website_name,\n    w.type,\n    w.url,\n    COALESCE(ws.status_code, '') AS status_code,\n    COALESCE(ws.description, '') AS description\nFROM\n    school s\nJOIN\n    website w ON s.id = w.school_id\nLEFT JOIN\n    website_status ws ON w.id = ws.website_id\nORDER BY\n    s.school_name, w.website_name;\n"
  }

  // remove
  collection.schema.removeField("bwjgeaaa")

  // remove
  collection.schema.removeField("z27ynjnh")

  // remove
  collection.schema.removeField("yrlwjl0e")

  // remove
  collection.schema.removeField("iaod0axp")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "b5luytfe",
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
    "id": "ykyi7ogb",
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
    "id": "xtxr4gvh",
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
    "id": "5laaxwt4",
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
    "id": "wbqj4sdy",
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
    "id": "vtsanfju",
    "name": "description",
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
    "query": "SELECT\n  (ROW_NUMBER() OVER()) as id,\n    s.school_name,\n    w.website_name,\n    w.type,\n    w.url AS raw_url\nFROM\n    school s\nJOIN\n    website w ON s.id = w.school_id;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "bwjgeaaa",
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
    "id": "z27ynjnh",
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
    "id": "yrlwjl0e",
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
    "id": "iaod0axp",
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

  // remove
  collection.schema.removeField("b5luytfe")

  // remove
  collection.schema.removeField("ykyi7ogb")

  // remove
  collection.schema.removeField("xtxr4gvh")

  // remove
  collection.schema.removeField("5laaxwt4")

  // remove
  collection.schema.removeField("wbqj4sdy")

  // remove
  collection.schema.removeField("vtsanfju")

  return dao.saveCollection(collection)
})
