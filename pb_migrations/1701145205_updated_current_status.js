/// <reference path="../pb_data/types.d.ts" />
migrate((db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y")

  collection.options = {
    "query": "SELECT DISTINCT \n  (ROW_NUMBER() OVER()) as id,\n  school_id, \n  website_id\nFROM website_status;\n"
  }

  // remove
  collection.schema.removeField("uzfoi5g8")

  // remove
  collection.schema.removeField("jebvl8k9")

  // remove
  collection.schema.removeField("q7r31dwv")

  // remove
  collection.schema.removeField("9e1vo3sd")

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "c2j2hyuc",
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
    "id": "qxvgt1ph",
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

  return dao.saveCollection(collection)
}, (db) => {
  const dao = new Dao(db)
  const collection = dao.findCollectionByNameOrId("f4m5nolotvmtj7y")

  collection.options = {
    "query": "WITH RankedStatus AS (\n    SELECT\n        ROW_NUMBER() OVER (ORDER BY created DESC) AS id,\n        school_id,\n        website_id,\n        status_code,\n        description,\n        created\n    FROM\n        website_status\n)\nSELECT\n    id,\n    school_id,\n    website_id,\n    status_code,\n    description,\n    created\nFROM\n    RankedStatus\nWHERE\n    id = 1;\n"
  }

  // add
  collection.schema.addField(new SchemaField({
    "system": false,
    "id": "uzfoi5g8",
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
    "id": "jebvl8k9",
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
    "id": "q7r31dwv",
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
    "id": "9e1vo3sd",
    "name": "description",
    "type": "json",
    "required": false,
    "presentable": false,
    "unique": false,
    "options": {}
  }))

  // remove
  collection.schema.removeField("c2j2hyuc")

  // remove
  collection.schema.removeField("qxvgt1ph")

  return dao.saveCollection(collection)
})
