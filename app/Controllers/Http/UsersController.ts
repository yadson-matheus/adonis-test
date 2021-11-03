import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

import User from 'App/Models/User'
import CreateUser from 'App/Validators/CreateUserValidator'

export default class UsersController {
  public async index({ params }: HttpContextContract) {
    return { params };
  }

  public async add({ request }: HttpContextContract) {
    const data = await request.validate(CreateUser)

    const user = new User();

    await user.fill(data).save()

    return {user};
  }
}
