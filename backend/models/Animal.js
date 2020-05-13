const mongoose = require('mongoose')
const Schema = mongoose.Schema; 

const animalSchema = new Schema({
    name:String,
    color: String,
    amount: Number
    },
    {
    timestamps: {
      createdAt: 'createdAt',
      updatedAt: 'updatedAt'
    }
})




const Animal  = mongoose.model('Animal', animalSchema)

module.exports = Animal;