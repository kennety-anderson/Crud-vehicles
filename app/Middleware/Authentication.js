'use strict'

class Authentication {
  async handle ({ request, response }, next) {
    const authorization = request.header('Authorization')

    if(!authorization)
      return response.status(401).json({message: 'Unauthorized'})

    await next()
  }
}

module.exports = Authentication
