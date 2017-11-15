const url = require('url')
const logger = require('logger')
const orm = require('@adtechium/orm')
const model = orm.declare('my model')

const svr = module.exports = require('http').createServer((q,r) => {
    const [k,v] = url.parse(q.url).pathname.substr(1).split('/')
    
    r.setHeader('content-type', 'application/json')
    
    if (q.method != 'GET') {
        r.statusCode = 404
        r.end(JSON.stringify({message: "bad request"}))
        return 
    }
    
    if (v) {
        logger.debug('setting ', k, v)
        model.set(k, v)
    }
    
    r.statusCode = 200
    r.end(JSON.stringify( model.get(k) ) )
})

svr.listen(process.env.PORT || 3031, (e) => console.log(e || 'web-one started OK'))
