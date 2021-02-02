const Brand = use('App/Models/Brand')
const Database = use('Database')

class BrandController {
  async create({ request }) {
    const data = request.only(['name'])

    const brand = await Brand.create(data)
   
    return brand
  }

  async delete({ params, response }) {
    const { id } = params

    const brand = await Brand.find(id)

    if(!brand) return response.status(404).json({ message: 'Brand not found!' })

    await brand.delete()

    return { id }
  }

  async find() {
    const brands = await Database.table('brands')
      .select('brands.name', 'brands.id')

    return brands
  }

  async findOne({ params, response }) {
    const { id } = params

    const brand = await Database.table('brands')
      .where('brands.id', id)
      .select('brands.name', 'brands.id')

    if(!brand.length) return response.status(404).json({ message: 'Brand not found!' })

    return brand
  }

  async update({ request, params, response }) {
    const data = request.only(['name'])
    const { id } = params

    const brand = await Brand.find(id)

    if(!brand) return response.status(404).json({ message: 'Brand not found!' })

    brand.merge(data)
    await brand.save()

    return { id }
  }
}

module.exports = BrandController
