import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DevicesController {
  public async view({ params }: HttpContextContract) {
    return { params };
  }
}
