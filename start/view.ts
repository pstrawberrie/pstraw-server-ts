import View from '@ioc:Adonis/Core/View'
import Env from '@ioc:Adonis/Core/Env'

const isDev = Env.get('NODE_ENV') !== 'production'
const publicPath = isDev ? 'http://localhost:4000' : ''

// Global Function Example
// View.global('nl2br', function (text) {
//   return text.replace(/([^>\r\n]?)(\r\n|\n\r|\r|\n)/g, '$1<br />$2')
// })

// site global
View.global('site', {
  name: "pstraw's flap n slap",
  publicPath,
})
