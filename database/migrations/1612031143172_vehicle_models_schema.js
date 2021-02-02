'use strict'

const Schema = use('Schema')

class VehicleModelsSchema extends Schema {
  up () {
    this.create('vehicle_models', (table) => {
      table.increments()
      table.integer('brand_id')
        .unsigned()
        .references('id')
        .inTable('brands')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.string('name', 30).notNullable().unique()
      table.timestamps()
    })
  }

  down () {
    this.drop('vehicle_models')
  }
}

module.exports = VehicleModelsSchema
