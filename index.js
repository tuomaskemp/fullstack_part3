require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const Contact = require('./models/contact')


morgan.token('body', (req, res) => JSON.stringify(req.body))
app.use(morgan(':method :url :status :res[content-length] - :response-time ms :body'))
app.use(cors())
app.use(express.json())
app.use(express.static('build'))

let contacts = [
    { 
      "name": "Arto Hellas", 
      "number": "040-123456",
      "id": 1
    },
    { 
      "name": "Ada Lovelace", 
      "number": "39-44-5323523",
      "id": 2
    },
    { 
      "name": "Dan Abramov", 
      "number": "12-43-234345",
      "id": 3
    },
    { 
      "name": "Mary Poppendieck", 
      "number": "39-23-6423122",
      "id": 4
    },
]

const createNewId = () => {
    return Math.floor(Math.random() * 1000000)
}

app.get('/api/persons', (req, res) => {
    Contact.find({}).then(result => {
      res.json(contacts)
    })
})
  
app.get('/info', (req, res) => {
    res.send(`Phonebook has info for ${contacts.length} people <br> ${new Date}`)
})

app.get('/api/persons/:id', (request, response) => {
    Contact.findById(request.params.id).then(person => {
      response.json(person)
    })
})

app.delete('/api/persons/:id', (request, response) => {
    Contact.deleteOne(req.params.id).then(person => {
      response.status(204).end()
    })
})

app.post('/api/persons', (request, response) => {
    const body = request.body

    if (!body.name || !body.number) {
      return response.status(400).json({ 
        error: 'name or number missing' 
      })
    }
    /* const contactExists = contacts.find(person => person.name === body.name)
    if (contactExists) {
        return response.status(400).json({ 
            error: 'contact already in phonebook' 
        })
    } */
    const person = new Contact({
        name: body.name,
        number: body.number
    })
  
    person.save().then(savedContact => {
      response.json(savedContact)
    })
})

const PORT = process.env.PORT
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})