const express = require("express")
const bodyParser = require("body-parser")
const app = express()
const morgan = require("morgan")
const cors = require("cors")
const request = require("request");


const errorHandler = (error, req, res, next) => {
    console.error(error.message)
    next(error)
}

const unknownEndpoint = (req, res) => {
    res.status(404).send({ error: "unknown endpoint" })
}

app.use(cors())
app.use(express.static("build"))
app.use(bodyParser.json())

morgan.token("datalogger", (req, res) => {
    return JSON.stringify(req.body)
})
app.use(morgan(":method :url :response-time ms :datalogger"))

app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    next();
});

app.get("/api/facts/", (req, res, next) => {
    const url = `https://cat-fact.herokuapp.com/facts/random?animal_type=cat&amount=5`

    request(
        { url },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                console.log('error: ', error);

                return res.status(500).json({ type: "error", message: error.message })
            }

            res.json(JSON.parse(body))
        }
    )
    // Person.findById(req.params.id)
    //     .then(person => {
    //         if (person) {
    //             res.json(person.toJSON())
    //         } else {
    //             res.status(404).end()
    //         }
    //     })
    //     .catch(error => next(error))
})

app.post(`/api/facts`, (req, res) => {
    // GET /facts/random?animal_type=cat&amount=2


    const body = req.body
    console.log("näin sitä pyörää ajetaan", body)

    if (body.number === undefined) {
        return res.status(400).json({
            error: "number missing"
        })
    }

    if (body.name === undefined) {
        return res.status(400).json({
            error: "name missing"
        })
    }

    if (luettelo.map(person => person.name).includes(body.name)) {
        return res.status(400).json({
            error: "name must be unique"
        })
    }

    const person = new Person({
        id: Math.floor(Math.random() * 10000),
        name: body.name,
        number: body.number
    })

    person.save().then(savedPerson => {
        res.json(savedPerson.toJSON)
    })
})

app.put("/api/notes/:id", (req, res, next) => {
    const body = req.body

    const person = {
        id: req.params.id,
        name: body.name,
        number: body.number
    }

    Person.findByIdAndUpdate(req.params.id, person)
        .then(updatedPerson => {
            res.json(updatedPerson.toJSON())
        })
        .catch(error => next(error))
})


app.use(unknownEndpoint)
app.use(errorHandler)
const PORT = 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})
