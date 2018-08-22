let mongoose = require('mongoose')
let Schema = mongoose.Schema
let schemaName = 'Planet'

let schema = new Schema({
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    default: 'this planet is lacking a description'
  },
  habitable: {
    type: Boolean
  }
})

module.exports = mongoose.model(schemaName, schema)