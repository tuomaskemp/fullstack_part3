const mongoose = require('mongoose')
const uniqueValidator = require('mongoose-unique-validator')

const url = process.env.MONGODB_URI

console.log('connecting to', url)
mongoose.connect(url)
    .then(() => {
        console.log('connected to MongoDB')
    })
    .catch((error) => {
        console.log('error connecting to MongoDB:', error.message)
    })

const contactSchema = new mongoose.Schema({
    name: {
        type: String,
        index: true,
        unique: true,
        required: true,
        minlength: 3
    },
    number: {
        type: String,
        index: true,
        required: true,
        minlength: 8
    }
})

contactSchema.plugin(uniqueValidator)

contactSchema.set('toJSON', {
    transform: (document, returnedObject) => {
        returnedObject.id = returnedObject._id.toString()
        delete returnedObject._id
        delete returnedObject.__v
    }
})

module.exports = mongoose.model('Contact', contactSchema)