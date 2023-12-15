/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vavmdkml7r5yaax")

  collection.name = "current_status"
  collection.options = {
    "query": "SELECT \n(ROW_NUMBER() OVER()) as id,\nschool_id,\nwebsite_id,\n  status_code,\n  description\nFROM\ncurrent_site_health"
  }

  // remove
  collection.schema.removeField("nghg8idx")

  // remove
  collection.schema.removeField("kuhuxnlo")

  // remove
  collection.schema.removeField("udmviec9")

  // remove
  collection.schema.removeField("tyha3xd1")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "gt4rb9r8",
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
    "id": "7p4qq0lq",
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
    "id": "h0qigp2s",
    "name": "status_code",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "iuyfkiyf",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("vavmdkml7r5yaax")

  collection.name = "current_statuss"
  collection.options = {
    "query": "SELECT \n(ROW_NUMBER() OVER()) as id,\nschool_id,\nwebsite_id,\n  status_code,\n  description\nFROM\ncurrent_status"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "nghg8idx",
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
    "id": "kuhuxnlo",
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
    "id": "udmviec9",
    "name": "status_code",
    "type": "number",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {
      "min": null,
      "max": null,
      "noDecimal": false
    }
  }))

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "tyha3xd1",
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

  // remove
  collection.schema.removeField("gt4rb9r8")

  // remove
  collection.schema.removeField("7p4qq0lq")

  // remove
  collection.schema.removeField("h0qigp2s")

  // remove
  collection.schema.removeField("iuyfkiyf")

  return dao.saveCollection(collection)
})
