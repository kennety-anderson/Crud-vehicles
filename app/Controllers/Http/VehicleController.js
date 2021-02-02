const Vehicle = use('App/Models/Vehicle')
const Database = use('Database')

class VehicleController {
  async create({ request }) {
    console.log('=== chamou a função ===');
    const data = request.only([
      'value',
      'year_model',
      'fuel',
      'brand_id',
      'vehicle_model_id'
    ])

    const vehicleModel = await Vehicle.create(data)
    
    return vehicleModel
  }

  async delete({ params }) {
    const { id } = params

    const vehicle = await Vehicle.find(id)

    if(!vehicle) return response.status(404).json({ message: 'Vehicle not found!' })

    await vehicle.delete()

    return { id }
  }

  async find() {
    const vehicles = await Database.table('vehicles')
      .innerJoin('brands', 'vehicles.brand_id', 'brands.id')
      .innerJoin('vehicle_models', 'vehicles.vehicle_model_id', 'vehicle_models.id')
      .select(
        'vehicles.id',
        'brands.name as brand',
        'vehicle_models.name as model',
        'value',
        'year_model',
        'fuel'
      )


    return vehicles
  }

  async findOne({ params, response }) {
    const { id } = params

    const vehicle = await Database.table('vehicles')
      .where('vehicles.id', id)
      .innerJoin('brands', 'vehicles.brand_id', 'brands.id')
      .innerJoin('vehicle_models', 'vehicles.vehicle_model_id', 'vehicle_models.id')
      .select(
        'vehicles.id',
        'brands.name as brand',
        'vehicle_models.name as model',
        'value',
        'year_model',
        'fuel'
      )

    if(!vehicle.length) return response.status(404).json({ message: 'Vehicle not found!' })

    return vehicle
  }

  async update({ request, params, response }) {
    const data = request.only(['value', 'year_model', 'fuel'])
    const { id } = params

    const vehicle = await Vehicle.find(id)

    if(!vehicle) return response.status(404).json({ message: 'Vehicle not found!' })

    vehicle.merge(data)
    await vehicle.save()

    return { id }
  }
}

module.exports = VehicleController
