const logger = require('logger')

//aha  ?
exports.declare = (name) => {
    const data = {}
    return {
      get: (id) => logger.info('getting', id, data[id]) || data[id] || null,
      set: (id, value) => logger.info('setting id %s to', id, value) || (data[id] = value)
    }
}