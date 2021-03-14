import {build, fake} from 'test-data-bot'

exports.buildUser = build('User').fields({
  username: fake(f => f.internet.userName()),
  password: fake(f => f.internet.password())
})