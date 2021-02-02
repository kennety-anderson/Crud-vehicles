'use strict'

const Schema = use('Schema')

class VehiclesSchema extends Schema {
  up () {
    this.create('vehicles', (table) => {
      table.increments()
      table.integer('brand_id')
        .unsigned()
        .references('id')
        .inTable('brands')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.integer('vehicle_model_id')
        .unsigned()
        .references('id')
        .inTable('vehicle_models')
        .onUpdate('CASCADE')
        .onDelete('CASCADE')
      table.decimal('value').notNullable()
      table.integer('year_model').notNullable()
      table.string('fuel', 10).notNullable()
      table.timestamps()
    })
  }

  down () {
    this.drop('vehicles')
  }
}

module.exports = VehiclesSchema
