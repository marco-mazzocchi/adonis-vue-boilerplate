import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class Login {
  public async login(ctx: HttpContextContract) {
    const { request, response, auth } = ctx
    const email = request.input('email')
    const password = request.input('password')

    try {
      await auth.use('web').attempt(email, password)
      return {
        id: auth.use('web').user!.id,
        email: auth.use('web').user!.email,
      }
    } catch {
      return response.badRequest('Credenziali non valide')
    }
  }

  public async logout(ctx: HttpContextContract) {
    const { auth } = ctx
    await auth.use('web').logout()
    return 'success'
  }
}
