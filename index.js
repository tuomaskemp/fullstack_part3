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

app.get('/api/persons', (req, res, next) => {
    Contact.find({})
    .then(result => {
      res.json(result)
    })
    .catch(error => next(error))
})
  
app.get('/info', (req, res) => {  
  Contact.countDocuments({}, (err, cnt) => {
      res.send(`Phonebook has info for ${cnt} people <br> ${new Date}`)
    })
})

app.get('/api/persons/:id', (request, response, next) => {
    Contact.findById(request.params.id).then(person => {
      if (person) {
        response.json(person)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

app.delete('/api/persons/:id', (request, response, next) => {
    Contact.findByIdAndRemove(request.params.id).then(res => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.post('/api/persons', (request, response, next) => {
    const body = request.body

    if (!body.name || !body.number) {
      return response.status(400).json({ 
        error: 'name or number missing' 
      })
    }

    const person = new Contact({
        name: body.name,
        number: body.number
    })
  
    person
    .save()
    .then(savedContact => savedContact.toJSON())
    .then(formattedContact => {
      response.json(formattedContact)
    })
    .catch(error => next(error))
})

app.put('/api/persons/:id', (request, response, next) => {
  const body = request.body

  const person = {
    name: body.name,
    number: body.number
  }

  Contact.findByIdAndUpdate(request.params.id, person, { new: true })
  .then(updatedContact => response.json(updatedContact))
  .catch(error => next(error))
})

const endpointError = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}
app.use(endpointError)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)
  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }
  next(error)
}

app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})