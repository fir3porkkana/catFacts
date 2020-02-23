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
    const url = `https://cat-fact.herokuapp.com/facts/`

    request(
        { url },
        (error, response, body) => {
            if (error || response.statusCode !== 200) {
                console.log('error: ', error);

                if (error) {
                    return res.status(500).json({ type: "error", message: error.message })

                } else {
                    return res.status(500).json({ type: "error" })
                }
            }

            res.json(JSON.parse(body))
        }
    )
})


app.use(unknownEndpoint)
app.use(errorHandler)

module.exports = app