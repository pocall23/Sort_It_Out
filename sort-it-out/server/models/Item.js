const mongoose = require('mongoose')
const Schema = mongoose.Schema



const Item = new Schema(
    {
        name: { type: String, required: true },
        quantity: { type: Number, required: true},
        category: {type: String, required: true},
        dateAdded: { type: Date, required: true },
    },
    { timestamps: true },
)

module.exports  = mongoose.model('items', Item)