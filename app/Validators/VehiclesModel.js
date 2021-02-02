'use strict'

class VehiclesModel {
  get rules () {
    return {
      name: 'required|unique:vehicle_models',
      brand_id: 'required'
    }
  }

  get messages () {
    return {
      'name.required': 'Name is required!',
      'name.unique': 'Name already exists!',
      'brand_id.required': 'Brand_id is required!'
    }
  }

  async fails(errorMessages) {
		return this.ctx.response.status(400).json({ message: errorMessages[0].message })
	}
}

module.exports = VehiclesModel
