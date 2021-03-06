let express = require('express')
let bp = require('body-parser')
require('./dbconfig/db-config')
let port = 3000
let server = express()
server.use(bp.json())
server.use(bp.urlencoded({
  extended: true
}))


let galaxyRoutes = require('./routes/galaxies')
let planetRoutes = require('./routes/planets')
let moonRoutes = require('./routes/moons')
let starRoutes = require('./routes/stars')


server.use('/api/galaxies', galaxyRoutes)
server.use('/api/planets', planetRoutes)
server.use('/api/moons', moonRoutes)
server.use('/api/stars', starRoutes)


server.use('/api/*', (error, req, res, next) => {
  res.send(error)
})

server.use('*', (req, res, next) => {
  res.status(404).send('<h1>NO PAGE FOUND</h1>')
})










server.listen(port, () => {
  console.log('SPACE....', port)
})