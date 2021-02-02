const Route = use('Route')

Route.get('brands', 'BrandController.find').prefix('/api/')
Route.get('models', 'VehiclesModelController.find').prefix('/api/')
Route.get('vehicles', 'VehicleController.find').prefix('/api/')

Route.group(() => {
  Route.post('brands', 'BrandController.create').validator('Brand')
  Route.get('brands/:id', 'BrandController.findOne')
  Route.put('brands/:id', 'BrandController.update').validator('Brand')
  Route.delete('brands/:id', 'BrandController.delete')

  Route.post('models', 'VehiclesModelController.create').validator('VehiclesModel')
  Route.get('models/:id', 'VehiclesModelController.findOne')
  Route.put('models/:id', 'VehiclesModelController.update')
  Route.delete('models/:id', 'VehiclesModelController.delete')

  Route.post('vehicles', 'VehicleController.create').validator('Vehicle')
  Route.get('vehicles/:id', 'VehicleController.findOne')
  Route.put('vehicles/:id', 'VehicleController.update')
  Route.delete('vehicles/:id', 'VehicleController.delete')
}).middleware(['authentication']).prefix('/api/')
