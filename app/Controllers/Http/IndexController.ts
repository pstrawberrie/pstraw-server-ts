import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class IndexController {
  public async index(ctx: HttpContextContract) {
    return await ctx.view.render('index', { extra: 'data is here' })
  }

  public async spa(ctx: HttpContextContract) {
    return await ctx.view.render('index')
  }
}
