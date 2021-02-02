'use strict'

class Brand {
  get rules () {
    return {
      name: 'required|unique:brands'
    }
  }

  get messages () {
    return {
      'name.required': 'Name is required!',
      'name.unique': 'Name already exists!',
    }
  }

  async fails(errorMessages) {
		return this.ctx.response.status(400).json({ message: errorMessages[0].message })
	}
}

module.exports = Brand
