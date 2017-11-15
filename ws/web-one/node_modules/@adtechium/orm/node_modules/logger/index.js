const format = require('util').format
module.exports = [
  'debug', 'info', 'warn', 'error'
].reduce((logger, level) => Object.assign(logger, {[level]: (...args) => {
    args[0] = format('[%s] %s', level, args[0])
    console.log.apply(console, args)
}}), {})
