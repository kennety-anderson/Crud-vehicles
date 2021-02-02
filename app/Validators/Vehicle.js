'use strict'

class Vehicle {
  get rules () {
    return {
      value: 'required',
      year_model: 'required',
      fuel: 'required',
      brand_id: 'required',
      vehicle_model_id: 'required'
    }
  }

  get messages () {
    return {
      'value.required': 'Value is required!',
      'year_model.required': 'Year_model is required!',
      'fuel.required': 'Fuel is required!',
      'brand_id.required': 'Brand_id is required!',
      'vehicle_model_id.required': 'Vehicle_model_id is required!'
    }
  }

  async fails(errorMessages) {
		return this.ctx.response.status(400).json({ message: errorMessages[0].message })
	}
}

module.exports = Vehicle
