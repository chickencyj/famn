const service = require('feathers-mongoose')
import hooks from './hooks'
import MessageModel from '../../models/message'

export default function() {
  const app = this

  let options = {
    Model: MessageModel,
    paginate: {
      default: 10,
      max: 100
    }
  }

  app.use('/messages', service(options))
  const messageService = app.service('messages')
  messageService.before(hooks.before)
  messageService.after(hooks.after)
}
