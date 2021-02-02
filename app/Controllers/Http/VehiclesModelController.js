const VehicleModel = use('App/Models/VehicleModel')
const Database = use('Database')

class VehiclesModelController {
  async create({ request }) {
    const data = request.only(['name', 'brand_id'])
  
    const vehicleModel = await VehicleModel.create(data)
    
    return vehicleModel
  }

  async delete({ params, response }) {
    const { id } = params

    const vehicleModel = await VehicleModel.find(id)

    if(!vehicleModel) 
      return response.status(404).json({ message: 'Vehicle Model not found!' })

    await vehicleModel.delete()

    return { id }
  }

  async find() {
    const vehiclesModels = await Database.table('vehicle_models')
      .select('vehicle_models.name', 'vehicle_models.id')

    return vehiclesModels
  }

  async findOne({ params, response }) {
    const { id } = params

    const vehicleModel = await Database.table('vehicle_models')
      .where('vehicle_models.id', id)
      .select('vehicle_models.name', 'vehicle_models.id')

    if(!vehicleModel.length)
      return response.status(404).json({ message: 'Vehicle Model not found!' })

    return vehicleModel
  }

  async update({ request, params, response }) {
    const data = request.only(['name'])
    const { id } = params

    const vehicleModel = await VehicleModel.find(id)

    if(!vehicleModel)
      return response.status(404).json({ message: 'Vehicle Model not found!' })

    vehicleModel.merge(data)
    await vehicleModel.save()

    return { id }
  }
}

module.exports = VehiclesModelController
