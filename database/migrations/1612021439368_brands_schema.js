'use strict'

const Schema = use('Schema')

class BrandsSchema extends Schema {
  up () {
    this.create('brands', (table) => {
      table.increments()
      table.string('name', 30).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('brands')
  }
}

module.exports = BrandsSchema
