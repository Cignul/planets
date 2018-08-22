let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Moon'

let schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'this moon is lacking a description'
  },
  mass: {
    type: Number
  }
})

module.exports = mongoose.model(schemaName, schema)