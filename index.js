const express = require('express')
const app = express()

app.use(express.json())

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
    res.json(contacts)
})
  
app.get('/info', (req, res) => {
    res.send(`Phonebook has info for ${contacts.length} people <br> ${new Date}`)
})

app.get('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    const person = contacts.find(person => person.id === id)
    if (person) {
        response.json(person)
    } else {
        response.status(404).end()
    }
})

app.delete('/api/persons/:id', (request, response) => {
    const id = Number(request.params.id)
    contacts = contacts.filter(person => person.id !== id)

    response.status(204).end()
})

app.post('/api/persons', (request, response) => {
    const body = request.body
  
    if (!body.name || !body.number) {
      return response.status(400).json({ 
        error: 'name or number missing' 
      })
    }
    const contactExists = contacts.find(person => person.name === body.name)
    if (contactExists) {
        return response.status(400).json({ 
            error: 'contact already in phonebook' 
        })
    }
    const person = {
        name: body.name,
        number: body.number,
        id: createNewId(),
    }
  
    contacts = contacts.concat(person)
  
    response.json(person)
  })

const PORT = 3001
app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`)
})