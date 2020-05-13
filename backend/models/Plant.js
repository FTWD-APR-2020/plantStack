const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const plantSchema = new Schema({
    name:String,
    color: { type: String, default: 'green'},
    amount: Number
    },
    {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
})




const Plant  = mongoose.model('Plant', plantSchema)

module.exports = Plant;